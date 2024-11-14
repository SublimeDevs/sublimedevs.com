import Link from "next/link";
import { PiCodeDuotone } from "react-icons/pi";
import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiX,
  SiYoutube,
} from "react-icons/si";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <>
      <div className="border-b-2 border-primary bg-[#FF90E8]">
        <div className="container mx-auto flex flex-col px-4 py-16 lg:px-6">
          <h3 className="text-center text-4xl font-bold text-primary">
            Schedule a Meeting with Our Experts
          </h3>
          <p className="mt-2 text-center text-xl text-primary">
            Share a brief about your project and get a guaranteed response
            within 24 hours.
          </p>
          <Link
            className={cn(
              buttonVariants({ size: "lg" }),
              "mx-auto mt-6 rounded-full font-medium",
            )}
            href="/contact"
          >
            Get in Touch
          </Link>
        </div>
      </div>
      <div className="bg-primary">
        <div className="container mx-auto py-16">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <Link
              className="flex items-center gap-2 text-primary-foreground"
              href="/"
            >
              <PiCodeDuotone className="h-10 w-10 text-primary-foreground" />
              <span className="text-2xl font-bold">SublimeDevs</span>
            </Link>
            <div className="flex flex-wrap items-center gap-4">
              <a
                className="inline-flex h-12 w-12 items-center justify-center rounded-full hover:bg-primary-foreground/50"
                href="#"
                target="_blank"
              >
                <SiInstagram className="h-6 w-6 text-primary-foreground" />
              </a>
              <a
                className="inline-flex h-12 w-12 items-center justify-center rounded-full hover:bg-primary-foreground/50"
                href="#"
                target="_blank"
              >
                <SiLinkedin className="h-6 w-6 text-primary-foreground" />
              </a>
              <a
                className="inline-flex h-12 w-12 items-center justify-center rounded-full hover:bg-primary-foreground/50"
                href="#"
                target="_blank"
              >
                <SiX className="h-6 w-6 text-primary-foreground" />
              </a>
              <a
                className="inline-flex h-12 w-12 items-center justify-center rounded-full hover:bg-primary-foreground/50"
                href="#"
                target="_blank"
              >
                <SiYoutube className="h-6 w-6 text-primary-foreground" />
              </a>
              <a
                className="inline-flex h-12 w-12 items-center justify-center rounded-full hover:bg-primary-foreground/50"
                href="#"
                target="_blank"
              >
                <SiFacebook className="h-6 w-6 text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
