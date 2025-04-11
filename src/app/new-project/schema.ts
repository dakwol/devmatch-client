// schema.ts
import { z } from 'zod';

export const createProjectSchema = z.object({
  title: z.string().min(3, 'Минимум 3 символа'),
  description: z.string().min(10, 'Минимум 10 символов'),
  techStack: z.string().optional(),
  category: z.string(),
  tags: z.string().optional(),
  github: z.string().url('Неверный URL').optional(),
  lookingFor: z.string().optional(),
  experienceLevel: z.string(),
  communication: z.string().optional(),
  image: z.any().optional(),
});

export type CreateProjectFormData = z.infer<typeof createProjectSchema>;
