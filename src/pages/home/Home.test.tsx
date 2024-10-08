import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import usePostsQuery from "../../queries/posts/usePostsQuery";
import Home from "./Home";

jest.mock("../../queries/posts/usePostsQuery");

describe("Home Component", () => {
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

  test("should render the home page title and welcome message", async () => {
    renderHome();

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Welcome to the Home page!")).toBeInTheDocument();
    expect(screen.getByText("Posts")).toBeInTheDocument();
    expect(screen.getByText("Post 1")).toBeInTheDocument();
    expect(screen.getByText("Post 2")).toBeInTheDocument();
  });

  const renderHome = () => {
    return render(<Home />);
  };
});
