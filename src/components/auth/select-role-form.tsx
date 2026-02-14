"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup } from "@/components/ui/field";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Spinner } from "@/components/ui/spinner";
import { useSelectRole } from "@/hooks/auth/use-select-role";
import { cn } from "@/lib/utils";
import { type SelectRoleInput, selectRoleSchema } from "@/schemas/auth.schema";
import type { Role } from "@/types/enums";

const ROLES: { value: Role; label: string; description: string }[] = [
  {
    value: "candidate",
    label: "Candidate",
    description:
      "Looking for opportunities. Build your profile and get matched with roles.",
  },
  {
    value: "recruiter",
    label: "Recruiter",
    description:
      "Hiring talent. Post roles and discover candidates for your team.",
  },
];

export function SelectRoleForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const form = useForm<SelectRoleInput>({
    resolver: zodResolver(selectRoleSchema),
    defaultValues: { role: "candidate" },
  });
  const { mutate: selectRole, isPending } = useSelectRole();

  function onSubmit(values: SelectRoleInput) {
    selectRole(
      { role: values.role },
      {
        onSuccess: () => {
          router.replace("/");
        },
      }
    );
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Select your role</CardTitle>
          <CardDescription>
            Choose how you want to use the platform. You can update this later
            in settings.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FieldGroup>
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Role <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="grid gap-3"
                        >
                          {ROLES.map((r) => (
                            <div
                              key={r.value}
                              className="border-input flex items-start gap-3 rounded-md border p-4"
                            >
                              <RadioGroupItem
                                value={r.value}
                                id={`role-${r.value}`}
                                className="mt-0.5"
                              />
                              <Label
                                htmlFor={`role-${r.value}`}
                                className="grid flex-1 cursor-pointer gap-1 leading-none"
                              >
                                <span className="font-medium">{r.label}</span>
                                <p className="text-muted-foreground text-sm">
                                  {r.description}
                                </p>
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Field>
                  <Button type="submit" disabled={isPending}>
                    {isPending ? <Spinner /> : "Continue"}
                  </Button>
                </Field>
              </FieldGroup>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
