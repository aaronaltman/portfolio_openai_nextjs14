import { createNoteSchema } from "@/lib/validation/note";
import { auth, currentUser } from "@clerk/nextjs";
import prisma from "@/lib/db/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parseResult = createNoteSchema.safeParse(body);
    if (!parseResult.success) {
      return new Response(JSON.stringify({ error: parseResult.error }), {
        status: 400,
      });
    }

    const { title, content } = parseResult.data;

    const { userId } = await auth(); // Ensure this matches the user ID variable name used in your database schema.

    if (!userId) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    const note = await prisma.note.create({
      data: {
        title,
        content,
        userId, // Ensure this is the correct field name in your database schema.
      },
    });

    return new Response(JSON.stringify({ note }), { status: 201 });
  } catch (error) {
    console.error(error); // Changed to console.error for better error logging.
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
