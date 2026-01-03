"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Theme = "light" | "dark";

const STORAGE_KEY = "apex-nova-theme";

function applyTheme(theme: Theme) {
  const body = document.body;

  if (theme === "dark") {
    body.dataset.theme = "dark";
  } else {
    body.removeAttribute("data-theme");
  }

  body.style.colorScheme = theme;
}

const icons: Record<Theme, JSX.Element> = {
  light: (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  ),
  dark: (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79" />
    </svg>
  ),
};

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initialTheme = stored ?? (systemPrefersDark ? "dark" : "light");

    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme((current) => {
      const nextTheme: Theme = current === "light" ? "dark" : "light";
      applyTheme(nextTheme);
      window.localStorage.setItem(STORAGE_KEY, nextTheme);
      return nextTheme;
    });
  };

  return (
    <Button
      aria-label="Toggle color theme"
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-inverted)]/80 p-0 text-[var(--color-foreground)] shadow-sm backdrop-blur transition hover:bg-[var(--color-inverted)]/100"
    >
      <span className="sr-only">
        Switch to {theme === "light" ? "dark" : "light"} theme
      </span>
      <span aria-hidden="true" className="flex items-center justify-center">
        {mounted ? icons[theme] : icons.light}
      </span>
    </Button>
  );
}
