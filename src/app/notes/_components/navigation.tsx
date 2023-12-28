import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import React from "react";

export default function NotesNavigation() {
  return (
    <nav>
      <ul className="flex flex-wrap gap-10 items-center justify-center">
        <li>
          <UserButton afterSignOutUrl="/" />
        </li>
        <li>
          <Button variant={"secondary"}>
            <Plus size={16} className="mr-2" />
            Add Note
          </Button>
        </li>
      </ul>
    </nav>
  );
}
