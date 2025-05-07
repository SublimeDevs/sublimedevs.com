"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuLoader } from "react-icons/lu";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginSchema, loginSchema } from "@/lib/validations/auth-validations";

export function LoginForm() {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isPending, setIsPending] = useState<boolean>(false);

  const router = useRouter();

  const handleLogin = async (values: LoginSchema) => {
    setIsPending(true);
    await signIn("credentials", {
      ...values,
      redirect: false,
    }).then((res) => {
      setIsPending(false);
      if (res?.error) {
        toast.error(res.code);
        return;
      }
      router.push("/");
    });
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(handleLogin)}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>
        <div className="grid gap-6">
          <FormField
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="m@example.com"
                    type="email"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            control={form.control}
            name="email"
          />
          <FormField
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center" htmlFor="password">
                  <span>Password</span>
                  <Link
                    className="ml-auto text-sm underline-offset-4 hover:underline"
                    href="/forgot-password"
                  >
                    Forgot your password?
                  </Link>
                </FormLabel>
                <FormControl>
                  <Input {...field} type="password" required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            control={form.control}
            name="password"
          />
          <Button className="w-full" disabled={isPending} type="submit">
            {isPending ? <LuLoader className="animate-spin" /> : "Login"}
          </Button>
        </div>
        <div className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link className="underline underline-offset-4" href="/register">
            Sign up
          </Link>
        </div>
      </form>
    </Form>
  );
}
