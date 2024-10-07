import { screen } from "@testing-library/react";
import renderWithQueryClient from "../../utils/test/renderWithQueryClient";
import Posts from "./Posts";
import usePostsQuery from "./usePostsQuery";

jest.mock("./usePostsQuery");
jest.mock("../../services/PlaceholderService/PlaceholderService");

describe("Posts component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders posts correctly using React Query", async () => {
    const mockPosts = [
      { id: 1, title: "Post 1", body: "Body 1" },
      { id: 2, title: "Post 2", body: "Body 2" },
    ];

    (usePostsQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: false,
      data: mockPosts,
    });

    renderWithQueryClient(<Posts />);

    expect(screen.getByText("Posts")).toBeInTheDocument();
    expect(screen.getByText("Post 1")).toBeInTheDocument();
    expect(screen.getByText("Post 2")).toBeInTheDocument();
  });
});
