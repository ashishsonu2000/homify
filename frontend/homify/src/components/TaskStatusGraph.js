import React from 'react'
import Chart from 'react-apexcharts'

function TaskStatusGraph({width,height,type}) {
  
    
      
      return (
        <div className='flex w-45'>
          <Chart type={type} options={{chart: {
                type: 'bar',
                height: 350
              },plotOptions: {
                bar: {
                  borderRadius: 4,
                  borderRadiusApplication: 'end',
                  horizontal: true,
                }
              },dataLabels: {
                enabled: false
              },xaxis: {
                categories: ['New Task', 'Open task', 'Closed Task'
                ],
              }}} series={[
            { data: [10, 5, 20]}
                ]} width={width} height={height}> </Chart>
        </div>
  )
}

export default TaskStatusGraph