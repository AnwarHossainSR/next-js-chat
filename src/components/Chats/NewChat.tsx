'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/context/AuthContext';

const NewChat = () => {
  const { currentUser, loading } = useAuth();
  const router = useRouter();
  const circleClass = currentUser?.isOnline ? 'bg-green-500' : 'bg-gray-500';

  if (loading) return <div>Loading...</div>;

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
          <div className="font-bold">Mahedi Hasan</div>
          <div className="flex items-center justify-center mr-4">
            <div className={`w-2 h-2 rounded-full ${circleClass}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewChat;
