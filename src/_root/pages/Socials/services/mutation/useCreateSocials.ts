import { useMutation } from "@tanstack/react-query";
import { instance } from "../../../../../api/instance";
import { toast } from "react-toastify";

export const useCreateSocials = () => {
  return useMutation({
    mutationKey: ["createSocial"],
    mutationFn:  (data: { name: string; link: string }) => {
      return instance.post("/social", data).then((response) => {
         response.data;
      })
    },
    onSuccess: () => {
      toast.success("Social created successfully");
    },
    onError: (error) => {
      toast.error(`Error creating social: ${error}`);
    },
  });
};