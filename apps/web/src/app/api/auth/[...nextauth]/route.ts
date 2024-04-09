import NextAuth, { AuthOptions } from 'next-auth';
import GoggleProvider from 'next-auth/providers/google';

export const authConfig: AuthOptions = {
  providers: [
    GoggleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
};

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
