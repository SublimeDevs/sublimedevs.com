import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import { env } from "@/env.mjs";

export const db = drizzle(env.DATABASE_URL, { schema });
