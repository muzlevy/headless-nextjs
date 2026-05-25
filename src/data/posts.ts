import type { Post } from "@/types";

const posts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Next.js 15",
    body: "Next.js 15 introduces stable React 19 support, improved error handling, and enhanced performance. This post walks through the key features and how to leverage them in your projects.",
    createdAt: "2026-05-20T08:00:00Z",
  },
  {
    id: "2",
    title: "Tailwind CSS v4: What's New",
    body: "Tailwind CSS v4 brings a CSS-first configuration model, improved performance, and new utilities. Learn how to upgrade and take advantage of the latest features.",
    createdAt: "2026-05-21T10:30:00Z",
  },
  {
    id: "3",
    title: "Building Accessible UIs with Headless UI",
    body: "Headless UI provides unstyled, accessible components that integrate seamlessly with Tailwind CSS. Discover how to build robust, accessible interfaces without reinventing the wheel.",
    createdAt: "2026-05-22T14:15:00Z",
  },
];

export function getPosts(): Post[] {
  return posts;
}

export function getPostById(id: string): Post | undefined {
  return posts.find((p) => p.id === id);
}
