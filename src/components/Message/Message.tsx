import type { FC } from 'react';

import { getDate } from '@/utils/date';

interface MessageProps {
  message?: string;
  timestamp: number;
  name?: string;
  own?: boolean;
}

const Message: FC<MessageProps> = ({ message, timestamp, name, own }) => {
  return (
    <div
      className={`w-[320px] ${
        own
          ? 'float-right bg-[#DDFFEC] dark:bg-[#191C24]'
          : 'float-left bg-[#F0F4F9] dark:bg-gray-700'
      } rounded-2xl p-3 h-auto mb-4`}
    >
      <div className="text-brand-main">{name}</div>
      <div>{message}</div>
      <div className="float-right text-sm">{getDate(timestamp)}</div>
    </div>
  );
};

export default Message;
