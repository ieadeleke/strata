import DisplayLayout from "@/components/layout"
import Link from "next/link";

import { FaCircleCheck } from "react-icons/fa6";
import { TiTicket } from "react-icons/ti";
import { HiPlusSm } from "react-icons/hi";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { FiArrowRightCircle } from "react-icons/fi";


const PricingPage = () => {
    return (
        <DisplayLayout>
            <div>
                <div className="hero-section">
                    <div className="w-[98%] md:w-[60%] mx-auto pt-28 md:pt-40">
                        <h2 className="text-4xl md:text-5xl text-center font-bold mb-5 md:leading-tight">Get the complete developer platform.</h2>
                        <p className="text-sm md:text-base font-medium text-center w-full w-[98%] md:w-[70%] mx-auto z-20 mb-10 leading-relaxed">
                            Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum. Vel morbi quis morbi risus
                            tristique nulla quam sit.
                        </p>
                        <div className="flex gap-3 items-center justify-center mb-10 md:mb-0">
                            <button className="bg-main text-white font-600 py-3 border-main border-2 border-solid px-8 rounded-full text-sm flex items-center gap-2">Monthly</button>
                            <button className="flex gap-5 items-center font-600 text-sm text-main px-8 py-3 border-main border-2 border-solid rounded-full">Yearly
                                <span className="flex gap-2 items-center text-black"><TiTicket className="text-black text-2xl" />Get 1 month free</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col md:grid grid-cols-3 gap-10 px-5 md:px-20 mt-28">
                        <div className="bg-white rounded-2xl p-5 shadow">
                            <div className="bg-background p-4 rounded-2xl">
                                <p className="text-sm mb-5">Starter Plan</p>
                                <h4 className="text-5xl font-bold mb-5">Free</h4>
                                <p className="text-sm w-full leading-relaxed tracking-tight">
                                    Create and manage profiles.
                                </p>
                            </div>
                            <div>
                                <ul className="flex flex-col mt-5 gap-2">
                                    <li>
                                        <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                            <FaCircleCheck className="text-xl text-main" />
                                            Save and track job applications
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                            <FaCircleCheck className="text-xl text-main" />
                                            Add contacts
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                            <FaCircleCheck className="text-xl text-main" />
                                            Guidance on how track job applications
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                            <FaCircleCheck className="text-xl text-main" />
                                            Support Center
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                            <FaCircleCheck className="text-xl text-main" />
                                            Track your job applications in real time
                                        </p>
                                    </li>
                                </ul>
                                <button className="bg-black py-5 mt-5 rounded-full w-full text-white text-sm">Select Plan</button>
                            </div>
                        </div>
                        <div className="bg-main rounded-2xl -mt-10 border-8 border-main shadow">
                            <div className="bg-main py-1 text-center">
                                <p className="text-white uppercase pb-2 text-base font-medium">Most Popular</p>
                            </div>
                            <div className="p-5 rounded-2xl bg-white">
                                <div className="bg-background p-4 rounded-2xl">
                                    <p className="text-sm mb-5">Standard Plan</p>
                                    <h4 className="text-5xl font-bold mb-5"><span className="text-xl">NGN</span> 10,000.00 <span className="text-sm font-normal"></span></h4>
                                    <p className="text-sm w-full leading-relaxed tracking-tight">
                                        AI curated Professional Resume Builder for different industries.
                                    </p>
                                </div>
                                <div>
                                    <ul className="flex flex-col mt-5 gap-2">
                                        <li>
                                            <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                                <FaCircleCheck className="text-xl text-main" />
                                                Smart Job Recommendations
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                                <FaCircleCheck className="text-xl text-main" />
                                                Resume Builder
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                                <FaCircleCheck className="text-xl text-main" />
                                                Real time Email Notifications
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                                <FaCircleCheck className="text-xl text-main" />
                                                Real time Job Updates
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                                <FaCircleCheck className="text-xl text-main" />
                                                Email template notifications
                                            </p>
                                        </li>
                                    </ul>
                                    <button className="bg-black py-5 mt-5 rounded-full w-full text-white text-sm">Select Plan</button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-5 shadow">
                            <div className="bg-background p-4 rounded-2xl">
                                <p className="text-sm mb-5">Pro Version</p>
                                <h4 className="text-5xl font-bold mb-5"><span className="text-xl">NGN</span> 20,000.00</h4>
                                <p className="text-sm w-full leading-relaxed tracking-tight">
                                    Professional Cover Letters tailored specifically to different jobs.
                                </p>
                            </div>
                            <div>
                                <ul className="flex flex-col mt-5 gap-2">
                                    <li>
                                        <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                            <FaCircleCheck className="text-xl text-main" />
                                            Smart Job Recommendations
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                            <FaCircleCheck className="text-xl text-main" />
                                            Resume Builder
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                            <FaCircleCheck className="text-xl text-main" />
                                            Real time Email Notifications
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                            <FaCircleCheck className="text-xl text-main" />
                                            Real time Job Updates
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                            <FaCircleCheck className="text-xl text-main" />
                                            Email template notifications
                                        </p>
                                    </li>
                                </ul>
                                <button className="bg-black py-5 mt-5 rounded-full w-full text-white text-sm">Select Plan</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black py-32 mt-32">
                        <h4 className="font-black text-white text-center text-5xl leading-tight w-[40%] mx-auto">Engage Users, Tell Better Stories & Boost Sales</h4>
                        <div className="px-20 mt-10">
                            <div className="grid grid-cols-2 gap-5">
                                <div className="h-[30rem] rounded-xl w-full bg-[#fff]"></div>
                                <div className="h-[30rem] rounded-xl w-full bg-[#fff]"></div>
                            </div>
                            <div className="grid grid-cols-2 gap-5 mt-5">
                                <div className="h-[20rem] rounded-xl w-full bg-[#fff]"></div>
                                <div className="h-[20rem] rounded-xl w-full bg-[#fff]"></div>
                            </div>
                        </div>
                    </div>
                    <div className="px-20 mt-32">
                        <div className="grid grid-cols-2 gap-20">
                            <div>
                                <h3 className="text-5xl w-[70%] font-bold leading-tight mb-10">Questions we get asked often</h3>
                                <button className="flex gap-4 items-center py-4 px-8 bg-main text-white text-sm rounded-full font-medium">Create a New Account <FiArrowRightCircle className="text-2xl" /></button>
                            </div>
                            <div>
                                <div className="flex flex-col gap-3 border-y-2 pt-4 pb-4 px-3 border-solid border-black">
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-lg font-medium">Do you guarantee a job?</h4>
                                        <span><HiMiniMinusSmall className="text-4xl" /></span>
                                    </div>
                                    <div>
                                        <p className="text-base leading-loose md:leaing-loose mt-5">
                                            Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum. Vel morbi quis morbi risus tristique nulla quam sit. Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum. Vel morbi quis morbi risus tristique nulla quam sit.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 border-b-2 px-3 pb-4 pt-4 border-solid border-black">
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-lg font-medium">Do you guarantee a job?</h4>
                                        <span><HiPlusSm className="text-3xl" /></span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 border-b-2 px-3 pb-4 pt-4 border-solid border-black">
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-lg font-medium">Do you guarantee a job?</h4>
                                        <span><HiPlusSm className="text-3xl" /></span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 border-b-2 px-3 pb-4 pt-4 border-solid border-black">
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-lg font-medium">Do you guarantee a job?</h4>
                                        <span><HiPlusSm className="text-3xl" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DisplayLayout>
    )
}

export default PricingPage;