"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
import { useRegister } from "@/hooks/auth/use-register";
import {
  RegisterSchema,
  registerSchema,
} from "@/lib/validations/auth-validations";

export function RegisterForm() {
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { mutate: register, isPending } = useRegister();
  const router = useRouter();

  const handleRegister = (values: RegisterSchema) =>
    register(values, {
      onSuccess: () => {
        toast.success("Account created successfully");
        router.push("/login");
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message);
      },
    });

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(handleRegister)}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Create an account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to create an account
          </p>
        </div>
        <div className="grid gap-6">
          <FormField
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="John Doe"
                    type="text"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            control={form.control}
            name="name"
          />
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
            {isPending ? (
              <LuLoader className="animate-spin" />
            ) : (
              "Create account"
            )}
          </Button>
        </div>
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link className="underline underline-offset-4" href="/login">
            Sign in
          </Link>
        </div>
      </form>
    </Form>
  );
}
