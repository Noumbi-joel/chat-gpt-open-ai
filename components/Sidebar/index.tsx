"use client";

// next
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

// comp
import { ChatRow, NewChat } from "..";

// hooks
import useChats from "../../hooks/useChats";

type Props = {};

const SideBar = (props: Props) => {
  const { data: session } = useSession();
  const chats = useChats({ session });
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* New Chat */}
          <NewChat />

          <div>{/* Model Selection */}</div>

          {/* Chat list */}
          {chats?.docs?.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>

      {session && (
        <Image
          onClick={() => signOut()}
          src={
            session?.user?.image ||
            "https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-1678508335.jpg"
          }
          className="rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
          width={48}
          height={48}
          alt="user image"
          title="sign out"
        />
      )}
    </div>
  );
};

export default SideBar;
