import { useState } from 'react';

import FreshScreen from '../FreshScreen/FreshScreen';
import ChatItem from './ChatItem';
import NewChat from './NewChat';

const ChatScreen = () => {
  const [chatType, setChatType] = useState(0);

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

      {chatType === 2 && <NewChat />}
    </div>
  );
};

export default ChatScreen;
