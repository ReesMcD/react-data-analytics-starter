import Post from "../../types/Post";
import { get } from "../../utils/client/get";
import {
  getAllPosts,
  getPost,
  PLACEHOLDER_API_URL,
} from "./PlaceholderService";

jest.mock("../../utils/client/get");

describe("PlaceholderService", () => {
  describe("getAllPosts", () => {
    it("should fetch posts successfully", async () => {
      const mockPosts: Post[] = [
        { id: 1, title: "Test Post 1", body: "This is test post 1", userId: 1 },
        { id: 2, title: "Test Post 2", body: "This is test post 2", userId: 1 },
      ];
      (get as jest.Mock).mockResolvedValue(mockPosts);

      const result = await getAllPosts();

      expect(get).toHaveBeenCalledWith(`${PLACEHOLDER_API_URL}/posts`);
      expect(result).toEqual(mockPosts);
    });
  });

  describe("getPost", () => {
    it("should fetch post successfully", async () => {
      const mockPost: Post = {
        id: 1,
        title: "Test Post 1",
        body: "This is test post 1",
        userId: 1,
      };
      (get as jest.Mock).mockResolvedValue(mockPost);

      const result = await getPost(1);

      expect(get).toHaveBeenCalledWith(`${PLACEHOLDER_API_URL}/posts/1`);
      expect(result).toEqual(mockPost);
    });
  });
});
