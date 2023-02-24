import { serverTimestamp } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import { BOT_AVATAR, BOT_URL, MESSAGES, USERS } from "../../constants";
import admin from "firebase-admin";
import { adminDb } from "../../lib/firebase-admin";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { msg, session, chatId } = req.body;

  if (!msg) {
    res.status(400).json({ answer: "Please provide a message!" });
    return;
  }

  if (!chatId) {
    res.status(400).json({ answer: "Please provide a valid chat ID!" });
    return;
  }

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": process.env.X_RapidAPI_KEY as string,
      "X-RapidAPI-Host": process.env.X_RapidAPI_HOST as string,
    },
    body: JSON.stringify({
      question: msg,
      max_response_time: 30,
    }),
  };

  try {
    const response = await fetch(BOT_URL, options);
    const data = await response.json();

    const message: Message = {
      text: data?.answer || "ChatGPT was unable to find an answer for that",
      createdAt: admin.firestore.Timestamp.now(),
      user: {
        _id: "CHATGPT",
        name: "ChatGPT",
        avatar: BOT_AVATAR,
      },
    };

    await adminDb
      .collection(USERS)
      .doc(session?.user?.email)
      .collection("chats")
      .doc(chatId)
      .collection(MESSAGES)
      .add(message);

    res.status(200).json({ answer: data?.answer });
  } catch (err) {
    console.log("ERROR BOT " + err);
    res
      .status(404)
      .json({ answer: "ChatGPT was unable to find an answer for that" });
  }
}
