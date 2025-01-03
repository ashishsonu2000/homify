import React from 'react'
import TopNavbar from './TopNavbar'
import SideNavbar, { SidebarItem } from './SideNavbar'
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings, PiggyBank, Banknote, Wallet, HandCoins, BookCheck,IndianRupee } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import DasboardViewCard from './DasboardViewCard';

import DashboardChart from './DashboardChart';


function Dashboard() {
    return (

        
        <div className='h-full flex flex-row'>
            <div className='w-full flex flex-col items-center'>
                <div className='ml-16 mt-5 w-full text-start text-3xl font-serif font-bold'>
                    <p> Admin Dashboard</p>
                </div>
                <div className='mt-3 ml-2 mr-14 flex flex-col md:flex-row gap-4 place-items-center'>
                    <DasboardViewCard icon={<HandCoins size={70} />} unit={<IndianRupee size={17} />} title="Society Maintenance" detail_tile="Collected:" detail_value="20" detail_tile_1="Pending:"detail_value_1="10"></DasboardViewCard>
                    <DasboardViewCard icon={<Wallet size={70} />} unit={<IndianRupee size={17} />} title="Expense Tracker" detail_tile="May:" detail_value="20" detail_tile_1="June:"detail_value_1="10"></DasboardViewCard>
                    <DasboardViewCard icon={<PiggyBank size={70} />} unit={<IndianRupee size={17} />} title="Bank Balance" detail_tile="Current Total:" detail_value="20" ></DasboardViewCard>
                    <DasboardViewCard icon={<BookCheck size={70} />} title="Open Tickets" detail_tile="New:" detail_value="20" detail_tile_1="Old:"detail_value_1="10"></DasboardViewCard>
                </div>
                <div className='w-full mt-8 flex  border-b-2 border-current border-yellow-950'/>
                <div className='w-11/12 gap-4 mt-3 ml-24 mr-40 flex flex-col border-0 border-black place-items-center'>
                    <div className='bg-gradient-to-tr from-slate-600 to-neutral-400 p-2 w-full mr-20 ml-24 mt-4 flex flex-row border-black bg-slate-800'>
                    <p class="text-black-100 text-lg font-semibold font-serif text-white">Society Finance Details</p>
                    </div>
                    <div className='p-4 w-full mr-20 ml-24 flex flex-row border-black'>
                    
                        <div className='w-full mr-10 ml-5 flex flex-row'>
                        <p class="text-black-100 text-lg font-semibold font-serif text-black">Expenses</p>
                        <p class="text-black-100 text-lg font-semibold font-serif text-black">20000</p>
                        </div>

                        <div className='w-full mr-10 ml-24 flex flex-row'>
                        <DashboardChart/>
                        </div>
                    </div>
                </div>    
                
            </div>
            
        </div>
        
        
        
    )
}

export default Dashboard