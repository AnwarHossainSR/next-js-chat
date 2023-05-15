import Image from 'next/image';
import type { FC } from 'react';

import Button from '../EmptyState/Button';

interface FreshScreenProps {
  title: string;
  label: string;
  onClick?: () => void;
}

const FreshScreen: FC<FreshScreenProps> = ({ title, onClick, label }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <Image
        src="/logo-2.png"
        width={120}
        height={120}
        alt="logo"
        className="opacity-50"
      />

      <div className="mt-7">
        <h1 className=" font-bold text-brand-main">You haven't {title} yet!</h1>
      </div>

      <div className="mt-7">
        <Button label={label} onClick={onClick} />
      </div>
    </div>
  );
};

export default FreshScreen;
