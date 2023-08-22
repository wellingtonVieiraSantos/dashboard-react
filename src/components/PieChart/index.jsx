import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Crédito', 'Débito'],
  datasets: [
    {
      label: 'R$',
      data: [1954.34, 1200],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)'

      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)'

      ],
      borderWidth: 2,
    },
  ],
};

export function PieChart() {
  return <Pie data={data} />;
}


