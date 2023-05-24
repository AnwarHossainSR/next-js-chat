import { ref, update } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';

import { database } from '@/utils/firebase';

const createOrUpdateRecord = (
  path: string,
  data: any,
  id?: string | undefined
) => {
  // create or update a record and return the set of functions and values for firebase

  if (id) {
    update(ref(database, `${path}/${id}`), data);
    return id;
  }

  const newId = uuidv4();
  const newData = { ...data, id: newId };
  update(ref(database, `${path}/${newId}`), newData);
  return newId;
};

const getMyChats = async (chats: any, userId: string, users: any) => {
  if (!chats) return [];
  const mainChats = chats.filter((chat: any) =>
    chat.participants.includes(userId)
  );

  // in mainChats array, added the user data of the other participant
  const chatsWithUserData = mainChats.map((chat: any) => {
    const otherParticipant = chat.participants.find(
      (participant: string) => participant !== userId
    );
    const userData = users.find((user: any) => user.id === otherParticipant);
    return { ...chat, userData };
  });

  console.log(chatsWithUserData);

  return mainChats;
};

export { createOrUpdateRecord, getMyChats };
