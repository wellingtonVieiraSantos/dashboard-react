import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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
        text: 'Dinheiro Investido',
      },
  },
};

export function LineChart() {

  const { mes, investido } = useContext(DataContext) 

  const labels = mes.map(mes=>mes)

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'em R$ ',
      data: investido.map(valor=>valor),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

  return <Line options={options} data={data} />;
}
