/**
 * @module Experience
 */

import React, { useEffect, useLayoutEffect, useRef } from 'react'

const Chart = require('chart.js/dist/chart')

const config = {
  type: 'bar',
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
}

const dataField = {
  datasets: [
    {
      label: 'Sales',
      parsing: {
        xAxisKey: 'month',
        yAxisKey: 'price'
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
  const dataRef = useRef([
    { month: 'Jan', price: 86 },
    { month: 'Feb', price: 67 },
    { month: 'March', price: 91 }
  ])

  useLayoutEffect(() => {
    chartRef.current?.destroy()
  })

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d')
    config.data.datasets[0].data = dataRef.current
    chartRef.current = new Chart(ctx, { ...config })
  })

  const handleNewData = () => {
    dataRef.current.push({
      month: `Column${dataRef.current.length}`,
      price: Math.floor(Math.random() * 100)
    })
    chartRef.current.update()
  }

  return (
    <div className="canvas">
      <button onClick={handleNewData}>Add data</button>
      <canvas id="chart" ref={canvasRef} />
    </div>
  )
}

export default Experience
