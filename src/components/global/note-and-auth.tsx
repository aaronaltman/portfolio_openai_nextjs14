"use server";

import { auth } from "@clerk/nextjs";

export default async function NoteAndAuth() {
  const { userId }: { userId: string | null } = auth();

  return { userId };
}
