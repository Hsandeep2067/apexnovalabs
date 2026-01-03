import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { blogHighlights } from "@/lib/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Apex Nova Labs Sri Lanka",
  description:
    "Articles on shipping peak-quality software, scaling teams, and delivering measurable product outcomes.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <Section padding="lg" className="pt-24 sm:pt-28">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted-foreground)]">
            Blog
          </p>
          <h1 className="text-balance text-4xl font-semibold sm:text-5xl md:text-6xl">
            Notes from the lab.
          </h1>
          <p className="max-w-3xl text-lg text-[var(--color-muted-foreground)]">
            Deep dives into process, performance, and product leadership. We ship in public so
            others can benefit from our learnings.
          </p>
        </div>
      </Section>

      <Section padding="lg" background="muted">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Latest"
            title="Fresh perspectives from our team."
            description="Full articles are in production. For now, explore the topics weâ€™re writing about."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {blogHighlights.map((post) => (
              <article
                key={post.slug}
                className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-blog-surface)] p-6 text-[var(--color-blog-muted)] shadow-[0_30px_90px_-60px_rgba(37,99,235,0.55)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-blog-muted)]">
                  {new Date(post.publishedAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <h2 className="mt-3 text-xl font-semibold text-[var(--color-blog-foreground)]">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-[var(--color-blog-muted)]">
                  {post.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-[var(--color-blog-muted)]">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--color-blog-tag-bg)] px-3 py-1 text-[var(--color-blog-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-medium text-[var(--color-brand)] transition hover:text-[var(--color-brand-muted)]"
                  >
                    Read update {"->"}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
