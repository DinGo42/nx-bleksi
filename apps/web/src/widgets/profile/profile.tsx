"use client";
import { Button } from "@/shared";
import Image from "next/image";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { FC, memo } from "react";

export type ProfileProps = {
  session: Session | null;
};

export const Profile: FC<ProfileProps> = memo(({ session }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Image alt="avatar" className="size-20 rounded-full" height={80} src={session?.user?.image ?? ""} width={80} />

      <span>Hello {session?.user?.name}</span>
      <span>Email: {session?.user?.email}</span>

      <Button onClick={() => signOut({ callbackUrl: "/login", redirect: true })} styleType="PRIMARY">
        Logout
      </Button>
    </div>
  );
});
