import { currentUser } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";

export default async function Page() {
  const user = await currentUser();

  if (!user) return <div>Not logged in</div>;

  return (
    <div>
      Hello {user?.firstName} {user?.id}
    </div>
  );
}
