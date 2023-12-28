import { UserButton } from "@clerk/nextjs";
import React from "react";

export default function NotesNavigation() {
  return (
    <nav>
      <ul className="flex flex-wrap gap-10 items-center justify-center">
        <li>
          <UserButton />
        </li>
        <li>notes</li>
        <li>new note</li>
      </ul>
    </nav>
  );
}
