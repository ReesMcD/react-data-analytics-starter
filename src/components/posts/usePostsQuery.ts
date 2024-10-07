import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../services/PlaceholderService/PlaceholderService";

const key = ["posts"];

const usePostsQuery = () =>
  useQuery({
    queryKey: key,
    queryFn: getPosts,
    staleTime: Infinity,
  });

export default usePostsQuery;
