import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import useAllPostsQuery from "../../queries/useAllPostsQuery/useAllPostsQuery";
import AllPosts from "./AllPosts";

jest.mock("../../queries/useAllPostsQuery/useAllPostsQuery");

const mockPosts = [
  { id: 1, title: "Post 1", body: "Body 1" },
  { id: 2, title: "Post 2", body: "Body 2" },
];

describe("All Posts Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useAllPostsQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: false,
      data: mockPosts,
    });
  });

  it("should render the Posts component", () => {
    renderPosts();
    expect(screen.getByTestId("all-posts-component")).toBeInTheDocument();
  });

  it("should render posts and call useAllPostsQuery", () => {
    renderPosts();

    expect(
      screen.getByRole("cell", { name: mockPosts[0].title })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("cell", { name: mockPosts[1].title })
    ).toBeInTheDocument();
    expect(useAllPostsQuery).toHaveBeenCalledTimes(1);
  });

  const renderPosts = () => {
    return render(<AllPosts />);
  };
});
