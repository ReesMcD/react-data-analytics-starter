import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import useAllPostsQuery from "../../queries/all-posts/useAllPostsQuery";
import AllPosts from "./AllPosts";

jest.mock("../../queries/all-posts/useAllPostsQuery");

describe("All Posts Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    const mockPosts = [
      { id: 1, title: "Post 1", body: "Body 1" },
      { id: 2, title: "Post 2", body: "Body 2" },
    ];

    (useAllPostsQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: false,
      data: mockPosts,
    });
  });

  it("should render the Posts component", () => {
    renderPosts();

    expect(screen.getByTestId("all-posts-component")).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "Post 1" })).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "Post 2" })).toBeInTheDocument();
    expect(useAllPostsQuery).toHaveBeenCalledTimes(1);
  });

  it("should render posts and call useAllPostsQuery", () => {
    renderPosts();

    expect(screen.getByRole("cell", { name: "Post 1" })).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "Post 2" })).toBeInTheDocument();
    expect(useAllPostsQuery).toHaveBeenCalledTimes(1);
  });

  const renderPosts = () => {
    return render(<AllPosts />);
  };
});
