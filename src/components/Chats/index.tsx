import FreshScreen from '../FreshScreen/FreshScreen';
import ChatItem from './ChatItem';

const ChatScreen = () => {
  const chat = true;
  return (
    <div className="p-1 overflow-x-auto">
      {chat ? (
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
      ) : (
        <FreshScreen title="chat" label="Start Chatting" />
      )}
    </div>
  );
};

export default ChatScreen;
