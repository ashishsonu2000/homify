import React from 'react'

function MaintenanceDueTable() {
  return (
    <div>
        <div
  class="relative flex flex-col w-full h-56 overflow-auto text-slate-300 bg-slate-800 shadow-md rounded-lg bg-clip-border">
   <p className='text-center font-serif font-bold mt-2'>Maintenance DUE</p> 
  <table class="w-20 text-left table-auto min-w-max">
    <thead>
      <tr><th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            
          </p>
        </th>
        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            Current Month
          </p>
        </th>
        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            Year-2025
          </p>
        </th>
        
      </tr>
    </thead>
    <tbody>
      <tr class="even:bg-blue-gray-50/50">
        <td class="p-4">
          <p class="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
            Collected
          </p>
        </td>
        <td class="p-4">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            10
          </p>
        </td>
        <td class="p-4">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
           20
          </p>
        </td>
        
      </tr>
      <tr class="even:bg-blue-gray-50/50">
        <td class="p-4">
          <p class="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
            Pending
          </p>
        </td>
        <td class="p-4">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            100
          </p>
        </td>
        <td class="p-4">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            200
          </p>
        </td>
        
      </tr>
      
    </tbody>
  </table>
</div>

    </div>
  )
}

export default MaintenanceDueTable