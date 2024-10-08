import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import usePostsQuery from "../../queries/posts/usePostsQuery";
import Posts from "./Posts";

jest.mock("../../queries/posts/usePostsQuery");

describe("Posts Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    const mockPosts = [
      { id: 1, title: "Post 1", body: "Body 1" },
      { id: 2, title: "Post 2", body: "Body 2" },
    ];

    (usePostsQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: false,
      data: mockPosts,
    });
  });

  test("should render the Posts component", () => {
    renderPosts();

    expect(screen.getByText("Posts")).toBeInTheDocument();
    expect(screen.getByText("Post 1")).toBeInTheDocument();
    expect(screen.getByText("Post 2")).toBeInTheDocument();
  });

  const renderPosts = () => {
    return render(<Posts />);
  };
});
