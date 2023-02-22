import { deleteDoc, doc } from "firebase/firestore";
import { Session } from "next-auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { CHATS, USERS } from "../constants";
import { db } from "../lib/firebase.config";

type Props = {
  id: string;
  session: Session | null;
  router: AppRouterInstance;
};

export const removeChat = async ({ id, session, router }: Props) => {
  await deleteDoc(doc(db, USERS, session?.user?.email!, CHATS, id));

  router.replace("/");
};
