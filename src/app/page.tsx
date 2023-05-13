'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Button from '@/components/EmptyState/Button';

export default function Home() {
  const router = useRouter();
  return (
    <section className="p-8 flex flex-col h-full justify-end items-center">
      <Image src="/logo.png" alt="Hero" width={210} height={210} priority />
      <h1 className="text-2xl font-bold text-center mt-20">
        Welcome to Chatify
      </h1>
      <p className="text-center mt-4">
        Chatify is a chat app built with Next.js, Tailwind CSS, and Firebase.
      </p>
      <div className="mt-8">
        <Button label="Get Started" onClick={() => router.push('sign-in')} />
      </div>
    </section>
  );
}
