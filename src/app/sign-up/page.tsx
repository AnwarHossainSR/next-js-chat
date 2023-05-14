/* eslint-disable simple-import-sort/imports */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { FieldValues, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import Button from '@/components/EmptyState/Button';
import Input from '@/components/inputs/Input';

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    setIsLoading(true);
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <section className="p-8 flex flex-col h-full justify-end items-center">
      <Image src="/logo.png" alt="Hero" width={100} height={100} />
      <h2 className="text-1xl font-semibold text-center mt-7">
        Sign-up for free
      </h2>
      <div
        className="
        mt-7
        w-[300px]
      "
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className="
            flex
            flex-col
            justify-start
            items-start
            mt-7
            gap-5
            w-[300px]
          "
          >
            <Input
              id="name"
              placeholder="name"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
            <Input
              id="email"
              placeholder="email address"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
            <Input
              id="password"
              placeholder="password"
              type="password"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
          </div>

          <div className="mt-8">
            <Button label="SIgn Up" type="submit" />
          </div>
        </form>
      </div>

      <div className="mt-8">
        Don't have an account?
        <Link href="/sign-in" className="text-blue-500">
          {' '}
          Sign in
        </Link>
      </div>
    </section>
  );
}
