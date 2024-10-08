import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SinglePost from "./SinglePost";

describe("SinglePost Component", () => {
  const mockPost = {
    id: 1,
    title: "Test Post",
    body: "This is a test post body",
  };

  test("renders post title and body", () => {
    render(<SinglePost id={mockPost.id} />);

    expect(screen.getByText(mockPost.title)).toBeInTheDocument();
    expect(screen.getByText(mockPost.body)).toBeInTheDocument();
  });
});
