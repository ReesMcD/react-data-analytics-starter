import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import usePostQuery from "../../queries/usePostQuery/usePostQuery";
import SinglePost from "./SinglePost";

jest.mock("../../queries/usePostQuery/usePostQuery");

const mockPost = {
  id: 1,
  title: "Test Post",
  body: "This is a test post body",
};

describe("SinglePost Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (usePostQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: false,
      data: mockPost,
    });
  });

  it("should render the SinglePost component", () => {
    render(<SinglePost id={mockPost.id} />);

    expect(screen.getByTestId("single-post")).toBeInTheDocument();
  });
  it("should render post title and body", () => {
    render(<SinglePost id={mockPost.id} />);

    expect(screen.getByText(mockPost.title)).toBeInTheDocument();
    expect(screen.getByText(mockPost.body)).toBeInTheDocument();
  });
});
