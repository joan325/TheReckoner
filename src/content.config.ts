import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      additionalAuthors: z.array(z.string()).optional(),
      imageCredit: z.array(z.string()).optional(),
      imageType: z.string().optional().default("Photo"),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image(),
      heroImageAlt: z
        .string()
        .optional()
        .default("Default dark gradient") /* Default for placeholder images */,
      tags: z.array(z.string()).optional().default(["Uncategorized"]),
      featured: z
        .boolean()
        .optional()
        .default(false) /* Update featured posts to use this later */,
    }),
});

export const collections = {
  uncategorized: blog,
};
