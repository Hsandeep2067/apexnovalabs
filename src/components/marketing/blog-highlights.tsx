import Link from "next/link";
import { blogHighlights } from "@/lib/content";

export function BlogHighlights() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {blogHighlights.map((post) => (
        <article
          key={post.slug}
          className="flex h-full flex-col justify-between rounded-3xl border border-[var(--color-border)] bg-[var(--color-blog-surface)] p-8 text-[var(--color-blog-muted)] shadow-[0_28px_85px_-50px_rgba(14,116,144,0.55)] backdrop-blur"
        >
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-blog-muted)]">
              {new Date(post.publishedAt).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
            <h3 className="text-xl font-semibold text-[var(--color-blog-foreground)]">
              {post.title}
            </h3>
            <p className="text-sm text-[var(--color-blog-muted)]">
              {post.summary}
            </p>
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-[var(--color-blog-muted)]">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[var(--color-blog-tag-bg)] px-3 py-1 text-[var(--color-blog-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <Link
              href={`/blog/${post.slug}`}
              className="text-sm font-medium text-[var(--color-brand)] transition hover:text-[var(--color-brand-muted)]"
            >
              Read story {"->"}
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
