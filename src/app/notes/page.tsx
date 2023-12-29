import { auth } from "@clerk/nextjs";
import prisma from "@/lib/db/prisma";

export async function getServerSideProps(context: any) {
  // Extract the req object from the context
  const { req } = context;

  // Await the resolution of the auth function
  const userId = await auth();

  // Extract the userId from the user object

  if (!userId) {
    return { redirect: { destination: "/login", permanent: false } };
  }

  const allNotes = await prisma.note.findMany({
    where: {
      userId,
    },
  });

  return {
    props: { allNotes },
  };
}

export default function Page({ allNotes }: any) {
  return (
    <main>
      <section>
        <h1 className="text-5xl font-bold">Clever Notes AI</h1>
        <div>{JSON.stringify(allNotes)}</div>
      </section>
    </main>
  );
}
