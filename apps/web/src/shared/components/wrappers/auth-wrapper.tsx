'use client';
import { SessionProvider } from 'next-auth/react';
import { FC, ReactNode } from 'react';

export type AuthWrapperProps = {
  children: ReactNode;
};

export const AuthWrapper: FC<AuthWrapperProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
