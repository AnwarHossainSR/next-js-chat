'use client';

import type { IconType } from 'react-icons';

interface ButtonProps {
  label: string;
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  isLoading?: boolean;
  width?: number;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  small,
  icon: Icon,
  isLoading,
  width,
}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        bg-brand-main
        text-white
        px-8
        ${width ? `w-${width}` : 'w-full'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'font-light' : 'font-semibold'}
      `}
    >
      {Icon && (
        <Icon
          size={24}
          className="
            absolute
            left-4
            top-3
          "
        />
      )}
      {isLoading ? 'Lading..' : label}
    </button>
  );
};

export default Button;
