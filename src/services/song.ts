import { UseQueryResult, useQuery } from "@tanstack/react-query";
import axios from "../axios_config";

export const useGetSong = (search?: string): UseQueryResult<any> => {
  return useQuery({
    queryKey: ["get-song", search],
    queryFn: async () => {
      const res = await axios.get("song", {
        params: {
          search: search,
        },
      });

      return res.data;
    },
  });
};
