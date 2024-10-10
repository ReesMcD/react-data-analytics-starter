import { queryOptions, useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../services/PlaceholderService/PlaceholderService";
import Post from "../../types/Post";

const key = "posts";

export const getPostsQuery = () =>
  queryOptions<Post[], Error>({
    queryKey: [key],
    queryFn: getAllPosts,
    staleTime: Infinity,
  });

export const useAllPostsQuery = () => useQuery<Post[], Error>(getPostsQuery());
