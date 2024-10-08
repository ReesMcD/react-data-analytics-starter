import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../services/PlaceholderService/PlaceholderService";

const key = ["posts"];

const useAllPostsQuery = () =>
  useQuery({
    queryKey: key,
    queryFn: getPosts,
    staleTime: Infinity,
  });

export default useAllPostsQuery;
