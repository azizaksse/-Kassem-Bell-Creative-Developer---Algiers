import Image from "next/image";
import Link from "next/link";
import { LavaLamp } from "@/components/ui/fluid-blob";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const metrics = [
  { label: "Projects shipped", value: "24" },
  { label: "Years crafting UI", value: "4+" },
  { label: "Avg. performance score", value: "98" },
];

const services = [
  {
    title: "Experience Design",
    description:
      "Design systems and narrative-led flows that feel cinematic, inclusive, and unmistakably on brand.",
    tags: ["UX Strategy", "Design Systems", "Accessibility"],
  },
  {
    title: "Motion & Interactions",
    description:
      "Micro-interactions and product storytelling choreographed with intention to guide and delight.",
    tags: ["Framer Motion", "Microcopy", "Prototyping"],
  },
  {
    title: "Frontend Engineering",
    description:
      "Next.js builds engineered for performance, maintainability, and effortless handoff to teams.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
];

const projects = [
  {
    title: "Bonnaball Restaurant",
    description:
      "Immersive restaurant platform pairing liquid surfaces, adaptive menus, and cinematic storytelling.",
    deliverables: ["Experience Strategy", "Motion System", "CMS Integrations"],
    link: "https://bonnaball.vercel.app/",
  },
  {
    title: "Tarek Visuals Portfolio",
    description:
      "Photography portfolio with light + dark themes, fluid galleries, and scroll-bound narratives.",
    deliverables: ["Brand Site", "Theming Architecture", "Content Modeling"],
    link: "https://tarek-visuals-portfolio.vercel.app/",
  },
  {
    title: "Dr. Kamal Sbiti Dental Clinic",
    description:
      "Care-forward clinic experience focused on transparency, service clarity, and seamless booking.",
    deliverables: ["Service UX", "Design System", "API Integration"],
    link: "https://dr-kamal-sbiti-dental-clinic.vercel.app/",
  },
  {
    title: "L’Atelier Car Care",
    description:
      "Premium detailing brand with 3D-inspired reflections, modular sections, and heartbeat animations.",
    deliverables: ["Brand Refresh", "Performance Tuning", "CMS Handoff"],
    link: "https://l-atelier-car-care-a8am.vercel.app/",
  },
];

const socials = [
  { label: "Email", href: "mailto:webcrafters.agenc@gmail.com" },
  { label: "Instagram", href: "https://www.instagram.com/webcrafters.agenc/" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "https://github.com/azizaksse" },
  { label: "Telegram", href: "https://t.me/belkacem23" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#040810] text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-20">
        <LavaLamp />
        <div className="absolute inset-0 bg-[#040810]/75" />
      </div>
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-20 top-0 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.55),rgba(56,189,248,0)_65%)] blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-[-180px] h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle_at_40%_70%,rgba(168,85,247,0.5),rgba(6,182,212,0)_65%)] blur-3xl opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(65%_65%_at_50%_35%,rgba(15,23,42,0.25),rgba(4,8,16,0.92))]" />
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(#8b5cf6_1px,transparent_0)] [background-size:18px_18px]" />
      </div>

      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 pb-20 pt-10 sm:px-10 lg:px-12">
        <header className="glass sticky top-4 z-20 flex flex-wrap items-center justify-between gap-4 rounded-3xl p-5">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-[0_12px_45px_-20px_rgba(56,189,248,0.6)]">
              <Image
                src="/logo.jpg"
                alt="Kassem Bell logo"
                width={44}
                height={44}
                className="h-full w-full object-cover"
                priority
                quality={90}
                unoptimized={false}
              />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-300">
                Kassem Bell
              </p>
              <p className="text-xs text-slate-400">
                Creative Developer - Algiers
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.26em] text-slate-400">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full border border-transparent px-4 py-2 transition hover:border-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="https://wa.me/213676610457"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white transition hover:border-sky-400/40 hover:text-sky-200"
          >
            Let&apos;s talk
          </Link>
        </header>

        <main className="flex flex-col gap-24">
          <section
            id="hero"
            className="glass relative grid gap-12 overflow-hidden rounded-[40px] border border-white/10 bg-white/5 px-10 py-14 backdrop-blur-xl md:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="pointer-events-none absolute inset-0 -z-10">
              <LavaLamp />
              <div className="absolute inset-0 bg-gradient-to-br from-[#040810]/80 via-transparent to-[#040810]/60" />
            </div>
            <div className="flex flex-col gap-8">
              <span className="inline-flex max-w-max items-center gap-2 rounded-full border border-white/10 bg-[rgba(15,23,42,0.65)] px-4 py-2 text-[11px] uppercase tracking-[0.38em] text-sky-200">
                Webcarfters Owner
              </span>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
                I engineer immersive web experiences where motion, clarity, and
                story flow together.
              </h1>
              <p className="max-w-xl text-sm text-slate-300 md:text-base">
                I blend UX strategy, creative coding, and motion direction to
                craft interfaces that feel alive—guided by data, tuned for
                performance, and delivered with meticulous polish.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_25px_60px_-25px_rgba(56,189,248,0.9)] transition hover:from-sky-300 hover:via-sky-400 hover:to-indigo-400"
                >
                  View selected work
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-400/60 hover:text-sky-200"
                >
                  Explore services
                </Link>
              </div>
              <dl className="mt-6 grid gap-6 sm:grid-cols-3">
                {metrics.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/15 bg-[rgba(10,15,26,0.72)] p-4 text-center shadow-[0_20px_60px_-45px_rgba(59,130,246,0.8)]"
                  >
                    <dt className="text-[11px] uppercase tracking-[0.32em] text-slate-400">
                      {item.label}
                    </dt>
                    <dd className="mt-3 text-3xl font-semibold text-white">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative flex flex-col justify-between gap-6">
              <div className="rounded-[32px] border border-white/15 bg-[rgba(10,15,26,0.68)] p-8 text-sm text-slate-200 shadow-[0_30px_90px_-45px_rgba(99,102,241,0.8)]">
                <p className="text-xs uppercase tracking-[0.32em] text-sky-200">
                  Pillars
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-[6px] h-2 w-2 rounded-full bg-sky-300" />
                    <p>
                      Human-centered journeys crafted with research, empathy,
                      and strategic storytelling.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-[6px] h-2 w-2 rounded-full bg-violet-300" />
                    <p>
                      Motion systems engineered to guide focus, signal state,
                      and add delight without friction.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-[6px] h-2 w-2 rounded-full bg-cyan-300" />
                    <p>
                      Scalable frontend foundations tuned for collaboration,
                      accessibility, and long-term growth.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="glass flex flex-col gap-3 rounded-[28px] border border-white/10 bg-white/10 p-6 text-xs uppercase tracking-[0.32em] text-slate-200">
                <span className="text-slate-400">Currently crafting</span>
                <div className="flex items-center justify-between text-sm normal-case tracking-normal">
                  <div>
                    <p className="text-slate-200">Aurora Campus Hub</p>
                    <p className="text-xs text-slate-400">
                      Operating System - product sprint
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                    In Motion
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.36em] text-slate-400">
                How I help teams
              </span>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Strategy, motion, and code connected end-to-end.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-white/15 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),rgba(9,13,23,0.78))] p-8 transition hover:border-sky-400/40 hover:bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.26),rgba(9,13,23,0.7))]"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-sky-200 shadow-[0_18px_50px_-26px_rgba(56,189,248,0.8)]">
                    <span className="text-lg">✧</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.32em] text-slate-400">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 text-[11px] transition group-hover:border-sky-400/40 group-hover:text-sky-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="projects" className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.36em] text-slate-400">
                Featured work
              </span>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Interfaces engineered to feel fluid, confident, and alive.
              </h2>
              <p className="max-w-2xl text-sm text-slate-300 md:text-base">
                Each build is a partnership—from research and positioning to
                visual language, motion design, and deployment—crafted to leave
                a lasting impression.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),rgba(9,13,23,0.8))] p-8 transition hover:border-sky-400/40 hover:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.24),rgba(9,13,23,0.72))]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-slate-400 transition group-hover:border-sky-400/50 group-hover:text-sky-200">
                        Case Study
                      </span>
                    </div>
                    <p className="text-sm text-slate-300">
                      {project.description}
                    </p>
                    <ul className="space-y-2 text-xs text-slate-400">
                      {project.deliverables.map((deliverable) => (
                        <li key={deliverable} className="flex items-start gap-2">
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-300" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex w-max items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white transition group-hover:border-sky-400/60 group-hover:text-sky-200"
                  >
                    Visit Live
                    <span aria-hidden className="text-sky-200">
                      ↗
                    </span>
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section
            id="about"
            className="glass grid gap-10 rounded-[36px] p-10 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.36em] text-slate-400">
              About Kassem
              </span>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                I partner with design-led teams who care about craft and impact.
              </h2>
              <p className="text-sm text-slate-300 md:text-base">
                From product startups to cultural brands, I help teams translate
                ambition into immersive, scalable digital experiences. Collaboration
                is at the heart of my process—bringing strategy, visual design,
                motion direction, and engineering together in one narrative thread.
              </p>
              <p className="text-sm text-slate-300 md:text-base">
                When I’m not prototyping, you’ll find me documenting motion studies,
                exploring generative art, or coaching students on sustainable design systems.
              </p>
              <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.32em] text-slate-400">
                {[
                  "Next.js",
                  "TypeScript",
                  "Tailwind",
                  "Framer Motion",
                  "Three.js",
                  "Design Systems",
                  "Content Strategy",
                  "Creative Direction",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/10 px-3 py-1"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6">
              <div className="glass rounded-[28px] p-8 shadow-[0_30px_90px_-40px_rgba(56,189,248,0.7)]">
                <p className="text-xs uppercase tracking-[0.36em] text-sky-200">
                  Process
                </p>
                <ol className="mt-4 space-y-4 text-sm text-slate-300">
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-xs font-semibold text-sky-200">
                      01
                    </span>
                    Discovery sessions that align intent, success metrics, and emotional direction.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-xs font-semibold text-sky-200">
                      02
                    </span>
                    Prototyping with motion and narrative to validate before writing a line of production code.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-xs font-semibold text-sky-200">
                      03
                    </span>
                    Production-ready delivery, documentation, and collaborative handoff to elevate your team.
                  </li>
                </ol>
              </div>
              <div className="glass rounded-[28px] p-6 text-xs uppercase tracking-[0.36em] text-slate-300">
                <p>Currently booking</p>
                <p className="mt-3 text-lg font-semibold text-white">
                  February 2026
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  2-week design & build intensives - 1 long-form partnership
                </p>
              </div>
            </div>
          </section>

          <section
            id="contact"
            className="glass relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 px-10 py-16 text-center backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.45),rgba(56,189,248,0))]" />
            <span className="text-xs uppercase tracking-[0.36em] text-slate-300">
              Collaborate with me
            </span>
            <h2 className="mt-5 text-4xl font-semibold text-white md:text-5xl">
              Let’s build what’s next.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-200 md:text-base">
              Whether you&apos;re launching a new product, refreshing a brand, or
              bringing motion to an existing experience, I&apos;d love to hear your story.
            </p>
            <form
              action="https://formsubmit.co/webcrafters.agenc@gmail.com"
              method="POST"
              className="mx-auto mt-10 w-full max-w-3xl space-y-6 text-left"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="✨ New project inquiry from kassembell.com"
              />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_next"
                value="https://webcrafters.agenc/"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="group flex flex-col gap-2 rounded-2xl border border-white/15 bg-[rgba(9,13,23,0.62)] px-5 py-4 transition focus-within:border-sky-400/60">
                  <span className="text-[11px] uppercase tracking-[0.32em] text-slate-400">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full border-none bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-0"
                    required
                  />
                </label>
                <label className="group flex flex-col gap-2 rounded-2xl border border-white/15 bg-[rgba(9,13,23,0.62)] px-5 py-4 transition focus-within:border-sky-400/60">
                  <span className="text-[11px] uppercase tracking-[0.32em] text-slate-400">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full border-none bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-0"
                    required
                  />
                </label>
                <label className="group flex flex-col gap-2 rounded-2xl border border-white/15 bg-[rgba(9,13,23,0.62)] px-5 py-4 transition focus-within:border-sky-400/60">
                  <span className="text-[11px] uppercase tracking-[0.32em] text-slate-400">
                    Mobile
                  </span>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="+213676610457"
                    className="w-full border-none bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-0"
                    required
                  />
                </label>
                <label className="group flex flex-col gap-2 rounded-2xl border border-white/15 bg-[rgba(9,13,23,0.62)] px-5 py-4 transition focus-within:border-sky-400/60">
                  <span className="text-[11px] uppercase tracking-[0.32em] text-slate-400">
                    Subject
                  </span>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Tell me about your project"
                    className="w-full border-none bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-0"
                    required
                  />
                </label>
              </div>
              <label className="group flex flex-col gap-2 rounded-2xl border border-white/15 bg-[rgba(9,13,23,0.62)] px-5 py-4 transition focus-within:border-sky-400/60">
                <span className="text-[11px] uppercase tracking-[0.32em] text-slate-400">
                  Project details
                </span>
                <textarea
                  name="message"
                  placeholder="Share goals, timeline, and anything that will help me understand your vision."
                  className="h-36 w-full resize-none border-none bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-0"
                  required
                />
              </label>
              <button
                type="submit"
                className="inline-flex w-max items-center justify-center rounded-full bg-[#3bf7ff] px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_22px_60px_-28px_rgba(59,247,255,0.85)] transition hover:bg-[#73fcff]"
              >
                Send inquiry
              </button>
            </form>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="mailto:webcrafters.agenc@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-[#3bf7ff] px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_22px_60px_-28px_rgba(59,247,255,0.85)] transition hover:bg-[#73fcff]"
              >
                Start a project
              </Link>
              <Link
                href="https://wa.me/213676610457"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-400/60 hover:text-sky-200"
              >
                Schedule a call
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.32em] text-slate-400">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 transition hover:border-sky-400/50 hover:text-sky-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </section>
        </main>

        <footer className="flex flex-col gap-3 border-t border-white/10 py-6 text-center text-xs uppercase tracking-[0.32em] text-slate-500">
          <span>&copy; 2025 Kassem &#8212; High-performance design & code.</span>
        </footer>
      </div>
    </div>
  );
}
















