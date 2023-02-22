import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Session } from "next-auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { CHATS, USERS } from "../constants";
import { db } from "../lib/firebase.config";

type Props = {
  session: Session | null;
  router: AppRouterInstance
};

export const createNewChat = async ({ session, router }: Props) => {
  const doc = await addDoc(
    collection(db, USERS, session?.user?.email!, CHATS),
    {
      messages: [],
      userId: session?.user?.email!,
      createdAt: serverTimestamp(),
    }
  );

  router.push(`/chat/${doc.id}`);
};
