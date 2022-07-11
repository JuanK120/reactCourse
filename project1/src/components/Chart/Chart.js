import react from "react";
import ChartBar from "./CharBar";

import "./Chart.css";

const Chart = (args) => {
  const dataPointsValues = args.dataPoints.map((dataPoint) => dataPoint.value);
  const TotalMaximum = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {args.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={TotalMaximum}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
