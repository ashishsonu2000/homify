import React from 'react'
import TopNavbar from './TopNavbar'
import SideNavbar, { SidebarItem } from './SideNavbar'
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings, PiggyBank, Banknote, Wallet, HandCoins, BookCheck, IndianRupee, Mail } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import DasboardViewCard from './DasboardViewCard';

import DashboardChart from './DashboardChart';
import ActionCard from './ActionCard';
import DashboardTaskCard from '../assets/DashboardTaskCard';
import MaintenanceDueTable from './MaintenanceDueTable';
import FinanceSummaryTable from './FinanceSummaryTable';


function Dashboard() {
    return (
        <div className='h-screen flex flex-row'>
            <div className='w-full flex flex-col items-center '>
                <div className='ml-16 mt-5 w-full text-start text-3xl font-serif font-bold'>
                    <p> Admin Dashboard</p>
                </div>
                <div className='w-11/12 mt-8 ml-10 mr-10 flex flex-col md:flex-row gap-x-10 place-items-center  '>
                    <ActionCard title="" sub_title="Send Email" icon={<Mail size={20} />} />
                    <ActionCard title="" sub_title="Send SMS" icon={<Mail size={20} />} />
                    <ActionCard title="" sub_title="Send SMS" icon={<Mail size={20} />} />
                    <ActionCard title="" sub_title="Send SMS" icon={<Mail size={20} />} />
                </div>
                <div className='w-full mt-10 flex shadow-lg border-b-slate-600 border-l-2' />
                <div className='w-11/12 mt-1 mr-10 ml-0 flex flex-col md:flex-row gap-x-16 place-items-center'>
                <div className='w-11/12 mt-1 mr-5 ml-5 flex flex-col md:flex-row gap-x-16 place-items-center'>
                    <MaintenanceDueTable></MaintenanceDueTable>
                    <MaintenanceDueTable></MaintenanceDueTable>
                </div>
                <div className='w-11/12 mt-1 mr-5 ml-5 flex flex-col md:flex-row gap-x-16 place-items-center'>
                    <div className='w-11/12 mt-1 mr-10 -ml-5  flex flex-col md:flex-row'>
                        <DashboardTaskCard icon={<Wallet size={40} />} unit={<IndianRupee size={10} />} title="Open Issues" detail_tile="May:" detail_value="20" detail_tile_1="June:" detail_value_1="10"></DashboardTaskCard>
                    </div>
                </div>
                </div>
                <div className='w-11/12 mt-3 flex flex-row border-b-1 shadow-blue-900 border-current border-yellow-950' />
                <div className='w-11/12 gap-4 mt-3 ml-24 mr-40 flex flex-col border-1 border-black place-items-center'></div>
                
                <div className='w-11/12 mt-3 ml-24 mr-40 flex flex-row border-1 border-black place-items-center'>
                
                <div className='gap-4 mt-3 ml-4 mr-36 flex flex-col border-0 border-black items-stretch'>
                    <div className='hidden mr-20 ml-14 mt-4 flex-row bg-slate-200'>
                        <p class="text-black-100 text-center text-sm font-semibold font-serif text-black">Society Finance Details</p>
                    </div>
                    <div className='p-1 w-10/12 mr-0 ml-10 flex flex-row border-0 border-black gap-0'>

                        <div className='-ml-8 mr-0 w-8/12 border-0 pr-0 border-black shadow-lg rounded-lg bg-white'>
                            <FinanceSummaryTable></FinanceSummaryTable>
                        </div>

                        <div className='w-11/12 mr-0 ml-2 flex flex-row border-0 border-black'>
                            <DashboardChart width="400" height="320" type="bar" />
                        </div>
                    </div>
                </div>
                <div className='hidden gap-4 mt-3 ml-24 mr-40 flex-col border-1 border-black place-items-center'>
                    <div className='bg-gradient-to-tr from-slate-600 to-neutral-400 p-1 w-full mr-20 ml-20 mt-4 flex flex-row border-black bg-slate-800'>
                        <p class="text-black-100 text-sm font-semibold font-serif text-white">Society Finance Details</p>
                    </div>
                    <div className='p-4 w-full mr-20 ml-24 flex flex-row border-black'>

                        <div className='w-full mr-10 ml-5 flex flex-row'>
                            <p class="text-black-100 text-lg font-semibold font-serif text-black">Expenses</p>
                            <p class="ml-4 text-black-100 text-lg font-semibold font-serif text-black">20000</p>
                        </div>

                        <div className='w-full mr-10 ml-24 flex flex-row'>
                            <DashboardChart width="300" height="220" type="bar" />
                        </div>
                    </div>
                </div>
                </div> 
            ---
            </div>

        </div>



    )
}

export default Dashboard