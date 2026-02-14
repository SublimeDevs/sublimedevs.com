import axios from "axios";

import { env } from "@/env";

export const api = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ?? error.message ?? "Something went wrong";
    error.userMessage = message;
    return Promise.reject(error);
  }
);

export function getApiErrorMessage(error: unknown, fallback: string): string {
  if (error && typeof error === "object" && "userMessage" in error) {
    return (error as { userMessage: string }).userMessage;
  }
  if (error instanceof Error) return error.message;
  return fallback;
}
