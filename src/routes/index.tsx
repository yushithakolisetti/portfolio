import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.svg";
import { Navbar, Footer, Placeholder, IG, EMAIL } from "@/components/site";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yushitha Kolisetti — UI/UX Designer & Illustrator" },
      { name: "description", content: "Portfolio of Yushitha Kolisetti: UI/UX designer, illustrator (@lil.dream.art) and MCA student building a startup project." },
      { property: "og:title", content: "Yushitha Kolisetti — UI/UX Designer & Illustrator" },
      { property: "og:description", content: "Thoughtful digital experiences and illustrations that feel a little more human." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full bg-background px-3 py-1 text-xs font-medium text-foreground/80">{children}</span>
);

function Index() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-6xl px-5">
        {/* HERO */}
        <section id="home" className="grid scroll-mt-24 items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
              A designer's mind. An artist's heart.
            </p>
            <h1 className="hero-title mt-6 font-bold">Hi, I'm <span className="name-underline">Yushitha<svg viewBox="0 0 300 18" preserveAspectRatio="none" aria-hidden="true"><path d="M3 10 C24 2 40 16 62 9 S99 4 122 10 S159 4 181 9 S221 5 243 10 S276 5 297 8" pathLength="1" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /></svg></span>.</h1>
            <h2 className="mt-7 text-2xl font-medium leading-relaxed">
              UI/UX Designer + Illustrator
            </h2>
            <p className="mt-7 max-w-lg leading-loose text-muted-foreground">
              I turn everyday ideas into thoughtful digital experiences and illustrations that feel a little more human. I'm an MCA student who designs products from scratch — currently designing Bharath Jnana Yatra - a 4-season learning game that teaches culture through play. Sketchbook is my playground, Figma is my workshop.
            </p>
            <p className="mt-5 text-sm leading-loose text-muted-foreground">✦ 1.5M+ people saw my sketches ✦ 9.54 CGPA ✦ Building in public</p>
            <div className="mt-4 flex flex-wrap gap-2">{["Figma", "UI/UX", "HTML/CSS", "Illustration"].map((skill) => <span key={skill} className="rounded-full bg-card px-3 py-1 text-xs font-medium shadow-soft">{skill}</span>)}</div>
            <div className="mt-6 flex flex-wrap gap-2 text-sm">
              <span className="rounded-full bg-card px-3 py-1.5 shadow-soft">🚀 Designing Startup Project · In Progress</span>
              <span className="rounded-full bg-card px-3 py-1.5 shadow-soft">🎓 MCA <b>9.54</b></span>
              <Button variant="ghost" onClick={() => window.open(IG, "_blank")} className="h-auto rounded-full bg-card px-3 py-1.5 shadow-soft hover:text-terracotta">👁️ <b>1.5M+</b> @lil.dream.art</Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-[40px] bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">View my work <ArrowRight className="h-4 w-4" /></a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-[40px] border border-foreground px-6 py-3 text-sm font-medium">Contact me <ArrowRight className="h-4 w-4" /></a>
            </div>
            <a href={`mailto:${EMAIL}`} className="mt-5 block text-sm text-muted-foreground hover:text-foreground">{EMAIL}</a>
          </div>
          <img src={hero} alt="Illustration of a girl writing in a notebook" width={1024} height={1024} className="w-full rounded-[20px] shadow-soft" />
        </section>

        {/* WORK */}
        <section id="work" className="scroll-mt-24 py-16">
          <h2 className="text-4xl font-semibold tracking-tight">Thoughtful work. Little discoveries.</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">From solving everyday problems to telling stories through art — and building a product from scratch.</p>

          <div className="mt-10 rounded-[20px] bg-primary p-8 text-primary-foreground shadow-soft md:p-10">
            <div className="text-3xl">🚀</div>
            <h3 className="mt-4 text-2xl font-semibold">Currently Designing — Early-Stage Startup Project · In Progress</h3>
            <p className="mt-3 max-w-3xl opacity-80">
              Working on Bharath Jnana Yatra — The Four Seasons Kingdom, a 4-season learning game (Spring, Summer, Monsoon, Winter). Currently focusing on the Summer module. Concept phase, not yet launched. Learning how to build a product from zero to one.
            </p>
            <span className="mt-6 inline-block rounded-full bg-terracotta px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">In Progress · Concept Phase</span>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <article className="rounded-[20px] bg-card p-6 shadow-soft">
              <span className="rounded-full bg-terracotta px-3 py-1 text-xs font-semibold text-primary-foreground">Featured</span>
              <Placeholder label="Image 2 · Expense Tracker — 3 mobile mockups" className="mt-4 aspect-[4/3]" />
              <h3 className="mt-5 text-xl font-semibold">Student Expense Tracker — Less money stress. More student life.</h3>
              <p className="mt-2 text-sm text-muted-foreground">Mobile app for students to track money — a 3-screen flow to add an expense in under 10 seconds.</p>
              <p className="mt-2 text-sm text-muted-foreground"><b className="text-foreground">Problem:</b> Students can't track daily spends. <b className="text-foreground">Solution:</b> A simple, cute tracker. <b className="text-foreground">Built with:</b> Only Figma.</p>
              <div className="mt-4 flex flex-wrap gap-2">{["UI/UX Design", "Mobile App", "Figma Only"].map((t) => <Tag key={t}>{t}</Tag>)}</div>
              <Link to="/project-expense-tracker" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">View Case Study <ArrowRight className="h-4 w-4" /></Link>
            </article>

            <article className="overflow-hidden rounded-[20px] bg-peach shadow-soft">
              <div className="p-6">
                <span className="mb-4 inline-block rounded-full bg-terracotta px-3 py-1 text-xs font-semibold text-foreground">🚀 Currently Working - In Progress</span>
                <Placeholder label="Image 4 · Summer panel No.3 — Four Seasons game" badge="REFERENCE NOW FINAL COMING SOON" className="aspect-[4/3]" />
                <h3 className="mt-5 text-xl font-semibold">Project Seasons - Summer Module</h3>
                <p className="text-sm font-medium text-terracotta">Bharath Jnana Yatra - The Four Seasons Kingdom</p>
                <div className="mt-4 space-y-4 text-sm text-muted-foreground">
                  <p>Currently working on this concept - Designing a 4-season learning game where each season teaches how to live in harmony with nature.</p>
                  <p>Right now I'm building Summer Module - Season 01:</p>
                  <p>🎯 Mission: Prepare the village to beat the heat for the upcoming festival</p>
                  <p>🤔 Players decide: Hydration stations, shaded areas, seasonal foods, rest periods, safe activity times</p>
                  <p>📚 Teaches: Learn Ayurveda, seasonal wisdom, community planning</p>
                  <p>🎮 Flow: Observe → Understand → Decide → See Consequences → Adapt</p>
                  <p>This is part of bigger vision - 4 seasons = Spring Summer Monsoon Winter - Summer is what I'm working on right now.</p>
                  <p>Status: Concept phase - Early explorations - Reference images for now - Final polished UI coming soon - Building in public</p>
                </div>
                <p className="mt-4 text-sm font-medium italic">So and so project chestunna - This concept meeda currently working - Summer module now</p>
                <div className="mt-4 flex flex-wrap gap-2">{["Currently Working", "Game UI", "Startup Project", "In Progress", "Concept Design", "Ayurveda Learning"].map((t) => <Tag key={t}>{t}</Tag>)}</div>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Reference now — Final coming soon</span>
                  <Link to="/project-sunstorm" className="inline-flex items-center gap-2 text-sm font-semibold">Details <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </div>
              <div className="tribal-border h-3" />
            </article>

            <article className="rounded-[20px] bg-card p-6 shadow-soft">
              <div className="grid grid-cols-3 gap-2">
                {[5, 6, 7, 8, 9, 10].map((n) => <Placeholder key={n} label={`Image ${n} · Upload your best art`} className="aspect-square !p-2 [&>p:last-child]:hidden" />)}
              </div>
              <h3 className="mt-5 text-xl font-semibold">Original Illustrations</h3>
              <p className="mt-1 text-sm font-medium"><b>1.5M+</b> Views on Instagram</p>
              <p className="mt-2 text-sm text-muted-foreground">Illustrations from the Sketchbook app — my original character world. Sketchbook is my playground. Top posts: 1.5M · 1.1M · 868K views.</p>
              <div className="mt-4"><Tag>👁️ <b>1.5M+</b> views @lil.dream.art</Tag></div>
              <Button onClick={() => window.open(IG, "_blank")} className="mt-5 h-auto rounded-[40px] px-5 py-2.5 font-semibold">View Instagram <ArrowRight className="h-4 w-4" /></Button>
            </article>
          </div>

        </section>

        {/* ABOUT */}
        <section id="about" className="grid scroll-mt-24 gap-12 py-16 md:grid-cols-2">
          <div>
            <Placeholder label="Image 11 · About photo" className="aspect-[4/5]" />
            <p className="mt-4 font-display text-xl font-semibold">Hi again, I'm Yushitha 👋</p>
          </div>
          <div>
            <h2 className="text-4xl font-semibold tracking-tight">Making things feel human, building from scratch.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              I'm a UI/UX designer, illustrator and MCA student (9.54 CGPA). I'm currently designing a game project, The Four Seasons Kingdom — 4 seasons: Spring, Summer, Monsoon and Winter. It's in the concept phase, not yet launched, and I'm learning to build from zero.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              I draw in the Sketchbook app as @lil.dream.art — Sketchbook is my playground. Stories of love, nostalgia and everyday life that have reached <b className="text-foreground">1.5M+</b> people.
            </p>
            <p className="mt-4 leading-loose text-muted-foreground">Figma is my workshop. MCA background - comfortable with HTML, CSS basics and understanding how designs translate to code - I design with developers in mind.</p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[["9.54", "MCA CGPA"], ["1.5M+", "Instagram views"], ["🚀", "Designing Startup Project · In Progress"]].map(([a, b]) => (
                <div key={b} className="rounded-[20px] bg-card p-4 shadow-soft">
                  <div className="font-display text-2xl font-bold">{a}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{b}</div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-terracotta">Education</p>
              <p className="mt-2">MCA · B.V. Raju College, Bhimavaram</p>
              <p className="text-sm text-muted-foreground">Native · Amalapuram · Studying · Bhimavaram</p>
            </div>
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-terracotta">Toolkit</p>
              <div className="mt-3 space-y-3">
                {[["Figma", "UI/UX Design", "Illustration", "HTML", "CSS"], ["Sketchbook App", "Prototyping", "Design System", "Product Design", "Game Concept", "JavaScript Basics"]].map((row, i) => (
                  <div key={i} className="flex flex-wrap gap-2">{row.map((t) => <span key={t} className="rounded-full bg-card px-3 py-1.5 text-sm shadow-soft">{t}</span>)}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-24 py-20 text-center">
          <h2 className="mx-auto max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">Let's make something lovely, building together.</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Have a project, a startup idea, or just want to say hi? I'd love to hear. Currently building from scratch — happy to share learnings.</p>
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 text-left sm:grid-cols-3">
            {[
              ["Email me", <a href={`mailto:${EMAIL}`} className="hover:text-terracotta">{EMAIL}</a>],
              ["A little art", <Button variant="link" onClick={() => window.open(IG, "_blank")} className="h-auto p-0 text-base hover:text-terracotta">@lil.dream.art</Button>],
              ["Project status", "Designing Startup Project · Concept Phase · Not Yet Launched"],
            ].map(([k, v], i) => (
              <div key={i} className="rounded-[20px] bg-card p-5 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-wider text-terracotta">{k}</p>
                <div className="mt-2 break-words font-medium">{v}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}