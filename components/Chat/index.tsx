"use client";

// next
import { useSession } from "next-auth/react";

// hooks
import useMessages from "../../hooks/useMessages";

// comp
import { Message } from "..";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

type Props = {
  id: string;
};

const Chat = ({ id }: Props) => {
  const { data: session } = useSession();
  const messages = useMessages({ session, id });

  return (
    <div className="flex-1 z-0 overflow-y-auto overflow-x-hidden">
      {messages?.empty && (
        <>
          <p className="mt-10 text-center text-white">Type a prompt in below to get started!</p>
          <ArrowDownCircleIcon className="w-10 h-10 mx-auto mt-5 text-white animate-bounce" />
        </>
      )}

      {messages?.docs.map((message) => (
        <Message key={message.id} message={message.data()} />
      ))}
    </div>
  );
};

export default Chat;
