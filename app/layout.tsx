import { Inter, JetBrains_Mono } from 'next/font/google';
import { Provider } from '@/components/provider';
import { siteUrl, assetPath } from '@/lib/site';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen font-[family-name:var(--font-inter)]">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'traintrack — your coding agents, working as a team',
  description:
    'A local-first coordination layer for AI coding agents. Run claude and codex like you always do — they share a team and can spawn workers.',
  icons: {
    icon: assetPath('/assets/favicon.svg'),
  },
};
