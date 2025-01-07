import React from 'react'
import TopNavbar from './TopNavbar'
import SideNavbar, { SidebarItem } from './SideNavbar'
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings, PiggyBank, Banknote, Wallet, HandCoins, BookCheck, IndianRupee, Mail } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import DasboardViewCard from './DasboardViewCard';

import DashboardChart from './DashboardChart';
import ActionCard from './ActionCard';
import DashboardTaskCard from '../assets/DashboardTaskCard';


function Dashboard() {
    return (
        <div className='h-screen flex flex-row'>
            <div className='w-full flex flex-col items-center '>
                <div className='ml-16 mt-5 w-full text-start text-3xl font-serif font-bold'>
                    <p> Admin Dashboard</p>
                </div>
                <div className='w-11/12 mt-8 mr-10 flex flex-col md:flex-row gap-x-10 place-items-center  '>
                    <ActionCard title="" sub_title="Send Email" icon={<Mail size={20} />} />
                    <ActionCard title="" sub_title="Send SMS" icon={<Mail size={20} />} />
                    <ActionCard title="" sub_title="Send SMS" icon={<Mail size={20} />} />
                    <ActionCard title="" sub_title="Send SMS" icon={<Mail size={20} />} />
                </div>
                <div className='w-full mt-10 flex shadow-lg border-b-slate-600 border-l-2' />
                <div className='w-11/12 mt-1 mr-10 ml-40 flex flex-col md:flex-row gap-x-40 place-items-center'>
                    <DasboardViewCard icon={<HandCoins size={70} />} unit={<IndianRupee size={15} />} title="Maintenance Due" detail_tile="Collected:" detail_value="20" detail_tile_1="Pending:" detail_value_1="10" width="60"></DasboardViewCard>
                    <DasboardViewCard icon={<Wallet size={70} />} unit={<IndianRupee size={15} />} title="Bank Balance" detail_tile="May:" detail_value="20" detail_tile_1="June:" detail_value_1="10"></DasboardViewCard>
                    <div className='w-11/12 mt-1 mr-10 -ml-5  flex flex-col md:flex-row'>
                        <DashboardTaskCard icon={<Wallet size={40} />} unit={<IndianRupee size={10} />} title="Open Issues" detail_tile="May:" detail_value="20" detail_tile_1="June:" detail_value_1="10"></DashboardTaskCard>
                    </div>
                </div>
                <div className='w-11/12 mt-3 flex flex-row border-b-1 shadow-blue-900 border-current border-yellow-950' />
                <div className='w-11/12 gap-4 mt-3 ml-24 mr-40 flex flex-col border-1 border-black place-items-center'>
                    <div className='w-11/12 bg-gradient-to-tr from-slate-600 to-neutral-400 p-1 mr-20 ml-8 mt-4 flex flex-row border-black bg-slate-800'>
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
                <div className='w-11/12 gap-4 mt-3 ml-24 mr-40 flex flex-col border-1 border-black place-items-center'>
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

        </div>



    )
}

export default Dashboard