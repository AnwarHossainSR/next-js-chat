import '@/styles/globals.css';

import { Poppins, Roboto } from 'next/font/google';
import { Suspense } from 'react';

import Loading from '@/app/loading';
import { ClientOnly } from '@/components/ClientOnly/ClientOnly';
import { AuthProvider } from '@/context';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import ToasterProvider from '@/providers/ToasterProvider';
import type { ChildrenProps } from '@/types';

export const metadata = {
  title: 'Chatify - A Chat App',
  keywords: 'chat, chat app, chatify, chatify app',
  description:
    'Chatify is a chat app built with Next.js, Tailwind CSS, and Firebase.',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export default async function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${roboto.className} h-full flex flex-col justify-between dark:bg-background-slate dark:text-gray-300`}
        suppressHydrationWarning
      >
        <ClientOnly>
          <ToasterProvider />
        </ClientOnly>
        <Suspense fallback={<Loading />}>
          <MainLayout>
            <AuthProvider>
              <section className="flex-1">{children}</section>
            </AuthProvider>
          </MainLayout>
        </Suspense>
      </body>
    </html>
  );
}
