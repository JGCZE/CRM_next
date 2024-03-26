import { connect } from 'mongoose';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDb } from './utils';
import { User } from './models';
import { authConfig } from './auth.config';

export const login = async (credentials) => {
  try {
    await connectToDb();
    const user = await User.findOne({ username: credentials.username });
    if (!user || user.password !== credentials.password) {
      throw new Error('Invalid credentials');
    }

    return user;

  } catch (error) {
    console.log(error);
    throw new Error('Login failed');
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials){
        try {
          const user = await login(credentials)
          return user;
        } catch (error) {
          return null
        }
      }
    })
  ],callbacks: {
    async signIn({ user, account, profile }) {
      /* console.log(user, account, profile); */
      if (account.provider === "github") {
        connectToDb();
        try {
          const user = await User.findOne({ email: profile.email });

          /* if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              image: profile.uvatar_url,
            });
            await newUser.save();
          } */
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
})
