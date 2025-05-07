import Image from "next/image";
import Link from "next/link";
import { SiSahibinden } from "react-icons/si";
import { RegisterForm } from "@/components/auth/register-form";

export default function Register() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link className="flex items-center gap-0.5 font-medium" href="/">
            <div className="text-primary flex h-10 w-10 items-center justify-center rounded-md">
              <SiSahibinden className="size-8 rounded-xs" />
            </div>
            <span className="text-xl font-bold">Sublime Devs</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <RegisterForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          src="/placeholder.svg"
          fill
        />
      </div>
    </div>
  );
}
