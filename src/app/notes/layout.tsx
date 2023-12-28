import React from "react";
import Header from "./_components/header";

export default function NotesPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
