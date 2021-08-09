/**
 * @module Experience
 */

import React, { useEffect, useRef, useLayoutEffect } from 'react'

const Chart = require('chart.js/dist/chart')

const config = {
  type: 'bar',
  options: {
    responsive: true
  }
}

const data = {
  datasets: [
    {
      label: 'Dataset 1',
      data: {
        'Test 2': 2,
        'Test 3': 4,
        'Test 4': 5,
        'Test 5': 6,
        'Test 6': 7,
        'Test 7': 8,
        'Test 8': 9
      },
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

/**
 * @function Experience
 * This way of using data does not work with Radar
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
    chartRef.current = new Chart(ctx, {
      ...config
    })
  })

  return (
    <div className="canvas">
      <canvas id="chart" ref={canvasRef} />
    </div>
  )
}

export default Experience
