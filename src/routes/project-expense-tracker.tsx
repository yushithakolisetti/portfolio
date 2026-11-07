import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar, Footer, Placeholder } from "@/components/site";

export const Route = createFileRoute("/project-expense-tracker")({
  head: () => ({
    meta: [
      { title: "Student Expense Tracker — Case Study · Yushitha" },
      { name: "description", content: "UI/UX case study: a mobile app for students to add an expense in under 10 seconds." },
      { property: "og:title", content: "Student Expense Tracker — Case Study" },
      { property: "og:description", content: "Less money stress. More student life." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div>
      <Navbar home={false} />
      <main className="mx-auto max-w-4xl px-5 py-16">
        <Link to="/" className="text-sm text-muted-foreground">← Back</Link>
        <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-terracotta">Case Study · UI/UX · Mobile App</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Student Expense Tracker</h1>
        <p className="mt-3 text-xl text-muted-foreground">Less money stress. More student life.</p>
        <Placeholder label="Image 2 · 3 mobile mockups" className="mt-10 aspect-video" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[["Problem", "Students can't track their daily spends and feel money stress at month end."], ["Solution", "A simple, cute tracker — a 3-screen flow to add an expense in under 10 seconds."], ["Tools", "Only Figma — wireframes, UI screens and an interactive prototype, all designed in Figma."]].map(([a, b]) => (
            <div key={a} className="rounded-[20px] bg-card p-5 shadow-soft">
              <h3 className="font-semibold">{a}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}