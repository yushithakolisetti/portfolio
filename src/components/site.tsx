import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ImagePlus } from "lucide-react";

export const IG = "https://instagram.com/lil.dream.art";
export const EMAIL = "Kolisettiyushitha@gmail.com";

export function Placeholder({ label, className = "", badge }: { label: string; className?: string; badge?: string }) {
  return (
    <div className={`relative flex flex-col items-center justify-center gap-2 rounded-[16px] border-2 border-dashed border-foreground/15 bg-card/60 p-4 text-center text-muted-foreground ${className}`}>
      {badge && (
        <span className="absolute right-3 top-3 rounded-full bg-terracotta px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
          {badge}
        </span>
      )}
      <ImagePlus className="h-6 w-6 opacity-60" />
      <p className="text-xs font-semibold uppercase tracking-wider text-foreground/70">{label}</p>
      <p className="text-xs">Upload your original here · 3000px PNG · Replace later</p>
    </div>
  );
}

const links = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
];

export function Navbar({ home = true }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    if (!home) return;
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ["home", "work", "about", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [home]);
  const href = (id: string) => (home ? `#${id}` : `/#${id}`);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="font-display text-xl font-semibold tracking-tight">yushitha.</Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.id} href={href(l.id)} className={`text-sm transition-colors ${active === l.id && home ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              {l.label}
            </a>
          ))}
          <a href={href("contact")} className="rounded-[40px] bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">Let's Talk</a>
        </div>
        <button className="md:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="flex flex-col gap-4 border-t border-border px-5 py-5 md:hidden">
          {links.map((l) => (
            <a key={l.id} href={href(l.id)} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href={href("contact")} onClick={() => setOpen(false)} className="w-fit rounded-[40px] bg-primary px-5 py-2.5 text-sm text-primary-foreground">Let's Talk</a>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
      © 2026 Yushitha Kolisetti · Made with intention & a little love
    </footer>
  );
}