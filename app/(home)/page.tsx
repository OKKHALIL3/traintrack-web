'use client';

import { npmUrl, projectUrl } from '@/lib/shared';
import { assetPath } from '@/lib/site';
import Image from 'next/image';
import Link from 'next/link';
import { useState, type ReactNode } from 'react';

function CopyCommand({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="inline-flex items-center gap-3 mt-7 max-w-full bg-fd-secondary border border-fd-border rounded-[10px] px-4 py-3 font-[family-name:var(--font-jetbrains)] text-[14.5px] text-fd-foreground">
      <span className="text-brand">$</span>
      <span className="break-all">{text}</span>
      <button
        type="button"
        className="ml-1.5 border border-fd-border bg-fd-background text-fd-muted-foreground rounded-md px-2 py-1 text-xs cursor-pointer hover:text-fd-foreground hover:border-brand"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(text);
          } catch {
            /* ignore */
          }
          setCopied(true);
          setTimeout(() => setCopied(false), 1300);
        }}
      >
        {copied ? 'copied' : 'copy'}
      </button>
    </div>
  );
}

function CodeBlock({ children }: { children: ReactNode }) {
  return (
    <pre className="mt-4 bg-fd-secondary border border-fd-border rounded-lg p-4 font-[family-name:var(--font-jetbrains)] text-[13px] leading-relaxed overflow-x-auto text-fd-foreground">
      {children}
    </pre>
  );
}

