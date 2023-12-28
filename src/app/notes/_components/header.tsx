import React from "react";
import NotesNavigation from "./navigation";
import NotesLogo from "./logo";

export default function Header() {
  return (
    <header className=" bg-slate-900 flex justify-between items-center shadow-lg py-4 px-4 top-0 mb-10 rounded-md">
      <NotesLogo />
      <NotesNavigation />
    </header>
  );
}
