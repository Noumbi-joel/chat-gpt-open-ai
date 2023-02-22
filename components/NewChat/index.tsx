// icons
import { PlusIcon } from "@heroicons/react/24/solid";

// next
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// utils
import { createNewChat } from "../../utils/createNewChat";

type Props = {};

const NewChat = (props: Props) => {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <div
      className="border-gray-700 border chatRow"
      onClick={() => createNewChat({ router, session })}
    >
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
};

export default NewChat;
