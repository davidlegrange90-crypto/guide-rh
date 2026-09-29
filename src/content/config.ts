import { defineCollection, z } from 'astro:content';
const journal = defineCollection({
  type: 'content',
  schema: z.object({ title: z.string(), date: z.date(), category: z.string().optional(), pages: z.array(z.string()).optional() }),
});
export const collections = { journal };
