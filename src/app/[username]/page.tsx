import type { Metadata } from "next";

type UsernamePageProps = {
  params: Promise<{ username: string }>;
};

export async function generateMetadata({
  params,
}: UsernamePageProps): Promise<Metadata> {
  const { username } = await params;
  return { title: username };
}

export default async function UsernamePage({ params }: UsernamePageProps) {
  const { username } = await params;
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-foreground text-2xl font-semibold">{username}</h1>
    </div>
  );
}
