import { collection } from "firebase/firestore";
import { Session } from "next-auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { CHATS, USERS } from "../constants";
import { db } from "../lib/firebase.config";

type Props = {
  session: Session | null;
};

function useChats({ session }: Props) {
  const [chats, loading, error] = useCollection(
    session && collection(db, USERS, session?.user?.email!, CHATS)
  );

  return chats;
}

export default useChats;
