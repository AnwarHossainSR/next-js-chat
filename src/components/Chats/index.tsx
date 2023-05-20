import { useState } from 'react';

import { useAuth } from '@/context/AuthContext';
import { useFirebaseRealtimeData } from '@/hooks/useFIrebaseData';

import FreshScreen from '../FreshScreen/FreshScreen';
import ChatItem from './ChatItem';
import NewChat from './NewChat';

const ChatScreen = () => {
  const { currentUser, loading } = useAuth();
  const [chatType, setChatType] = useState(0);
  const users = useFirebaseRealtimeData('users');
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

      {chatType === 1 && (
        <>
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
        </>
      )}

      {chatType === 2 && (
        <div>
          {users &&
            users.map(
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
