/**
 * @module Experience
 */

import React, { useEffect, useRef } from 'react'

const Chart = require('chart.js/dist/chart')

const config = {
  type: 'radar',
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Radar Chart'
      }
    }
  }
}

/**
 * @function Experience
 * @return {Object} Return the dom
 */
const Experience = () => {
  const chartRef = useRef()

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d')
    const labels = [
      'Test 2',
      'Test 3',
      'Test 4',
      'Test 5',
      'Test 6',
      'Test 7',
      'Test 8'
    ]
    const data = {
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: [2, 4, 5, 6, 7, 8, 9],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }
      ]
    }
    config.data = data
    // eslint-disable-next-line
    new Chart(ctx, {
      ...config
    })
  })

  return (
    <div className="canvas">
      <canvas id="chart" ref={chartRef} />
    </div>
  )
}

export default Experience
