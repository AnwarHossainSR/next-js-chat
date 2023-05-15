'use client';

import type { FC } from 'react';
import { BiDotsVerticalRounded, BiSearchAlt2 } from 'react-icons/bi';

import Tab from './Tab';

interface HeaderProps {
  isActive: string;
  setIsActive: any;
}

const Header: FC<HeaderProps> = ({ isActive, setIsActive }) => {
  return (
    <div className="flex flex-col p-4">
      <div className="flex justify-between gap-2">
        <div className="flex justify-between w-full">
          <h1 className="flex-1 font-extrabold text-lg">Chatify</h1>
          <BiSearchAlt2 className="flex-2" size={30} />
        </div>
        <BiDotsVerticalRounded size={30} />
      </div>
      <div className="mt-3 flex justify-around items-center">
        <Tab
          level="Chats"
          isActive={isActive === 'Chats'}
          setIsActive={setIsActive}
        />
        <Tab
          level="Groups"
          isActive={isActive === 'Groups'}
          setIsActive={setIsActive}
        />
        <Tab
          level="Status"
          isActive={isActive === 'Status'}
          setIsActive={setIsActive}
        />
        <Tab
          level="Calls"
          isActive={isActive === 'Calls'}
          setIsActive={setIsActive}
        />
      </div>
    </div>
  );
};

export default Header;
