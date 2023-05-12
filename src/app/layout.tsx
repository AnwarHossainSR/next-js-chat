import '@/styles/globals.css';

import { Poppins } from 'next/font/google';

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

export default async function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} h-full flex flex-col justify-between`}
      >
        <section className="flex-1">{children}</section>
      </body>
    </html>
  );
}
