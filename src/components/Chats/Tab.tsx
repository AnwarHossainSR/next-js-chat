/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { FC } from 'react';

interface TabProps {
  level: string;
  isActive?: boolean;
  setIsActive?: any;
}

const Tab: FC<TabProps> = ({ level, isActive, setIsActive }) => {
  return (
    <h1
      className={`font-bold ${
        isActive && 'text-brand-main underline underline-offset-8'
      }`}
      onClick={() => setIsActive && setIsActive(level)}
    >
      {level}
    </h1>
  );
};

export default Tab;
