import Post from "../../types/Post";
import { get } from "../../utils/client/get";

export const PLACEHOLDER_API_URL = "https://jsonplaceholder.typicode.com";

export async function getAllPosts(): Promise<Post[]> {
  console.log("Fetching all posts");
  try {
    return await get<Post[]>(`${PLACEHOLDER_API_URL}/posts`);
  } catch (error) {
    console.error("Error in PlaceholderService getAllPosts:", error);
    throw error;
  }
}

export async function getPost(id: number): Promise<Post> {
  console.log("Fetching all posts");
  try {
    return await get<Post>(`${PLACEHOLDER_API_URL}/posts/${id}`);
  } catch (error) {
    console.error("Error in PlaceholderService getPost:", error);
    throw error;
  }
}
