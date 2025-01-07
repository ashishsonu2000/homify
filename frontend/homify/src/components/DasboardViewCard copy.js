import React from 'react'
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings, PiggyBank, Banknote, Wallet, HandCoins, BookCheck,ChevronRight } from "lucide-react";
import MaintenanceDueTable from './MaintenanceDueTable';

function DasboardViewCard({ icon, title, unit, detail_tile, detail_value, detail_tile_1, detail_value_1,width }) {
    return (
        <div>

            <div class="p-0 w-44 border-opacity-70 bg-transparent rounded-md shadow-2xl flex flex-col items-center  ">

                <div class="w-80 h-52 p-2 relative -ml-5 rounded-s-full shadow-xl bg-white flex items-center border-0  border-black">
                    <div class="flex-shrink-0  border-r-2 mr-2" >
                        {icon}
                    </div>
                    <div>
                        <div className="flex text-xl  ml-2 -mt-10 font-bold text-black-100 mb-2 font-serif">{title}</div>
                        <div class="flex  flex-row ml-2">
                            <MaintenanceDueTable></MaintenanceDueTable>
                        </div>
                        <div class="flex flex-row ml-2">
                            <p class="text-black-100 text-sm font-serif">{detail_tile_1}</p>
                            <p class="ml-1 text-black-100 text-sm font-serif">{detail_value_1}</p>
                            <p class="text-black-100 text-sm ml-1 font-serif">{unit}</p>
                        </div>

                    </div>
                </div>
                <div class=" hidden shrink-0 p-0">
                    <button type="button" class="py-1 px-3 me-1 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">View</button>
                </div>
            </div>



        </div>
    )
}

export default DasboardViewCard