import React from "react";
import { LoadingSpinner } from "../LoadingSpinner";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ChartContainer, TopChartDiv } from "./BarChart.styles";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    y: {
      display: false,
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    x: {
      display: true,
      min: 1,
      max: 365,
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        maxRotation: 0,
      },
    },
  },
  tension: 0.5,
};

export const BarChart = ({ data, isLoading, isError }) => {
  return (
    <ChartContainer>
      <TopChartDiv>
        {isLoading || isError ? (
          <LoadingSpinner />
        ) : (
          <Bar data={data} options={options} />
        )}
      </TopChartDiv>
    </ChartContainer>
  );
};
