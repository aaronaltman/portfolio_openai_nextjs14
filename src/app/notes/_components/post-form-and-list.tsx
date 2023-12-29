import { useState } from "react";

export default function NotesPage() {
  // State is lifted to here
  const [notes, setNotes] = useState([]);

  return <div>Hello</div>;
}
