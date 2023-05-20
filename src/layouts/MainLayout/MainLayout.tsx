import { ThemeProvider } from '@/components/Theme/ThemeProvider';
import type { ChildrenProps } from '@/types';

export default function MainLayout({ children }: ChildrenProps) {
  return (
    <div className="h-full flex flex-col w-430">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </div>
  );
}
