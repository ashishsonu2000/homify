import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'

function DashboardChart({width,height,type}) {

  const [chartData , setChartData] = useState()

  useEffect(()=>{
    setChartData(
      {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [
          {
            name: "Company1",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
            color:'#0d25d6'
          },
          {
            name: "Company2",
            data: [31, 41, 45, 51, 49, 60, 70, 91],
            color:'#0d25d6'
          }
        ]
      }) } ,[]);
  
  return (
    <div className='flex w-11/12'>
      <Chart type={type} options={{colors:'ff000'}} series={[
        { name: "Expense",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
          color:'#0d25d6'
          },
          { name: "Company2",
            data: [31, 42, 48, 50, 49, 60, 70, 91],
            color:'#dd0'
            },
            ]} width={width} height={height}> </Chart>
    </div>
  )
}

export default DashboardChart