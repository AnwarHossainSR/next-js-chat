'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from '@/components/EmptyState/Button';

export default function SignUp() {
  const router = useRouter();
  return (
    <section className="p-8 flex flex-col h-full justify-end items-center">
      <Image src="/logo.png" alt="Hero" width={210} height={210} />
      <h2 className="text-1xl font-semibold text-center mt-20">
        Sign Up fo free
      </h2>
      <div
        className="
        flex
        flex-col
        justify-start
        items-start
        mt-17
      "
      >
        <input
          type="text"
          placeholder="Enter your phone number"
          className="border-1 border-[#FFEEEE] p-2 mt-4 w-[300px] bg-[#F0F0F0] rounded-3xl px-4   "
        />
      </div>
      <div className="mt-8">
        <Button
          label="Sign Up"
          onClick={() => router.push('verification')}
          width={300}
        />
      </div>

      <div className="mt-8">
        Already have an account?
        <Link href="/sign-in" className="text-blue-500">
          {' '}
          Sign In
        </Link>
      </div>
    </section>
  );
}
