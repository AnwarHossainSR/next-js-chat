'use client';

import { useState } from 'react';

import CallsScreen from '@/components/Calls/Calls';
import ChatScreen from '@/components/Chats';
import Header from '@/components/Chats/Header';
import GroupsScreen from '@/components/Groups/Groups';
import StatusScreen from '@/components/Status/Status';

const Chats = () => {
  const [isActive, setIsActive] = useState('Chats');
  return (
    <div>
      <Header isActive={isActive} setIsActive={setIsActive} />
      <div className="mt-5 p-2">
        {isActive === 'Chats' && <ChatScreen />}
        {isActive === 'Groups' && <GroupsScreen />}
        {isActive === 'Status' && <StatusScreen />}
        {isActive === 'Calls' && <CallsScreen />}
      </div>
    </div>
  );
};

export default Chats;
