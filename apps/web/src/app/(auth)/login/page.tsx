"use client";
import { Button } from "@/shared";
import { signIn } from "next-auth/react";

export default function Index() {
  return (
    <div className="flex items-center justify-center gap-10">
      <span>Please login</span>
      <Button onClick={() => signIn("google", { callbackUrl: "/", redirect: true })} styleType="PRIMARY">
        Login
      </Button>
    </div>
  );
}
