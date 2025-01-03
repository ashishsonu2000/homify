import React from 'react'
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings, PiggyBank, Banknote, Wallet, HandCoins, BookCheck } from "lucide-react";

function DasboardViewCard({icon,title,unit,detail_tile,detail_value,detail_tile_1,detail_value_1}) {
  return (
    <div>

<div class="p-2 w-45 h-40 bg-white rounded-xl shadow-lg flex flex-col items-center space-x-4 ">

<div class="p-6 w-35 bg-gradient-to-tr from-violet-500 to-pink-500 bg-gray-700 rounded-xl shadow-lg flex items-center space-x-4 border border-black">
    <div class="flex-shrink-0 " >
        {icon}
    </div>
    <div>
        <div class="flex text-sm text-slate-200 mb-2 font-bold">{title}</div>
        <div class="flex  flex-row">
            <p class="text-black-100 text-sm font-semibold font-serif">{detail_tile}</p>
            <p class="text-black-100 text-sm ml-1 font-semibold font-serif">{detail_value}</p>
            <p class="text-black-100 text-sm ml-1 font-semibold font-serif">{unit}</p>
        </div>
        <div class="flex flex-row">
            <p class="text-black-100 text-sm font-semibold font-serif">{detail_tile_1}</p>
            <p class="ml-1 text-black-100 text-sm font-semibold font-serif">{detail_value_1}</p>
            <p class="text-black-100 text-sm ml-1 font-semibold font-serif">{unit}</p>
        </div>

    </div>
</div>
<div class="shrink-0 p-2">
    <button type="button" class="py-1 px-3 me-1 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">View</button>
</div>
</div>



    </div>
  )
}

export default DasboardViewCard