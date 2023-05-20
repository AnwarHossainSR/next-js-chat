'use client';

import 'emoji-mart/css/emoji-mart.css';

import { Picker } from 'emoji-mart';
import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import { BsEmojiSmileFill, BsImage } from 'react-icons/bs';
import { IoSend } from 'react-icons/io5';

const WriteMessage: FC = () => {
  const emojiRef = useRef<HTMLDivElement>(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const [input, setInput] = useState('');

  const addEmoji = (e: any) => {
    const sym = e.unified.split('-');
    const codesArray: any = [];
    sym.forEach((el: any) => codesArray.push(`0x${el}`));
    const emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  const handleClickOutside = (e: any) => {
    if (emojiRef.current && !emojiRef.current.contains(e.target)) {
      setShowEmojis(false);
    }
  };

  useEffect(() => {
    // close the emoji picker when clicked outside
    document.addEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="mx-5 rounded-full border p-2 px-3 flex justify-around gap-2 items-center">
      <div ref={emojiRef}>
        {showEmojis && (
          <Picker
            onSelect={addEmoji}
            theme="dark"
            style={{
              position: 'absolute',
              top: '-13rem',
              left: '48%',
              transform: 'translate(-50%, -50%)',
            }}
            // onClickOutside={() => setShowEmojis(false)}
          />
        )}
        <BsEmojiSmileFill
          color="#94a3b8"
          size={20}
          onClick={() => setShowEmojis(!showEmojis)}
        />
      </div>

      <input
        type="text"
        className="outline-none border-none w-full bg-transparent"
        placeholder="Type a message"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <div>
        <label htmlFor="file-upload">
          <BsImage color="#94a3b8" size={20} />
        </label>
        <input type="file" id="file-upload" className="hidden" />
      </div>
      <IoSend color="94a3b8" className="ml-2 cursor-pointer" size={20} />
    </div>
  );
};

export default WriteMessage;
