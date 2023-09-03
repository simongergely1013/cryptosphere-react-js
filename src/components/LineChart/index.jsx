import React from "react";
import { BtcChartLoader } from "../BtcChartLoader";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import {
  SmallChartWrapper,
  ChartContainer,
  TopChartDiv,
  BigChartWrapper,
} from "./LineChart.styles";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
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
      min: 6,
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

const options2 = {
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
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },
  tension: 0.5,
};

const options3 = {
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

export const LineChart = ({ data, isLoading }) => {
  return (
    <>
      <ChartContainer>
        <TopChartDiv>
          <Line options={options} data={data} />
        </TopChartDiv>
      </ChartContainer>
    </>
  );
};
export const SmallLineChart = ({ data }) => {
  return (
    <SmallChartWrapper>
      <Line options={options2} data={data} />
    </SmallChartWrapper>
  );
};
export const BigLineChart = ({ data }) => {
  return (
    <BigChartWrapper>
      <Line options={options3} data={data} />
    </BigChartWrapper>
  );
};
