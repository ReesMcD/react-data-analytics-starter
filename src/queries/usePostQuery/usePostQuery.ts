import { useQuery } from "@tanstack/react-query";
import { getPost } from "../../services/PlaceholderService/PlaceholderService";

const key = "post";

const usePostQuery = (id: number) =>
  useQuery({
    queryKey: [key, id],
    queryFn: () => getPost(id),
  });

export default usePostQuery;
