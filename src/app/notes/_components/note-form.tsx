"use client";

import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import { useState, ChangeEvent, FormEvent, use, useEffect } from "react"; // Import ChangeEvent and FormEvent types

export default function NoteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { userId }: { userId: string | null } = auth();

  const authorId = userId;

  const handleSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
    // Use ChangeEvent<HTMLInputElement>
    setTitle(e.target.value);
    console.log(title);
  };

  const handleSetContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // Use ChangeEvent<HTMLTextAreaElement>
    setContent(e.target.value);
    console.log(content);
  };

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Get the current user's ID from Clerk

    const noteData = {
      title,
      content,
      authorId,
    };

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(noteData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data, "note created");
        setTitle("");
        setContent("");
      } else {
        // Handle errors for unauthorized or other server-side issues
        console.error("Server error:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form className="flex flex-col gap-10 py-10" onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="Title"
        className="border border-black/10 p-4"
        onChange={handleSetTitle}
        value={title}
      />
      <textarea
        placeholder="Content"
        className="border border-black/10 p-4"
        onChange={handleSetContent}
        value={content}
      />
      <Button type="submit">Create Note</Button>
    </form>
  );
}
