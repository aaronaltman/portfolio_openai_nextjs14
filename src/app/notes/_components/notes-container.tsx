import React from "react";

export default function NotesContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-6xl mx-auto min-h-screen">{children}</div>;
}
