import { instance } from "../../../../../api/instance";
import { useQuery } from "@tanstack/react-query";

type Social = {
  id: number;
  name: string;
  link: string;
};

export const useGetSocials = () => {
  return useQuery<{ socials: Social[] }, Error>({
    queryKey: ["social"],
    queryFn: async () => {
      const response = await instance.get("/social");
      return response.data; 
    },
  });
};
