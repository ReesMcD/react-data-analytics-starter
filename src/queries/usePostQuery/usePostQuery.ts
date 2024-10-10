import { queryOptions, useQuery } from "@tanstack/react-query";
import { getPost } from "../../services/PlaceholderService/PlaceholderService";
import Post from "../../types/Post";

const key = "post";

export const getPostQuery = (id: number) =>
  queryOptions<Post, Error>({
    queryKey: [key, id],
    queryFn: () => getPost(id),
  });

export const usePostQuery = (id: number) =>
  useQuery<Post, Error>(getPostQuery(id));
