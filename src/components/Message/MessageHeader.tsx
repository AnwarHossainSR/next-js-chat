'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoMdCall } from 'react-icons/io';
import { MdVideoCall } from 'react-icons/md';

const MessageHeader = () => {
  const router = useRouter();
  return (
    <div className=" w-full p-2 flex justify-between items-center fixed border-b border-zinc-500 z-10 bg-white dark:bg-background-slate dark:text-gray-300">
      <AiOutlineArrowLeft
        size={30}
        className="text-2xl text-brand-main"
        onClick={() => router.back()}
      />
      <Image
        src="/chat/chat-1.png"
        width={60}
        height={60}
        alt="chat-1"
        priority
        className="border-white rounded-full"
      />
      <h1 className="text-xl font-bold">Chat 1</h1>
      <IoMdCall
        size={30}
        className="text-2xl text-brand-main p-1 rounded-full"
      />
      <MdVideoCall
        size={30}
        className="text-2xl text-brand-main p-1 rounded-full "
      />
      <BsThreeDotsVertical
        size={30}
        className="text-2xl text-brand-main p-1 rounded-full "
      />
    </div>
  );
};

export default MessageHeader;
