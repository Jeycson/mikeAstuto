import { defineCollection, z } from "astro:content";

export const collections = {
  descriptiva: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      category: z.string(),
      order: z.number(),
      progress: z.number(),
    }),
  }),
};
