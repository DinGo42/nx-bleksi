"use client";
import { Button, Link } from "@/shared";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { FC, memo } from "react";

export type HomeProps = {
  session: Session | null;
};

export const Home: FC<HomeProps> = memo(({ session }) => {
  return (
    <div className="bg-slate-800 flex items-center justify-center gap-10 w-screen h-screen flex-col text-white">
      <span>Hello {session?.user?.name}</span>
      <Link href={"/profile"}>Go to profile</Link>
      <Button onClick={() => signOut()} styleType="PRIMARY">
        signOut
      </Button>
    </div>
  );
});
