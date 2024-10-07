import { type StateCreator } from "zustand";
import { PlaceholderService } from "../../services/PlaceholderService/PlaceholderService";
import PostStore from "./PostStore";

const initialState: PostStore = {
  posts: [],
  loading: false,
  fetchPosts: async () => {},
};

const postStoreCreator: StateCreator<PostStore> = (set) => ({
  ...initialState,
  fetchPosts: async () => {
    try {
      set({ ...initialState, loading: true });
      const posts = await PlaceholderService.getPosts();
      set({ ...initialState, posts, loading: false });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  },
});

export default postStoreCreator;
