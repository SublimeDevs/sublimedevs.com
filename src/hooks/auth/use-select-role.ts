"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { api, getApiErrorMessage } from "@/lib/axios";
import type { UpdateRoleRequest, UpdateRoleResponse } from "@/types/user";

async function selectRole(
  body: UpdateRoleRequest
): Promise<UpdateRoleResponse> {
  const { data } = await api.patch<UpdateRoleResponse>("/users/me/role", body);
  return data;
}

const SUCCESS_MESSAGE = "Role saved";
const ERROR_MESSAGE = "Failed to save role";

export function useSelectRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: selectRole,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["session"] });
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success(data?.message ?? SUCCESS_MESSAGE);
    },
    onError: (error) => {
      toast.error(getApiErrorMessage(error, ERROR_MESSAGE));
    },
  });
}
