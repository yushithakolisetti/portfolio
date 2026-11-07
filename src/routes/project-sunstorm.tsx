import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar, Footer, Placeholder } from "@/components/site";

export const Route = createFileRoute("/project-sunstorm")({
  head: () => ({
    meta: [
      { title: "Project Seasons — Summer Module · Yushitha" },
      { name: "description", content: "Summer module of Bharath Jnana Yatra — The Four Seasons Kingdom. Early concept, final UI coming soon." },
      { property: "og:title", content: "Project Seasons — Summer Module" },
      { property: "og:description", content: "Early concept reference for the Four Seasons Kingdom game." },
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
        <span className="mt-6 inline-block rounded-full bg-terracotta px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground">Coming Soon</span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Project Seasons — Summer Module</h1>
        <p className="mt-3 text-lg text-muted-foreground">Bharath Jnana Yatra — The Four Seasons Kingdom · Startup project, concept phase, not yet launched.</p>
        <div className="mt-10 overflow-hidden rounded-[20px] bg-peach p-6 shadow-soft">
          <Placeholder label="Reference image · Summer panel No.3" badge="Reference · Early Concept WIP" className="aspect-video" />
          <p className="mt-4 text-sm text-muted-foreground">This is a reference image for now. The final polished Figma UI will replace it when the game is complete.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}