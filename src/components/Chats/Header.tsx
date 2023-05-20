'use client';

import type { FC } from 'react';
import { useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';

import Dropdown from '../Dropdown';
import { ModeToggle } from '../Theme/ThemToggler';
import Tab from './Tab';

interface HeaderProps {
  isActive: string;
  setIsActive: any;
}

const Header: FC<HeaderProps> = ({ isActive, setIsActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col p-4 fixed w-full bg-background-primary dark:bg-background-slate dark:text-gray-300 ">
      <div className="flex justify-between gap-2">
        <div className="flex justify-between w-full">
          <h1 className="flex-1 font-extrabold text-lg">Chatify</h1>
        </div>
        <ModeToggle />
        <BiDotsVerticalRounded size={30} onClick={() => setIsOpen(!isOpen)} />
        {isOpen && <Dropdown />}
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