export default function HomePage() {
  return (
    <div className="w-full max-w-[980px] mx-auto px-6 text-fd-foreground">
      <section className="pt-[92px] pb-4">
        <Image
          src={assetPath('/assets/wordmark.svg')}
          alt="traintrack"
          width={420}
          height={80}
          className="w-[min(420px,76%)] h-auto"
          priority
        />
        <h1 className="text-[clamp(30px,4.4vw,44px)] leading-[1.12] tracking-[-0.03em] font-bold mt-[30px] max-w-[16ch]">
          Your coding agents, working as a team.
        </h1>
        <p className="text-[19px] text-fd-muted-foreground mt-4 max-w-[56ch]">
          Run{' '}
          <code className="font-[family-name:var(--font-jetbrains)] text-fd-foreground">claude</code>,{' '}
          <code className="font-[family-name:var(--font-jetbrains)] text-fd-foreground">codex</code>, or any of 10 agent CLIs
          like you always do. They share a team — see each other and talk — or one spawns workers to do the job.
        </p>

        <CopyCommand text="npm install -g traintrack" />

        <div className="flex flex-wrap gap-3 mt-6">
          <Link
            href="/docs"
            className="inline-flex items-center gap-1.5 text-[14.5px] font-medium rounded-[9px] px-[17px] py-[11px] bg-brand text-white hover:bg-brand-ink no-underline hover:no-underline"
          >
            Read the docs →
          </Link>
          <a
            href={projectUrl}
            className="inline-flex items-center gap-1.5 text-[14.5px] font-medium rounded-[9px] px-[17px] py-[11px] border border-fd-border text-fd-foreground bg-fd-background no-underline hover:no-underline hover:border-fd-muted-foreground"
          >
            GitHub
          </a>
        </div>

        <div className="mt-11">
          <p className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.12em] text-fd-muted-foreground mb-3">
            Works with 10 agent CLIs
          </p>
          <div className="flex flex-wrap gap-2">
            {([
              ['Claude Code', true], ['Codex', true], ['Cursor', false], ['OpenCode', false], ['Windsurf', false],
              ['Cline', false], ['Kiro', false], ['Zed', false], ['Continue', false], ['GitHub Copilot', false],
            ] as [string, boolean][]).map(([name, beta]) => (
              <span
                key={name}
                className={`text-[13px] rounded-full px-3 py-1 border ${beta ? 'border-brand/40 bg-brand/[0.06] text-fd-foreground' : 'border-fd-border bg-fd-secondary text-fd-muted-foreground'}`}
              >
                {name}
                {beta ? ' · beta' : ''}
              </span>
            ))}
          </div>
          <p className="text-[12.5px] text-fd-muted-foreground mt-3">
            Claude Code &amp; Codex are beta; the other eight are alpha.
          </p>
        </div>
      </section>

      <section className="py-14 border-t border-fd-border">
        <p className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.12em] text-fd-muted-foreground mb-3.5">
          What it is
        </p>
        <h2 className="text-[26px] tracking-[-0.02em] font-semibold mb-3">A shared channel for your agents.</h2>
        <p className="text-fd-muted-foreground max-w-[64ch] mb-4">
          traintrack is an MCP server and CLI. Install it once, run{' '}
          <code className="font-[family-name:var(--font-jetbrains)] text-fd-foreground">traintrack setup</code>, and every agent
          session in a project — <code className="font-[family-name:var(--font-jetbrains)] text-fd-foreground">claude</code>,{' '}
          <code className="font-[family-name:var(--font-jetbrains)] text-fd-foreground">codex</code>, and 8 more — joins the
          same team over a local SQLite file — no daemon, no wrapper command, no cloud.
        </p>

        <div className="grid md:grid-cols-2 gap-7 mt-7">
          <div>
            <div className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.1em] text-brand mb-2">
              Peer mesh
            </div>
            <h3 className="text-[17px] font-semibold mb-1.5">They see each other</h3>
            <p className="text-fd-muted-foreground text-[15px]">
              Open several sessions in a project. Each auto-joins the team; you can message any of them by handle,
              and they pick it up on their next turn.
            </p>
            <CodeBlock>
              <span className="text-brand">$</span> traintrack team{'\n'}
              <span className="text-fd-muted-foreground">Team channel: ~/app/.traintrack/channel.db</span>{'\n'}
              {'  '}- claude-3f9a  <span className="text-fd-muted-foreground">(claude · active)</span>{'\n'}
              {'  '}- codex-7c12   <span className="text-fd-muted-foreground">(codex · active)</span>
            </CodeBlock>
          </div>
          <div>
            <div className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.1em] text-brand mb-2">
              Lead orchestration
            </div>
            <h3 className="text-[17px] font-semibold mb-1.5">One spawns the rest</h3>
            <p className="text-fd-muted-foreground text-[15px]">
              Tell a session to build several things. It spawns headless workers in isolated git worktrees, collects
              their results, and synthesizes.
            </p>
            <CodeBlock>
              <span className="text-brand">›</span> build a parser, its tests, and a README{'\n'}
              <span className="text-fd-muted-foreground">spawning 3 workers…</span>{'\n'}
              <span className="text-fd-muted-foreground">collected 3 results · synthesizing</span>
            </CodeBlock>
          </div>
        </div>
      </section>

      <section className="py-14 border-t border-fd-border">
        <p className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.12em] text-fd-muted-foreground mb-3.5">
          Get started
        </p>
        <h2 className="text-[26px] tracking-[-0.02em] font-semibold mb-3">Two commands.</h2>
        <p className="text-fd-muted-foreground max-w-[64ch] mb-4">
          Install, run setup, and pick the CLIs you already use.{' '}
          <Link href="/docs/installation" className="text-brand hover:underline">
            Full installation guide →
          </Link>
        </p>
        <CopyCommand text="npm install -g traintrack" />
        <div className="mt-3">
          <CopyCommand text="traintrack setup" />
        </div>
      </section>

      <footer className="py-10 border-t border-fd-border text-sm text-fd-muted-foreground flex flex-wrap gap-4 justify-between">
        <span>Apache-2.0 · © 2026 traintrack · alpha</span>
        <span className="flex gap-5">
          <Link href="/docs" className="text-fd-muted-foreground hover:text-fd-foreground no-underline">
            Docs
          </Link>
          <a href={projectUrl} className="text-fd-muted-foreground hover:text-fd-foreground no-underline">
            GitHub
          </a>
          <a href={npmUrl} className="text-fd-muted-foreground hover:text-fd-foreground no-underline">
            npm
          </a>
        </span>
      </footer>
    </div>
  );
}
