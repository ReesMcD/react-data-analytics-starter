import { create } from "zustand";
import PostStore from "./PostStore";
import postStoreCreator from "./postStoreCreator";

const usePostStore = create<PostStore>(postStoreCreator);

export default usePostStore;
