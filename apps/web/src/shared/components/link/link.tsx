import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export enum LinkStyleTypes {
  NONE = '',
  PRIMARY = 'bg-slate-200 p-4 rounded-lg text hover:scale-105 transition-transform ',
}

type LinkProps = {
  children?: ReactNode;
  className?: string;
  styleType?: keyof typeof LinkStyleTypes;
} & NextLinkProps;

export const Link: FC<LinkProps> = ({
  children,
  className,
  href,
  styleType = 'NONE',
  ...props
}) => (
  <NextLink
    className={twMerge(LinkStyleTypes[styleType], className)}
    href={href}
    {...props}
  >
    {children}
  </NextLink>
);
