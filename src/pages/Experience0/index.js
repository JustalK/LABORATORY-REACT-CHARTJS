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

const data = {
  labels: ['Jan', 'Feb', 'March'],
  datasets: [
    {
      label: 'Sales',
      data: [86, 67, 91]
    }
  ]
}

config.data = data

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
