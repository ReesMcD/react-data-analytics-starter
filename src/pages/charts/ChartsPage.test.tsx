import { QueryClient } from "@tanstack/react-query";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ChartsPage from "./ChartsPage";

jest.mock("../../queries/useAllPostsQuery/useAllPostsQuery");
jest.mock("recharts");

const queryClient = new QueryClient();

describe("Charts Page Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    queryClient.clear();
  });

  it("should render the Charts page", async () => {
    renderCharts();

    expect(screen.getByTestId("charts-page")).toBeInTheDocument();
  });

  const renderCharts = () => {
    return render(<ChartsPage />);
  };
});
