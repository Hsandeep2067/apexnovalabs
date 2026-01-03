import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted-foreground)]">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
        That page drifted into another galaxy.
      </h1>
      <p className="mt-4 max-w-xl text-lg text-[var(--color-muted-foreground)]">
        The destination you&apos;re looking for doesn&apos;t exist yet. Head back to
        the homepage to explore Apex Nova Labs Sri Lanka.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-[var(--color-brand)] px-6 py-3 text-sm font-medium text-[var(--color-brand-foreground)] shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-[var(--color-brand-muted)]"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
