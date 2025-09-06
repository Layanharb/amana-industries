'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface MonthlyProductionChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
    }[];
  };
}

export default function MonthlyProductionChart({ data }: MonthlyProductionChartProps) {
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows the chart to take the full height of its container
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Aggregated Monthly Production (Tons)',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Production (tons)',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="relative h-96 w-full"> {/* Set a fixed height for the chart */}
      <Bar data={data} options={options} />
    </div>
  );
}