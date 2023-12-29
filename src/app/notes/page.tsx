import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";
import { MyPosts } from "@/constants/posts";
import NoteForm from "./_components/note-form";

export default async function Page() {
  const user = await currentUser();

  if (!user) return <div>Not logged in</div>;

  return (
    <div>
      Hello {user?.firstName} {user?.id} {user?.createdAt}
      <div>
        <h1 className="py-5">All Notes</h1>
        <ul className="flex gap-10 py-5">
          {MyPosts.map((post) => (
            <li key={post.id} className="flex flex-col gap-2">
              <div className="text-lg font-bold">{post.title}</div>
              <div className="text-sm">{post.content}</div>
            </li>
          ))}
        </ul>
      </div>
      <NoteForm />
    </div>
  );
}
