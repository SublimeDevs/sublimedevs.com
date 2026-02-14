"use client";

import { SiGoogle, SiLinkedin } from "react-icons/si";

import { Button } from "@/components/ui/button";
import { Field, FieldSeparator } from "@/components/ui/field";
import { cn } from "@/lib/utils";

export function SocialLogin({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-4", className)} {...props}>
      <Field>
        <Button variant="outline" type="button" className="w-full">
          <SiGoogle className="size-4" />
          Login with Google
        </Button>
        <Button variant="outline" type="button" className="w-full">
          <SiLinkedin className="size-4" />
          Login with LinkedIn
        </Button>
      </Field>
      <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
        Or continue with
      </FieldSeparator>
    </div>
  );
}
