import { json, createCookieSessionStorage } from '@remix-run/cloudflare';

export async function action({ request, context }) {
  const formData = await request.formData();
  const theme = formData.get('theme');

  // Get the session secret from either Vercel or Cloudflare environment
  const sessionSecret = process.env.SESSION_SECRET || 
                       (context?.cloudflare?.env?.SESSION_SECRET) || 
                       'dev-secret-change-in-production';

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
