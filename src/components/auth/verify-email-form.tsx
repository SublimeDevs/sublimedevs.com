"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { LuLoader, LuCircleAlert, LuCircleCheck } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { useVerifyEmail } from "@/hooks/auth/use-verify-email";

const VerifyEmailForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

  const {
    mutate: verifyEmail,
    isPending,
    isError,
    error,
    isSuccess,
  } = useVerifyEmail();

  useEffect(() => {
    if (token) {
      verifyEmail(
        { token },
        {
          onSuccess: () => {
            setTimeout(() => {
              router.push("/login");
            }, 5000);
          },
        },
      );
    }
  }, [token, router, verifyEmail]);

  if (isPending) {
    return (
      <div className="flex flex-col items-center gap-2 text-center text-xl font-medium">
        <LuLoader className="size-8 animate-spin" />
        <div className="mt-4">Verifying your email address.</div>
        <div>Please wait...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center gap-2 text-center text-xl font-medium">
        <LuCircleAlert className="size-12 text-red-500" />
        <div className="mt-4">Email verification failed</div>
        <div>{error?.response?.data?.message}</div>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center gap-2 text-center text-xl font-medium">
        <LuCircleCheck className="size-12 text-green-500" />
        <div className="mt-4">Email verified successfully</div>
        <div>You will be redirected to the login page in 5 seconds.</div>
        <Button onClick={() => router.push("/login")}>Login</Button>
      </div>
    );
  }

  return <div />;
};

export default VerifyEmailForm;
