import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import tradexLogo from "@/assets/clients/tradex.png";
import masterLogo from "@/assets/clients/master.png";
import mindbaseLogo from "@/assets/clients/mindbase.png";
import bennyLogo from "@/assets/clients/benny.jpg";
import elevenlabsLogo from "@/assets/clients/elevenlabs.png";
import ycMark from "@/assets/yc-mark.svg";
import trivonMark from "@/assets/trivon-mark.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { label: "What we do", href: "#what" },
  { label: "Process", href: "#process" },
  { label: "Network", href: "#network" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

const CLIENTS: { name: string; src: string; ycBacked?: boolean; bg?: string }[] = [
  { name: "TradeX Markets", src: tradexLogo, ycBacked: true, bg: "bg-white" },
  { name: "Master", src: masterLogo, bg: "bg-[#1bf2a4]" },
  { name: "Mindbase", src: mindbaseLogo, ycBacked: true, bg: "bg-black" },
  { name: "Benny", src: bennyLogo, bg: "bg-[#1ea7ff]" },
  { name: "ElevenLabs", src: elevenlabsLogo, bg: "bg-white" },
];

const STEPS = [
  { n: "01", t: "Identify", d: "Map the right creators whose audience overlaps with your ideal user." },
  { n: "02", t: "Narrate", d: "Craft a product narrative built for credibility, not noise." },
  { n: "03", t: "Execute", d: "Run tightly produced campaigns across India's top tech voices." },
  { n: "04", t: "Adopt", d: "Optimize for activation, retention and real product usage." },
];

const WHY = [
  { t: "Creator-first", d: "Every campaign is engineered around creator authority, not media buys." },
  { t: "Deep tech focus", d: "We only work with tech products. We speak the language of builders." },
  { t: "Outcome-driven", d: "Measured by adoption and activation — not impressions or reach." },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5 text-sm font-semibold tracking-tight">
          <img src={trivonMark} alt="Trivon Ventures" className="h-6 w-6 rounded-sm object-cover" />
          Trivon<span className="text-muted-foreground font-normal">Ventures</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:scale-[1.02]"
        >
          Work with us
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-32 lg:pt-56 lg:pb-44">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 grain"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_at_top,oklch(0.96_0_0),transparent_60%)]"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground" />
          </span>
          Creator-led user adoption
        </div>
        <h1 className="reveal reveal-delay-1 max-w-5xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
          Driving user adoption for the world's most ambitious tech products.
        </h1>
        <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          We partner with India's top tech voices to turn product launches into real, measurable
          adoption — not impressions.
        </p>
        <div className="reveal reveal-delay-3 mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
          >
            Work with us
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#what"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            How it works
          </a>
        </div>

        <div className="reveal reveal-delay-4 mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
          {[
            ["50M+", "Verified reach"],
            ["120+", "Tech creators"],
            ["6×", "Median adoption lift"],
            ["100%", "Tech-only focus"],
          ].map(([k, v]) => (
            <div key={v} className="bg-background p-6">
              <div className="text-2xl font-semibold tracking-tight sm:text-3xl">{k}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
      <span className="h-px w-8 bg-border" />
      {children}
    </div>
  );
}

function WhatWeDo() {
  return (
    <section id="what" className="border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>What we do</SectionLabel>
        <div className="grid gap-16 lg:grid-cols-12">
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:col-span-7 lg:text-6xl">
            We help tech companies grow through creators the market already trusts.
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground lg:col-span-5">
            <p>
              Trivon is built for tech products that need credibility — not coverage. We work with a
              tight network of India's most authoritative tech creators to introduce your product to
              the people who decide what gets used.
            </p>
            <p className="text-foreground">
              Trust. Authority. Conversion. In that order.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="border-t border-border bg-secondary/40 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>How we work</SectionLabel>
        <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
          A four-step system, engineered for adoption.
        </h2>
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="group relative flex flex-col gap-6 bg-background p-8 transition-colors hover:bg-secondary"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-foreground transition-transform group-hover:scale-150" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">{s.t}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Network() {
  return (
    <section id="network" className="border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>Network</SectionLabel>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              India's leading tech voices, working in concert.
            </h2>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              A curated network of founders, engineers, analysts and operators whose audiences
              actually build, buy and ship technology.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border p-8">
              <div className="flex items-baseline justify-between border-b border-border pb-4">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Authority</span>
                <span className="font-mono text-sm">98%</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-border py-4">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Vanity metrics</span>
                <span className="font-mono text-sm text-muted-foreground line-through">—</span>
              </div>
              <div className="flex items-baseline justify-between pt-4">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Signal</span>
                <span className="font-mono text-sm">High</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const row = [...CLIENTS, ...CLIENTS, ...CLIENTS];
  return (
    <section id="clients" className="border-t border-border bg-secondary/40 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>Trusted by</SectionLabel>
        <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
          Selected partners.
        </h2>
      </div>
      <div className="relative mt-16 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-secondary/80 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-secondary/80 to-transparent"
        />
        <div className="marquee flex w-max items-start gap-12 whitespace-nowrap px-6 sm:gap-16">
          {row.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="flex shrink-0 flex-col items-center gap-3"
            >
              <div
                className={`flex h-28 w-44 items-center justify-center overflow-hidden rounded-2xl border border-border ${c.bg ?? "bg-background"} sm:h-32 sm:w-52`}
              >
                <img
                  src={c.src}
                  alt={c.name}
                  loading="lazy"
                  className="max-h-[70%] max-w-[80%] object-contain"
                />
              </div>
              <div className="flex h-5 items-center gap-1.5">
                {c.ycBacked && (
                  <>
                    <img src={ycMark} alt="" className="h-4 w-4" />
                    <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      Backed by Y Combinator
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>Why Trivon</SectionLabel>
        <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
          Built differently. On purpose.
        </h2>
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {WHY.map((w, i) => (
            <div key={w.t} className="border-t border-foreground pt-6">
              <div className="font-mono text-xs text-muted-foreground">0{i + 1}</div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">{w.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-44">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-background/60">
          <span className="h-px w-8 bg-background/30" />
          Contact
        </div>
        <h2 className="mt-6 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          Start a conversation<span className="blink">_</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg text-background/60">
          Tell us what you're building. We'll tell you how creators can move the needle on adoption.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <a
            href="mailto:vedanshu@trivonventures.com"
            className="group inline-flex items-center gap-3 rounded-full bg-background px-6 py-4 text-sm font-medium text-foreground transition-transform hover:scale-[1.02]"
          >
            vedanshu@trivonventures.com
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-8 text-xs text-background/50 sm:flex-row sm:items-center lg:px-10">
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-background/60" />
            Trivon Ventures © {new Date().getFullYear()}
          </div>
          <div>Creator-led user adoption</div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Clients />
      <WhatWeDo />
      <Process />
      <Network />
      <Why />
      <Contact />
    </main>
  );
}
