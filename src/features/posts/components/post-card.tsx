import type { Post } from "@/types";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
      <h2 className="mb-2 text-xl font-semibold">{post.title}</h2>
      <p className="mb-4 text-gray-600">{post.body}</p>
      <time className="text-sm text-gray-400" dateTime={post.createdAt}>
        {new Intl.DateTimeFormat("zh-CN", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(new Date(post.createdAt))}
      </time>
    </article>
  );
}
