import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../services/PlaceholderService/PlaceholderService";

const key = "posts";

const useAllPostsQuery = () =>
  useQuery({
    queryKey: [key],
    queryFn: getAllPosts,
    staleTime: Infinity,
  });

export default useAllPostsQuery;
