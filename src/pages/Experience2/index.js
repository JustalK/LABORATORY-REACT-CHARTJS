/**
 * @module Experience
 */

import React, { useEffect, useRef } from 'react'

const Chart = require('chart.js/dist/chart')

/**
 * @function Experience
 * @return {Object} Return the dom
 */
const Experience = () => {
  const chartRef = useRef()

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d')
    // eslint-disable-next-line
    new Chart(ctx, {
      type: 'line',
      data: {
        // Bring in data
        labels: ['Jan', 'Feb', 'March'],
        datasets: [
          {
            label: 'Sales',
            data: [86, 67, 91]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    })
  })

  return (
    <div className="canvas">
      <canvas id="chart" ref={chartRef} />
    </div>
  )
}

export default Experience
