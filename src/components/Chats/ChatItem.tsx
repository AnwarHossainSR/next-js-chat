'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { getDate } from '@/utils/date';

const ChatItem = () => {
  const router = useRouter();
  return (
    <div
      className="w-full height-[85px] dark:text-gray-300"
      onClick={() => router.push('chats/chatId')}
      role="button"
      tabIndex={0}
    >
      <div className="flex items-center gap-1 font-roboto">
        <div>
          <Image
            src="/chat/chat-1.png"
            width={85}
            height={85}
            alt="chat-1"
            priority
          />
        </div>
        <div className="flex items-center justify-between flex-1">
          <div>
            <div className="font-bold">Mahedi Hasan</div>
            <div className="text-sm	font-light">Hello , my name is ma...</div>
          </div>
          <div className="ml-auto text-base font-light">
            {getDate(1684556154837)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
