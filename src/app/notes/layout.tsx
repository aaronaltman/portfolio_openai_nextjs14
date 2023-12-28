import React from "react";
import Header from "./_components/header";
import NotesContainer from "./_components/notes-container";

export default function NotesPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NotesContainer>
      <Header />
      {children}
    </NotesContainer>
  );
}
