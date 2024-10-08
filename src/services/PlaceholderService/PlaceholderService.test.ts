import Post from "../../types/Post";
import { get } from "../../utils/client/get";
import { getPosts } from "./PlaceholderService";

jest.mock("../../utils/client/get");

describe("PlaceholderService", () => {
  describe("getPosts", () => {
    it("should fetch posts successfully", async () => {
      // Arrange
      const mockPosts: Post[] = [
        { id: 1, title: "Test Post 1", body: "This is test post 1", userId: 1 },
        { id: 2, title: "Test Post 2", body: "This is test post 2", userId: 1 },
      ];
      (get as jest.Mock).mockResolvedValue(mockPosts);

      // Act
      const result = await getPosts();

      // Assert
      expect(get).toHaveBeenCalledWith(
        "https://jsonplaceholder.typicode.com/posts"
      );
      expect(result).toEqual(mockPosts);
    });
  });
});
