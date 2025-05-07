import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { RegisterSchema } from "@/lib/validations/auth-validations";

export const useRegister = () =>
  useMutation<unknown, AxiosError<{ message: string }>, RegisterSchema>({
    mutationFn: (data: RegisterSchema) =>
      axios.post("/api/auth/register", data),
  });
