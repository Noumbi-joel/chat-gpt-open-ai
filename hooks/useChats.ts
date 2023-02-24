import { collection, orderBy, query } from "firebase/firestore";
import { Session } from "next-auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { CHATS, CREATED_AT, USERS } from "../constants";
import { db } from "../lib/firebase.config";

type Props = {
  session: Session | null;
};

function useChats({ session }: Props) {
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, USERS, session?.user?.email!, CHATS),
        orderBy(CREATED_AT, "asc")
      )
  );

  return { chats, loading };
}

export default useChats;
