"use client";

// icons
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

// next
import { useSession } from "next-auth/react";
import React, { useState } from "react";

// utils
import { sendMessage } from "../../utils/sendMessage";

type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const [msg, setMsg] = useState("");
  const { data: session } = useSession();

  return (
    <div className="z-20 bg-gray-700/50 text-gray-400 rounded-lg text-sm">
      <form
        className="p-5 space-x-5 flex"
        onSubmit={(e) => sendMessage({ e, msg, setMsg, session, chatId })}
      >
        <input
          required
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          type="text"
          placeholder="Type your message here..."
          className="focus:outline-none bg-transparent flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
          disabled={!session}
        />

        <button
          disabled={!msg || !session}
          type="submit"
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>

      <div>{/* ModelSelection */}</div>
    </div>
  );
};

export default ChatInput;
