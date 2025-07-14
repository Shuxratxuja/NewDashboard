import { useMutation } from "@tanstack/react-query";
import { instance } from "../../../../../api/instance";
import { toast } from "react-toastify";

export const useDleteSocials = () => {
  return useMutation({
    mutationKey: ["deleteSocial"],
    mutationFn: (id: number) => {
      return instance.delete(`/social/${id}`).then((response) => {
        return response.data;
      });
    },
    onSuccess: () => {
      toast.success("Social deleted successfully");
    },
    onError: (error) => {
      toast.error(`Error deleting social: ${error}`);
    },
  });
}