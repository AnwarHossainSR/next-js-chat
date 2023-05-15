/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRouter } from 'next/navigation';
import type { FC } from 'react';

import { useAuth } from '@/context/AuthContext';

const Dropdown: FC = () => {
  const { logout } = useAuth();
  const router = useRouter();
  return (
    <div className="relative">
      <div className="absolute right-0 mt-10 w-48 bg-white rounded-lg z-10 shadow-2xl transition-opacity duration-300">
        <ul className="py-2">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            My Profile
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              logout();
              router.push('/');
            }}
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
