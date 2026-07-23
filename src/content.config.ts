import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const skills = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/skills' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    description: z.string().max(200),
    category: z.enum([
      '研究洞察', '视觉生成', '组件打磨', '审查交付'
    ]),
    tags: z.array(z.string()),
    ai_trigger: z.array(z.string()).optional(),
    ai_output: z.string().optional(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
    tools: z.array(z.string()).optional(),
    related: z.array(z.string()).optional(),
    updated: z.string().optional(),
    sortOrder: z.number().optional(),
    showcase: z.object({
      url: z.string().url(),
      eyebrow: z.string(),
      title: z.string(),
      subtitle: z.string(),
      meta: z.string(),
      caption: z.string(),
    }).optional(),
  }),
});

export const collections = { skills };
