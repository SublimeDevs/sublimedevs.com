import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { VerifyEmailSchema } from "@/lib/validations/auth-validations";

export const useVerifyEmail = () =>
  useMutation<
    AxiosResponse<{ message: string }>,
    AxiosError<{ message: string }>,
    VerifyEmailSchema
  >({
    mutationFn: (data: VerifyEmailSchema) =>
      axios.post("/api/auth/verify-email", data),
    retry: 0,
  });
