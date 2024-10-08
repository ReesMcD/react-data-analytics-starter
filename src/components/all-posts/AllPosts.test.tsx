import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import useAllPostsQuery from "../../queries/all-posts/useAllPostsQuery";
import AllPosts from "./AllPosts";

jest.mock("../../queries/all-posts/useAllPostsQuery");

describe("Posts Component", () => {
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

  test("should render the Posts component", () => {
    renderPosts();

    expect(screen.getByText("All Posts")).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "Post 1" })).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "Post 2" })).toBeInTheDocument();
  });

  const renderPosts = () => {
    return render(<AllPosts />);
  };
});
