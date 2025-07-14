import { useMutation } from "@tanstack/react-query";
import { instance } from "../../../../../api/instance";
import { toast } from "react-toastify";

export const useUpdateSocials = () => {
  return useMutation({
    mutationKey: ["updateSocial"],
    mutationFn: (data: { id: number; name: string; link: string }) => {
      return instance.put(`/social/${data.id}`, data).then((response) => {
        return response.data;
      });
    },
    onSuccess: () => {
      toast.success("Social updated successfully");
    },
    onError: (error) => {
      toast.error(`Error updating social: ${error}`);
    },
  });
};