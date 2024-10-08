import { QueryClient } from "@tanstack/react-query";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ChartsPage from "./ChartsPage";

jest.mock("../../queries/all-posts/useAllPostsQuery");

const queryClient = new QueryClient();

describe("Charts Page Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    queryClient.clear();
  });

  test("should render the Charts page title and welcome message", async () => {
    renderCharts();

    expect(screen.getByText("Charts")).toBeInTheDocument();
  });

  const renderCharts = () => {
    return render(<ChartsPage />);
  };
});
