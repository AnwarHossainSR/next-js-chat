import Image from 'next/image';
import { BsEmojiSmileFill } from 'react-icons/bs';

const WriteMessage = () => {
  return (
    <div className="mx-5 rounded-full border p-2 px-3 flex justify-around gap-2 items-center">
      <BsEmojiSmileFill color="#94a3b8" />
      <input
        type="text"
        className="outline-none border-none w-full bg-transparent"
        placeholder="Type a message"
      />
      <Image src="/upload.png" width={16} height={27} alt="upload" />
    </div>
  );
};

export default WriteMessage;
