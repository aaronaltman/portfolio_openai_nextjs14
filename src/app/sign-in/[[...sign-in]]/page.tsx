import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function SignInPage() {
  return (
    <main className="flex h-screen items-center justify-center">
      <SignIn />
    </main>
  );
}
