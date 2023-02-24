import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Session } from "next-auth";
import { AVATAR, BOT_URL, CHATS, MESSAGES, USERS } from "../constants";
import { db } from "../lib/firebase.config";
import toast from "react-hot-toast";

type Props = {
  e: React.FormEvent<HTMLFormElement>;
  msg: string;
  setMsg: React.Dispatch<React.SetStateAction<string>>;
  session: Session | null;
  chatId: string;
};

export const sendMessage = async ({
  e,
  msg,
  setMsg,
  session,
  chatId,
}: Props) => {
  e.preventDefault();

  if (!msg) return;

  const input = msg.trim();
  setMsg("");

  const message: Message = {
    text: input,
    createdAt: serverTimestamp(),
    user: {
      _id: session?.user?.email!,
      name: session?.user?.name!,
      avatar: session?.user?.image || `${AVATAR}${session?.user?.name}`,
    },
  };

  await addDoc(
    collection(db, USERS, session?.user?.email!, CHATS, chatId, MESSAGES),
    message
  );

  // toast notification
  const notification = toast.loading("ChatGPT is thinking");

  await fetch("/api/askQuestion", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      msg,
      session,
      chatId,
    }),
  })
    .then((res) =>
      toast.success("ChatGPT has responded!", {
        id: notification,
      })
    )
    .catch((err) => toast.error(err?.message));
};
