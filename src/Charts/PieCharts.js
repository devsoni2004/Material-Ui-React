import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  title: "Daily User Activities",
};

export default function PieCharts() {
  return (
    <div>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
      />
    </div>
  );
}
