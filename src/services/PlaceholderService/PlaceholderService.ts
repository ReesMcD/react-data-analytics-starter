import Post from "../../models/Post";
import { get } from "../../utils/client/get";

export class PlaceholderService {
  static async getPosts(): Promise<Post[]> {
    console.log("Fetching posts");
    try {
      return await get<Post[]>("https://jsonplaceholder.typicode.com/posts");
    } catch (error) {
      console.error("Error in PlaceholderService getPosts:", error);
      throw error;
    }
  }
}
