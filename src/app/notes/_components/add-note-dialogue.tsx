import { Form } from "@/components/ui/form";
import { CreateNoteSchema } from "@/lib/validation/note";
import { zodResolver } from "@hookform/resolvers/zod";

type AddNoteDialogueProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
export default function AddNoteDialogue({
  open,
  setOpen,
}: AddNoteDialogueProps) {
  const form = useForm<CreateNoteSchema>({
    resolver: zodResolver(CreateNoteSchema),
  });

  return <div>add-note-dialogue</div>;
}
