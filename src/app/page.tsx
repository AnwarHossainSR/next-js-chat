import Image from 'next/image';

import Button from '@/components/EmptyState/Button';
import MainLayout from '@/layouts/MainLayout/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <section className="p-8 flex flex-col h-full justify-end items-center">
        <Image src="/logo.png" alt="Hero" width={210} height={210} />
        <h1 className="text-4xl font-bold text-center mt-20">
          Welcome to Chatify
        </h1>
        <p className="text-center mt-4">
          Chatify is a chat app built with Next.js, Tailwind CSS, and Firebase.
        </p>
        <div className="mt-8">
          <Button label="Get Started" />
        </div>
      </section>
    </MainLayout>
  );
}
