import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col max-w-2xl mx-auto mb-20">
      <h1 className="text-5xl font-bold py-5 tracking-tight leading-tight">
        Clever AI - Smart Notes Application
      </h1>
      <p className="py-3 text-2xl tracking-tight leading-10">
        Clever Notes AI is a smart notes application that uses artificial
        intelligence to help you take notes. It is powered by React, NextJS,
        Prisma, MongoDB, Clerk, OpenAI and Pinecone.{" "}
        <a href="https://rapidinsights.ai">Big Boss Enterprises</a>.
      </p>

      <Button asChild>
        <Link href="/notes" className="my-3">
          Get Started Now
        </Link>
      </Button>
    </section>
  );
}
