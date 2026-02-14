"use client";

import * as React from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";

const InputPassword = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & { containerClassName?: string }
>(function InputPassword({ className, containerClassName, ...props }, ref) {
  const [visible, setVisible] = React.useState(false);

  return (
    <InputGroup className={cn("overflow-hidden", containerClassName)}>
      <InputGroupInput
        ref={ref}
        type={visible ? "text" : "password"}
        autoComplete={props.autoComplete ?? "current-password"}
        className={className}
        {...props}
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          type="button"
          variant="ghost"
          size="icon-xs"
          className="text-muted-foreground hover:text-foreground"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          tabIndex={-1}
        >
          {visible ? (
            <LuEyeOff className="size-4" aria-hidden />
          ) : (
            <LuEye className="size-4" aria-hidden />
          )}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
});

export { InputPassword };
