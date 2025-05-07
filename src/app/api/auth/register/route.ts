import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";
import { db } from "@/db";
import { tokens, users } from "@/db/schema";
import { EmailVerification } from "@/emails/email-verification";
import { env } from "@/env.mjs";
import { resend } from "@/lib/email";
import { hashPassword } from "@/lib/utils";
import { registerSchema } from "@/lib/validations/auth-validations";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { name, email, password } = registerSchema.parse(body);

  const exists = await db.query.users.findFirst({
    where: eq(users.email, email),
  });

  if (exists) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 400 },
    );
  }

  const username = slugify(`${name}-${nanoid(5)}`, {
    lower: true,
    strict: true,
    trim: true,
  });
  const hashedPassword = await hashPassword(password);

  const token = nanoid(32);

  await db.transaction(async (tx) => {
    const [user] = await tx
      .insert(users)
      .values({
        name,
        username,
        email,
        password: hashedPassword,
      })
      .returning();

    await tx.insert(tokens).values({
      userId: user.id,
      token: token,
      type: "email-verification",
    });
  });

  await resend.emails.send({
    from: env.MAIL_FROM,
    to: email,
    subject: "Verify your email",
    react: await EmailVerification({ token }),
  });

  return NextResponse.json({ message: "User created successfully" });
};
