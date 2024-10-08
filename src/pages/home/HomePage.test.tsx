import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import useAllPostsQuery from "../../queries/useAllPostsQuery/useAllPostsQuery";
import usePostQuery from "../../queries/usePostQuery/usePostQuery";
import HomePage from "./HomePage";

jest.mock("../../queries/useAllPostsQuery/useAllPostsQuery");
jest.mock("../../queries/usePostQuery/usePostQuery");

const mockPost = { id: 1, title: "Post 1", body: "Body 1" };

const mockPosts = [mockPost, { id: 2, title: "Post 2", body: "Body 2" }];

describe("HomePage Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useAllPostsQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: false,
      data: mockPosts,
    });

    (usePostQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: false,
      data: mockPost,
    });
  });

  it("should render the home page", async () => {
    renderHome();

    expect(screen.getByTestId("home-page-header")).toBeInTheDocument();
  });

  it("should render subcomponents", async () => {
    const { getByTestId } = renderHome();
    expect(getByTestId("all-posts-component")).toBeInTheDocument();
    expect(getByTestId("single-post")).toBeInTheDocument();
    // TODO: add more tests for subcomponents
  });

  const renderHome = () => {
    return render(<HomePage />);
  };
});
