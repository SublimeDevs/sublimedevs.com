import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const HomeHero = () => {
  return (
    <div className="border-b-2 border-primary bg-[#FFC900]">
      <div className="container mx-auto px-4 py-24 lg:px-6">
        <h1 className="text-center text-5xl font-bold text-primary">
          Your Vision, Crafted into Powerful Digital Experience
        </h1>
        <h2 className="mx-auto mt-6 max-w-4xl text-center text-xl text-primary">
          From custom websites to engaging mobile apps, cutting-edge design, and
          seamless DevOps integration—our team turns your ideas into high-impact
          solutions that drive growth.
        </h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 lg:flex-row">
          <Link
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full bg-transparent",
            )}
            href="/contact"
          >
            Bring Your Project to Life
          </Link>
          <Link
            className={cn(buttonVariants({ size: "lg" }), "rounded-full")}
            href="/services"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
