"use client";

// comp
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { NewChat } from "..";

type Props = {};

const SideBar = (props: Props) => {
  const { data: session } = useSession();
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* New Chat */}
          <NewChat />

          <div>{/* Model Selection */}</div>

          {/* Chat list */}
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
        />
      )}
    </div>
  );
};

export default SideBar;
