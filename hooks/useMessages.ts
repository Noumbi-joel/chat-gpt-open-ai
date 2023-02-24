import { collection, orderBy, query } from "firebase/firestore";
import { Session } from "next-auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { CHATS, CREATED_AT, MESSAGES, USERS } from "../constants";
import { db } from "../lib/firebase.config";

type Props = {
  session: Session | null;
  id: string;
};

function useMessages({ session, id }: Props) {
  const [messages, loading, error] = useCollection(
    session &&
      query(
        collection(db, USERS, session?.user?.email!, CHATS, id, MESSAGES),
        orderBy(CREATED_AT, "asc")
      )
  );

  return messages;
}

export default useMessages;
