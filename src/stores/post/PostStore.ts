import Post from "../../models/Post";

type PostStore = {
  posts: Post[];
  loading: boolean;
  fetchPosts: () => void;
};

export default PostStore;
