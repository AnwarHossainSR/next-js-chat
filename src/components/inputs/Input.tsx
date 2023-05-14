'use client';

import type {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';

interface InputProps {
  id: string;
  placeholder: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  placeholder,
  type = 'text',
  disabled,
  register,
  required,
  errors,
}) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        disabled={disabled}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register(id, { required })}
        placeholder={placeholder}
        type={type}
        className={`
          peer
          w-full
          p-4
          font-light 
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          outline-none
          ${errors[id] ? 'border-rose-500 border-2' : 'border-neutral-300'}
          ${errors[id] ? 'focus:border-rose-500' : 'focus:border-[#F0F0F0]'}
          text-neutral-800
          bg-[#F0F0F0] 
          rounded-3xl
        `}
      />
    </div>
  );
};

export default Input;
