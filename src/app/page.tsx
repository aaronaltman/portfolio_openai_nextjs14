import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col max-w-2xl mx-auto">
      <h1 className="text-5xl font-bold py-5">
        Clever AI - Smart Notes Application
      </h1>
      <p className="py-5">
        Clever Notes AI is a smart notes application that uses artificial
        intelligence to help you take notes. It is powered by{" "}
        <a href="https://bigboss.ai">Big Boss Enterprises</a>.
      </p>
    </section>
  );
}
