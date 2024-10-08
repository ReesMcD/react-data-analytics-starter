import React from "react";

interface RadarChartProps {
  // Add any props you need here
  skillArray: number[];
}

function RadarChart(props: RadarChartProps): React.ReactElement {
  console.log(props);

  return (
    <div className="radar-chart" data-testid="radar-chart">
      <h2>Radar Chart</h2>
      {/* Add your radar chart implementation here */}
    </div>
  );
}

export default RadarChart;
