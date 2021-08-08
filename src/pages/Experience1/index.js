/**
 * @module Experience
 */

import React from 'react'
import { Radar } from 'react-chartjs-2'

const data = {
  labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 9, 3, 5, 3, 4],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }
  ]
}

const options = {
  scale: {
    ticks: { beginAtZero: true }
  },
  maintainAspectRatio: false
}

/**
 * @function Experience
 * @return {Object} Return the dom of the Home page
 */
const Experience = () => {
  return <Radar data={data} width={500} height={500} options={options} />
}

export default Experience
