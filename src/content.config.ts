import { file } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const blog = z.object({
  title: z.string(),
  author: z.string(),
  additionalAuthors: z.array(z.string()).optional(),
  imageCredit: z.array(z.string()).optional(),
  imageType: z.string().optional().default("Photo"),
  description: z.string(),
  // Transform string to Date object
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  tags: z.array(z.string()).optional().default(["Uncategorized"]),
  featured: z.boolean().optional(),
});

export const collections = {
  uncategorized: defineCollection({ schema: blog }),
};
