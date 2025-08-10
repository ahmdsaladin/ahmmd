import { json, createCookieSessionStorage } from '@remix-run/node';

export async function action({ request }) {
  const formData = await request.formData();
  const theme = formData.get('theme');

  // Get the session secret from Vercel environment variables
  const sessionSecret = process.env.SESSION_SECRET || 'dev-secret-change-in-production';

  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: '__session',
      httpOnly: true,
      maxAge: 604_800, // 1 week
      path: '/',
      sameSite: 'lax',
      secrets: [sessionSecret],
      secure: process.env.NODE_ENV === 'production',
    },
  });

  const session = await getSession(request.headers.get('Cookie'));
  session.set('theme', theme);

  return json(
    { status: 'success' },
    {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    }
  );
}
