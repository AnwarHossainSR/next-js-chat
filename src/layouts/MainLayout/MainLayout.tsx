import type { ChildrenProps } from '@/types';

export default function MainLayout({ children }: ChildrenProps) {
  return <div className="h-full flex flex-col w-430">{children}</div>;
}
