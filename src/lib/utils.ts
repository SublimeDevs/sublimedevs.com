import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import * as bcrypt from "bcrypt";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const hashPassword = async (password: string) =>
  await bcrypt.hash(password, 12);

export const verifyPassword = async (
  password: string,
  hashedPassword: string,
) => await bcrypt.compare(password, hashedPassword);
