import FreshScreen from '../FreshScreen/FreshScreen';
import ChatItem from './ChatItem';

const ChatScreen = () => {
  const chat = true;
  return (
    <div className="p-1">
      {chat ? (
        <ChatItem />
      ) : (
        <FreshScreen title="chat" label="Start Chatting" />
      )}
    </div>
  );
};

export default ChatScreen;
