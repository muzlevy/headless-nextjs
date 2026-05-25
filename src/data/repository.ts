/* eslint-disable @typescript-eslint/no-unused-vars */

import type { Post } from "@/types";

/**
 * Repository interface for posts.
 * Currently backed by mock data; swap the implementation
 * to connect to a GraphQL endpoint when the backend is ready.
 */
export interface PostRepository {
  getAll(): Promise<Post[]>;
  getById(id: string): Promise<Post | null>;
}
