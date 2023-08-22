import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

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
      position: 'top',
    },
    title: {
      display: true,
      text: 'Entradas e saidas nos últimos meses',
    },
  },
};

export function BarChart() {

  const { mes, recebidos, despesas } = useContext(DataContext)

  const labels = mes.map(mes => mes)

  const data = {
    labels,
    datasets: [
      {
        label: 'Total Ganhos',
        data: recebidos.map(valor=>valor),
        backgroundColor: 'rgba(53, 162, 235, 1)',
      },
      {
          label: 'Total Despesas',
          data: despesas.map(valor=>valor),
          backgroundColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };


  return <Bar options={options} data={data} />;
}
