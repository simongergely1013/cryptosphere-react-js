import React from "react";
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
      max: 100,
      grid: {
        display: false,
        drawBorder: false,
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
    },
  },
  tension: 0.5,
};

export const LineChart = ({ data }) => {
  return <Line options={options} data={data} />;
};
export const SmallLineChart = ({ data }) => {
  return <Line options={options2} data={data} />;
};
export const BigLineChart = ({ data }) => {
  return <Line options={options3} data={data} />;
};
