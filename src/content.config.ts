import { file } from 'astro/loaders';
import { defineCollection, reference, z } from 'astro:content';

const blog = z.object({
		title: z.string(),
		author: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()),
});

export const collections = {
  uncategorized: defineCollection({ schema: blog }),
  news: defineCollection({ schema: blog }),
  life: defineCollection({ schema: blog }),
  editorial: defineCollection({ schema: blog }),
  photography: defineCollection({ schema: blog }),
};