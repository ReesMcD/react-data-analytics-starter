import { QueryClient } from "@tanstack/react-query";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Charts from "./Charts";

jest.mock("../../queries/posts/usePostsQuery");

const queryClient = new QueryClient();

describe("Charts Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    queryClient.clear();
  });

  test("should render the Charts page title and welcome message", async () => {
    renderCharts();

    expect(screen.getByText("Charts")).toBeInTheDocument();
    expect(screen.getByText("Charts page")).toBeInTheDocument();
  });

  const renderCharts = () => {
    return render(<Charts />);
  };
});
