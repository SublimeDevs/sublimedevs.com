import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
});

export type RegisterSchema = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const verifyEmailSchema = z.object({
  token: z.string().min(32).max(32),
});

export type VerifyEmailSchema = z.infer<typeof verifyEmailSchema>;
