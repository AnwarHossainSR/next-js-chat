import type { FC } from 'react';

interface MessageProps {
  message?: string;
  timestamp?: string;
  name?: string;
  bg?: string;
  own?: boolean;
}

const Message: FC<MessageProps> = ({ message, timestamp, name, bg, own }) => {
  return (
    <div
      className={`w-[320px] ${bg} ${
        own ? 'float-right' : 'float-left'
      } rounded-2xl p-3 h-auto mb-4`}
    >
      <div className="text-brand-main">{name}</div>
      <div>{message}</div>
      <div className="float-right text-sm">{timestamp}</div>
    </div>
  );
};

export default Message;