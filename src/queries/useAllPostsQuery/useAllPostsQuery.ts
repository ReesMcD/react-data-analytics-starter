import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../services/PlaceholderService/PlaceholderService";
import Post from "../../types/Post";

const key = "posts";

const useAllPostsQuery = () =>
  useQuery<Post[], Error>({
    queryKey: [key],
    queryFn: getAllPosts,
    staleTime: Infinity,
  });

export default useAllPostsQuery;
