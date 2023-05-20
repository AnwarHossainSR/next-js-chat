'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type { FC } from 'react';
import { toast } from 'react-hot-toast';

import { createOrUpdateRecord } from '@/utils/operations';

interface NewChatProps {
  user: {
    id: string;
    name: string;
    email: string;
    isOnline: boolean;
    photoURL?: string;
  };
  loading: boolean;
  currentUserId: string;
}

const NewChat: FC<NewChatProps> = ({ user, loading, currentUserId }) => {
  const router = useRouter();
  const circleClass = user?.isOnline ? 'bg-green-500' : 'bg-gray-500';

  if (loading) return <div>Loading...</div>;

  const handleNavigate = async () => {
    const res = await createOrUpdateRecord('chats', {
      participants: [user?.id, currentUserId],
      timestamp: Date.now(),
    });
    if (res) {
      router.push(`/chats/${res}`);
    } else {
      toast.error('Something went wrong!');
    }
  };

  return (
    <div
      className="w-full height-[85px] dark:text-gray-300"
      onClick={handleNavigate}
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
            className="rounded-full bg-transparent"
          />
        </div>
        <div className="flex items-center justify-between flex-1">
          <div className="font-bold">{user?.name}</div>
          <div className="flex items-center justify-center mr-4">
            <div className={`w-2 h-2 rounded-full ${circleClass}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewChat;
