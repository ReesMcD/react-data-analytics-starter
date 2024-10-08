import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RadarChart from "./RadarChart";

describe("RadarChart", () => {
  const mockSkillArray = [3, 4, 2, 5, 1];

  test("renders RadarChart component", () => {
    renderRadarChart(mockSkillArray);

    // Check if the component renders its title
    expect(screen.getByText("Radar Chart")).toBeInTheDocument();

    // Check if the component is present in the document
    const radarChartElement = screen.getByTestId("radar-chart");
    expect(radarChartElement).toBeInTheDocument();

    // You can add more specific tests here as you implement the chart
    // For example, checking if the SVG is rendered, if specific paths exist, etc.
  });

  const renderRadarChart = (skillArray: number[]) => {
    return render(<RadarChart skillArray={skillArray} />);
  };

  // Add more tests as needed for different scenarios or prop variations
});
