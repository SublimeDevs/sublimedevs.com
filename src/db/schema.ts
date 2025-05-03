import { randomUUID } from "crypto";
import { pgEnum, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const tokenTypes = pgEnum("token_types", [
  "email-verification",
  "password-reset",
]);

export const tokens = pgTable("tokens", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  userId: uuid("user_id").references(() => users.id),
  token: varchar("token", { length: 255 }).notNull(),
  type: tokenTypes("type").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
});

export default { users, tokens };
