import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import renderWithQueryClient from "../../utils/test/renderWithQueryClient";
import Charts from "./Charts";

jest.mock("../../components/posts/usePostsQuery");

describe("Charts Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should render the Charts page title and welcome message", async () => {
    renderCharts();

    expect(screen.getByText("Charts")).toBeInTheDocument();
    expect(screen.getByText("Charts page")).toBeInTheDocument();
  });

  const renderCharts = () => {
    return renderWithQueryClient(<Charts />);
  };
});
