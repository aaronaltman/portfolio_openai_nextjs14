import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen justify-center">
      <SignIn />
    </main>
  );
}
