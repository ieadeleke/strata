import React from "react";
import SideBar from "./sidebar";

import { BiLogOut } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";


interface DashboardInterface {
    children: React.ReactElement
}

const DashboardLayout = (props: DashboardInterface) => {
    return (
        <div>
            <div className="dashboard-home flex max-h-[screen] h-screen overflow-hidden w-full">
                {/* <div className="w-[20%] float-left h-full bg-[#303030] bg-[#F0884F]"> */}
                <div className="w-[16%] float-left h-full bg-[#F0884F]">
                    <SideBar />
                </div>
                <div className="w-[84%] float-left h-full bg[#ff0000] h-full">
                    <div className="p-2 bg-white w-full border-b-2 border-solid border-black flex justify-between items-center px-5">
                        <div>
                            <h4>Welcome home, Osas!</h4>
                        </div>
                        <div>
                            <ul className="flex gap-10 items-center">
                                {/* <li>
                                    <button className="bg-transparent border-2 border-solid border-[#F0884F] rounded-full px-6 py-3 text-sm">
                                        New Cover Letter
                                    </button>
                                </li> */}
                                <li>
                                    <button className="bg-transparent border-2 border-solid border-[#F0884F] rounded-full px-6 py-3 text-sm">
                                        Add New Application
                                    </button>
                                </li>
                                <li><FaRegCircleUser className="text-2xl" /></li>
                                <li><IoNotifications className="text-2xl" /></li>
                                <li><BiLogOut className="text-2xl text-[#F0884F]" /></li>
                            </ul>
                        </div>
                    </div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;