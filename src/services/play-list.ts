import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import axios from "../axios_config";

export const useGetPlaylist = (search?: string): UseQueryResult<any> => {
  return useQuery({
    queryKey: ["get-playlist", search],
    queryFn: async () => {
      const res = await axios.get("playlist", {
        params: {
          search: search,
        },
      });

      return res.data;
    },
  });
};

export const useCreatePlaylist = (): UseMutationResult<any> => {
  return useMutation({
    mutationKey: ["create-playlist"],
    mutationFn: async (data) => {
      const res = await axios.post("playlist", data);

      return res.data;
    },
  });
};
