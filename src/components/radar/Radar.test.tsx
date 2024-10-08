import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Radar from "./Radar";

jest.mock("recharts");

describe("RadarChart", () => {
  test("renders RadarChart component", () => {
    renderRadarChart();

    const radarChartElement = screen.getByTestId("radar-chart");
    expect(radarChartElement).toBeInTheDocument();
  });

  const renderRadarChart = () => {
    return render(<Radar />);
  };
});
