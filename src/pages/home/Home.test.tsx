import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import usePostsQuery from "../../components/posts/usePostsQuery";
import renderWithQueryClient from "../../utils/test/renderWithQueryClient";
import Home from "./Home";

jest.mock("../../components/posts/usePostsQuery");
jest.mock("../../services/PlaceholderService/PlaceholderService");

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
  });

  const renderHome = () => {
    return renderWithQueryClient(<Home />);
  };
});
