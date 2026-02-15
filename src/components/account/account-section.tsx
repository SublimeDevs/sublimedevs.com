import * as React from "react";

import { cn } from "@/lib/utils";

type AccountSectionProps = React.ComponentProps<"section"> & {
  id: string;
  title: string;
  description?: string;
};

function AccountSection({
  id,
  title,
  description,
  className,
  children,
  ...props
}: AccountSectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 [content-visibility:auto]", className)}
      data-section={id}
      {...props}
    >
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          {description ? (
            <p className="text-muted-foreground text-sm">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export { AccountSection };
