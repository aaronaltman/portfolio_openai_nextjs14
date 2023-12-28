import Image from "next/image";
import React from "react";

export default function NotesLogo() {
  return (
    <>
      <Image
        width={300}
        height={100}
        alt="home"
        src="/logo-horizontal.png"
        className=""
      />
    </>
  );
}
