
interface Env {
  TURNSTILE_SECRET_KEY: string;

  EMAIL: {
    send(message: {
      to: string;
      from: string;
      subject: string;
      text: string;
      html?: string;
    }): Promise<unknown>;
  };
}

interface AccessRequest {
  firstName: string;
  lastName: string;
  email: string;
  organization?: string;
  referralSource?: string;
  referralOther?: string;
  turnstileToken: string;
}

const ALLOWED_ORIGINS = [
  'https://refugeediscoursedatabase.org',
  'https://www.refugeediscoursedatabase.org',
  'http://localhost:4200'
];

const ALLOWED_HOSTNAMES = [
  'refugeediscoursedatabase.org',
  'www.refugeediscoursedatabase.org',
  'localhost'
];

function corsHeaders(origin: string | null): HeadersInit {
  return {
    'Access-Control-Allow-Origin':
      origin && ALLOWED_ORIGINS.includes(origin)
        ? origin
        : 'https://refugeediscoursedatabase.org',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin'
  };
}

async function verifyTurnstile(
  token: string,
  secret: string
): Promise<boolean> {
  const response = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        secret,
        response: token
      })
    }
  );

  if (!response.ok) return false;

  const result = await response.json() as {
    success: boolean;
    hostname?: string;
  };

  return (
    result.success === true &&
    !!result.hostname &&
    ALLOWED_HOSTNAMES.includes(result.hostname)
  );
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get('Origin');
    const headers = corsHeaders(origin);

    const json = (body: object, status = 200) =>
      Response.json(body, { status, headers });

    if (request.method === 'OPTIONS') {
      if (!origin || !ALLOWED_ORIGINS.includes(origin)) {
        return new Response(null, { status: 403 });
      }

      return new Response(null, { status: 204, headers });
    }

    if (request.method !== 'POST') {
      return json({ error: 'Method not allowed' }, 405);
    }

    if (!origin || !ALLOWED_ORIGINS.includes(origin)) {
      return json({ error: 'Origin not allowed' }, 403);
    }

    try {
      const data = await request.json() as AccessRequest;

      if (
        typeof data.turnstileToken !== 'string' ||
        !data.turnstileToken ||
        !(await verifyTurnstile(
          data.turnstileToken,
          env.TURNSTILE_SECRET_KEY
        ))
      ) {
        return json({
          error: 'Security verification failed. Please try again.'
        }, 403);
      }

    const firstName = data.firstName?.trim();
    const lastName = data.lastName?.trim();
    const email = data.email?.trim();
    const organization = data.organization?.trim();
    const referralSource = data.referralSource?.trim();
    const referralOther = data.referralOther?.trim() || '';

    if (
    !firstName ||
    !lastName ||
    !email ||
    !organization ||
    !referralSource ||
    (referralSource === 'Other' && !referralOther)
    ) {
    return Response.json(
        { error: 'Please complete all required fields.' },
        { status: 400 }
    );
    }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return json({
          error: 'Please enter a valid email address.'
        }, 400);
      }

      if (
        firstName.length > 150 ||
        lastName.length > 150 ||
        email.length > 254 ||
        organization.length > 200 ||
        referralSource.length > 100
      ) {
        return json({
          error: 'One or more fields are too long.'
        }, 400);
      }

      const message = [
        'New Research Access Request',
        '',
        `First Name: ${firstName}`,
        `Last Name: ${lastName}`,
        `Email: ${email}`,
        `Organization: ${organization || 'Not provided'}`,
      ].join('\n');

      await env.EMAIL.send({
        to: 'info@refugeediscoursedatabase.org',
        from: 'Refugee Discourse Database <access@refugeediscoursedatabase.org>',
        subject: 'New RDD Research Access Request',
        text: message
      });

      return json({
        success: true,
        message: 'Your request has been submitted.'
      });

    } catch (error) {
      console.error('Access request failed:', error);

      return json({
        error: 'Unable to submit your request.'
      }, 500);
    }
  }
};
