import { useEffect, useState } from 'react';

import { useAuth } from '@/context/AuthContext';
import { useFirebaseRealtimeData } from '@/hooks/useFIrebaseData';
import { getMyChats } from '@/utils/operations';

import FreshScreen from '../FreshScreen/FreshScreen';
import ChatItem from './ChatItem';
import NewChat from './NewChat';

const ChatScreen = () => {
  const { currentUser, loading } = useAuth();
  const [chatType, setChatType] = useState(0);
  const users = useFirebaseRealtimeData('users');
  const chatsRes = useFirebaseRealtimeData('chats');
  const [chats, setChats] = useState([]);

  const handleDataCalling = async () => {
    const myChats = await getMyChats(
      chatsRes,
      currentUser?.id ?? currentUser.uid,
      users
    );

    setChats(myChats);
    if (myChats.length > 0) setChatType(1);
  };

  useEffect(() => {
    handleDataCalling();
  }, [currentUser, chats]);

  return (
    <div className="p-1 overflow-x-auto">
      {chatType === 0 && (
        <FreshScreen
          title="chat"
          label="Start Chatting"
          onClick={() => {
            setChatType(2);
          }}
        />
      )}

      {chatType === 1 &&
        chats.length > 0 &&
        chats.map((chat: any) => <ChatItem key={chat.id} chat={chat} />)}

      {chatType === 2 && (
        <div>
          {users &&
            users?.length > 0 &&
            users?.map(
              (user: any) =>
                user.id !== currentUser?.id && (
                  <NewChat
                    key={user.id}
                    user={user}
                    loading={loading}
                    currentUserId={currentUser?.id}
                  />
                )
            )}
        </div>
      )}
    </div>
  );
};

export default ChatScreen;
