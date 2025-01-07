import React from 'react'
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings, PiggyBank, Banknote, Wallet, HandCoins, BookCheck,ChevronRight,Mail } from "lucide-react";


function ActionCard({title,sub_title,icon}) {
  return (
      <div>
        <div class="p-2 w-52 ml-1 rounded-xl shadow-lg flex flex-row items-center bg-gradient-to-tr from-violet-500 to-white">
        <div class="flex-shrink-0 items-center ml-4" >
                        {icon}
                    </div>
          <div class="p-2 ml-1 rounded-xl flex flex-col">
              <p className='ml-2 text-center font-serif font-bold'>{title}</p> 
              <p className='ml-5 text-nowrap'>{sub_title}</p>             
          </div>
          <div class="flex-shrink-0 items-center ml-4" >
                        {<ChevronRight size={20} />} 
                    </div>
         </div> 
      </div>
  )
}

export default ActionCard