import type { FC } from 'react';

import { getDate } from '@/utils/date';

interface MessageProps {
  message?: string;
  timestamp: number;
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
      <div className="float-right text-sm">{getDate(timestamp)}</div>
    </div>
  );
};

export default Message;
