/**
 * @module Experience
 */

import React, { useEffect, useLayoutEffect, useRef } from 'react'

const Chart = require('chart.js/dist/chart')

const config = {
  type: 'line',
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
}

const data = [
  { month: 'Jan', price: 86, secondary: 26 },
  { month: 'Feb', price: 67, secondary: 56 },
  { month: 'March', price: 91, secondary: 103 }
]

const dataField = {
  labels: ['Jan', 'Feb', 'March'],
  datasets: [
    {
      label: 'Sales',
      data,
      parsing: {
        xAxisKey: 'month',
        yAxisKey: 'price'
      }
    },
    {
      label: 'Secondary',
      data,
      parsing: {
        xAxisKey: 'month',
        yAxisKey: 'secondary'
      },
      hidden: true
    },
    {
      label: 'Third',
      data,
      parsing: {
        xAxisKey: 'month',
        yAxisKey: 'secondary'
      }
    }
  ]
}

config.data = dataField

/**
 * @function Experience
 * @return {Object} Return the dom
 */
const Experience = () => {
  const canvasRef = useRef()
  const chartRef = useRef()

  useLayoutEffect(() => {
    chartRef.current?.destroy()
  })

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d')
    chartRef.current = new Chart(ctx, { ...config })
  })

  return (
    <div className="canvas">
      <canvas id="chart" ref={canvasRef} />
    </div>
  )
}

export default Experience
