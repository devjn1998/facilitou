"use client";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface SaleData {
  date: string;
  amount: number;
}

interface GraphProps {
  registrationDate: string;
  salesData: SaleData[];
}

const Graph = ({ registrationDate, salesData }: GraphProps) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Vendas desde o cadastro",
        color: "#1e40af", // Azul escuro para combinar com o header
      },
    },
  };

  const data = {
    labels: salesData.map((item) => item.date),
    datasets: [
      {
        label: "Vendas (R$)",
        data: salesData.map((item) => item.amount),
        borderColor: "#0284c7", // Sky-600 do header
        backgroundColor: "rgba(2, 132, 199, 0.2)", // Sky-600 com transparência
        tension: 0.4,
        borderWidth: 3,
        pointBackgroundColor: "#1e40af", // Azul escuro para os pontos
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#1e40af",
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  return (
    <div className="w-full h-[400px] bg-gradient-to-br from-white to-sky-50 p-4 rounded-lg shadow-md border border-gray-200">
      <Line options={options} data={data} />
    </div>
  );
};

export default Graph;
