// src/content/config.ts
import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishedAt: z.coerce.date().optional(),
    // keep optional so empty/minimal placeholder files still validate
    topicCluster: z.string().optional(),
    targetLandingPage: z.string().optional(),
  }),
});

const artworks = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishedAt: z.coerce.date().optional(),
    // optional fields in case the old site expects these
    image: z.string().optional(),
    collection: z.string().optional(),
    price: z.string().optional(),
    externalUrl: z.string().optional(),
  }),
});

export const collections = {
  articles,
  artworks,
};
