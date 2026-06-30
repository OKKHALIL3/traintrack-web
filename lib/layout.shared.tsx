import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Link from 'next/link';
import { appName, projectUrl } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <Link href="/" className="inline-flex items-center gap-2 font-semibold text-[15px] tracking-tight">
          {appName}
          <span className="font-mono text-[10.5px] uppercase tracking-widest text-fd-muted-foreground border border-fd-border rounded-full px-1.5 py-0.5">
            alpha
          </span>
        </Link>
      ),
    },
    links: [
      {
        text: 'Docs',
        url: '/docs',
      },
      {
        text: 'GitHub',
        url: projectUrl,
        external: true,
      },
    ],
    githubUrl: projectUrl,
  };
}
