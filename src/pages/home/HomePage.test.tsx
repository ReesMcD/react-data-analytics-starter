import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import useAllPostsQuery from "../../queries/all-posts/useAllPostsQuery";
import HomePage from "./HomePage";

jest.mock("../../queries/all-posts/useAllPostsQuery");

describe("HomePage Component", () => {
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

  test("should render the home page title", async () => {
    renderHome();

    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  test("should render subcomponents", async () => {
    const { getByText } = renderHome();
    expect(getByText(/All Posts/i)).toBeInTheDocument();
    // TODO: add more tests for subcomponents
  });

  const renderHome = () => {
    return render(<HomePage />);
  };
});
