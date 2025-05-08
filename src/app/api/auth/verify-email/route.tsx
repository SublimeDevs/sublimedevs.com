import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { tokens, users } from "@/db/schema";
import { verifyEmailSchema } from "@/lib/validations/auth-validations";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const { token } = verifyEmailSchema.parse(body);

  const exists = await db.query.tokens.findFirst({
    where: and(eq(tokens.token, token), eq(tokens.type, "email-verification")),
  });

  if (!exists || (exists.expiresAt && exists.expiresAt < new Date())) {
    return NextResponse.json(
      { message: "Invalid token or token expired" },
      { status: 400 },
    );
  }

  await db.transaction(async (tx) => {
    await tx
      .update(users)
      .set({ emailVerified: new Date(Date.now()) })
      .where(eq(users.id, exists.userId));
    await tx.delete(tokens).where(eq(tokens.id, exists.id));
  });

  return NextResponse.json({ message: "Email verified" }, { status: 200 });
};
