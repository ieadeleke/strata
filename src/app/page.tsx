import Image from "next/image";

import HeroImg from "@/assets/images/hero.svg";
import DisplayLayout from "@/components/layout";

import { IoArrowForward } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { PiStoolFill } from "react-icons/pi";
import { LiaToolsSolid } from "react-icons/lia";
import { CgToolbarBottom } from "react-icons/cg";
import { MdArrowOutward } from "react-icons/md";

import SurpriseImg from "@/assets/images/surprise.png";


import Link from "next/link";

export default function Home() {
  return (
    <div>
      <DisplayLayout>
        <>
          <div className="hero-section">
            <div className="px-5 md:px-0 md:w-[60%] mx-auto pt-32 md:pt-32">
              <h2 className="text-3xl md:text-5xl text-center font-bold mb-5 leading-tight md:leading-snug">10x your hiring and job search process with AI-powered support.</h2>
              <p className="text-sm md:text-base font-medium text-center w-full w-[98%] md:w-[70%] mx-auto z-20 mb-10 leading-relaxed">
                Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum. Vel morbi quis morbi risus
                tristique nulla quam sit.
              </p>
              <div className="flex gap-3 items-center justify-center mb-10 md:mb-0">
                <button className="bg-main text-white font-600 py-4 md:py-4 border-main border-2 border-solid md:py-4 px-8 rounded-full text-sm flex items-center gap-2">Get Started <IoArrowForward className="text-xl" /></button>
                <Link className="font-600 text-sm text-main px-8 py-4 border-main border-2 border-solid rounded-full" href="">How We Impact</Link>
              </div>
            </div>
            <Image src={HeroImg} alt="image" className="w-full h-full md:-mt-16 z-1" />
          </div>
          <div className="flex flex-col md:grid grid-cols-3 px-5 md:px-20 gap-20 mt-20">
            <div className="flex items-start gap-5">
              <div className="w-[60%]">
                <Image src={SurpriseImg} alt="image" className="" />
              </div>
              <div>
                <h4 className="font-bold mb-3 text-base">Easy to Go Live</h4>
                <p className="text-sm md:text-sm md:leading-relaxed w-full">
                  Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum. Vel morbi quis.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="w-[60%]">
                <Image src={SurpriseImg} alt="image" className="" />
              </div>
              <div>
                <h4 className="font-bold mb-3 text-base">Easy to Go Live</h4>
                <p className="text-sm md:text-sm md:leading-relaxed w-full">
                  Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum. Vel morbi quis.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="w-[60%]">
                <Image src={SurpriseImg} alt="image" className="" />
              </div>
              <div>
                <h4 className="font-bold mb-3 text-base">Easy to Go Live</h4>
                <p className="text-sm md:text-sm md:leading-relaxed w-full">
                  Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum. Vel morbi quis.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-full px-5 md:px-0 md:w-[50%] text-center mx-auto mt-32">
              <h2 className="hidden md:block text-3xl md:text-4xl text-center font-bold mb-5 md:leading-normal">You have done it your way, <br /> why not try it ours.</h2>
              <h2 className="block md:hidden text-3xl md:text-4xl text-center font-bold mb-4 leading-normal md:leading-normal">You have done it your way, why not try it ours.</h2>
              <p className="text-sm md:text-base font-medium text-center w-full md:w-[80%] mx-auto mb-5 md:mb-10 leading-relaxed md:leading-relaxed">
                Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum. Vel morbi quis morbi risus
                tristique nulla quam sit.
              </p>
            </div>
            <div className="px-5 md:px-0 md:w-[80%] mx-auto md:mt-5">
              <div className="md:px-10 flex flex-col md:grid grid-cols-2 gap-0">
                <div className="md:border-r border-[#E5E5E5] border-solid md:pr-10">
                  <div className="border-2 border-solid border-accent h-[15rem] md:h-[20rem] w-full mb-5"></div>
                  <h4 className="text-lg font-bold mb-2">ATS Certified Resume</h4>
                  <p className="text-sm md:text-sm w-full mb-10 font-medium md:font-normal leading-relaxed md:leading-relaxed">
                    Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum. Vel morbi quis morbi risus
                    tristique nulla quam sit. Lorem ipsum dolor sit amet. Facilisi volutpat.
                  </p>
                  <button className="border-2 border-solid border-main text-main font-600 text-sm py-3 px-7">Get Started</button>
                </div>
                <div className="pb-10 md:pl-10">
                  <div className="border-2 border-solid border-accent h-[15rem] md:h-[20rem] w-full mb-5"></div>
                  <h4 className="text-lg font-bold mb-2">ATS Certified Resume</h4>
                  <p className="text-sm md:text-sm w-full mb-10 font-medium md:font-normal leading-relaxed md:leading-relaxed">
                    Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum. Vel morbi quis morbi risus
                    tristique nulla quam sit. Lorem ipsum dolor sit amet. Facilisi volutpat.
                  </p>
                  <button className="border-2 border-solid border-main text-main font-600 text-sm py-3 px-7">Get Started</button>
                </div>
              </div>
              <div className="md:border-b border-[#E5E5E5] border-solid md:px-10 flex flex-col md:grid grid-cols-2 gap-0">
                <div className="pb-10 md:border-r border-[#E5E5E5] border-solid md:pr-10">
                  <div className="border-2 border-solid border-accent h-[15rem] md:h-[20rem] w-full mb-5"></div>
                  <h4 className="text-xl font-bold mb-2">ATS Certified Resume</h4>
                  <p className="text-sm md:text-sm w-full mb-10 font-medium md:font-normal leading-relaxed md:leading-relaxed">
                    Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum. Vel morbi quis morbi risus
                    tristique nulla quam sit. Lorem ipsum dolor sit amet. Facilisi volutpat.
                  </p>
                  <button className="border-2 border-solid border-main text-main font-600 text-sm py-3 px-7">Get Started</button>
                </div>
                <div className="pb-10 md:pl-10">
                  <div className="border-2 border-solid border-accent h-[15rem] md:h-[20rem] w-full mb-5"></div>
                  <h4 className="text-xl font-bold mb-2">ATS Certified Resume</h4>
                  <p className="text-sm md:text-sm w-full mb-10 font-medium md:font-normal leading-relaxed md:leading-relaxed">
                    Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum. Vel morbi quis morbi risus
                    tristique nulla quam sit. Lorem ipsum dolor sit amet. Facilisi volutpat.
                  </p>
                  <button className="border-2 border-solid border-main text-main font-600 text-sm py-3 px-7">Get Started</button>
                </div>
              </div>
            </div>
            <div className="mt-32 py-20 bg-[#161616] w-full">
              <div className="px-5 md:px-20">
                <div className="md:w-[60%] mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl text-center font-bold mb-2 text-white md:leading-normal">Creativity-Enabling AI Tools</h2>
                  <p className="text-sm md:text-sm font-medium text-center w-full w-[98%] text-white md:w-[80%] mx-auto mb-10 leading-relaxed">
                    Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum. Vel morbi quis morbi risus
                    tristique nulla quam sit.
                  </p>
                </div>
                <div className="flex flex-col md:grid grid-cols-3 gap-5 md:gap-10 mt-12">
                  <div>
                    <div className="border-2 border-solid border-accent h-[15rem] md:h-[20rem] w-full mb-5"></div>
                    <h4 className="text-white text-lg font-bold mb-2">ATS Certified Resume</h4>
                    <p className="text-white text-sm md:text-base w-full mb-10 md:leading-relaxed">
                      Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum. Vel morbi quis morbi risus
                      tristique nulla quam sit.
                    </p>
                  </div>
                  <div>
                    <div className="border-2 border-solid border-accent h-[15rem] md:h-[20rem] w-full mb-5"></div>
                    <h4 className="text-white text-lg font-bold mb-2">ATS Certified Resume</h4>
                    <p className="text-white text-sm md:text-base w-full mb-10 md:leading-relaxed">
                      Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum. Vel morbi quis morbi risus
                      tristique nulla quam sit.
                    </p>
                  </div>
                  <div>
                    <div className="border-2 border-solid border-accent h-[15rem] md:h-[20rem] w-full mb-5"></div>
                    <h4 className="text-white text-lg font-bold mb-2">ATS Certified Resume</h4>
                    <p className="text-white text-sm md:text-base w-full mb-10 md:leading-relaxed">
                      Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum. Vel morbi quis morbi risus
                      tristique nulla quam sit.
                    </p>
                  </div>
                </div>
                <div className="mx-auto w-max mt-12">
                  <button className="px-8 py-5 rounded-full text-sm bg-main border border-3 border-main text-white flex items-center gap-2">
                    Create a free account <MdArrowOutward className="text-xl" /></button>
                </div>
              </div>
            </div>
            <div className="w-full px-5 md:w-[50%] text-center mx-auto mt-32">
              <h2 className="text-3xl md:text-4xl text-center font-bold mb-5 md:leading-normal">You have done it your way, <br /> why not try it ours.</h2>
              <p className="text-sm md:text-base font-medium text-center w-full w-[98%] md:w-[80%] mx-auto mb-10 leading-relaxed">
                Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum. Vel morbi quis morbi risus
                tristique nulla quam sit.
              </p>
            </div>
            <div className="md:w-[70%] mx-auto">
              <div className="px-5 md:px-0 flex flex-col md:grid grid-cols-2 gap-5 mb-5">
                <div className="">
                  <div className="border-2 border-solid border-accent h-[15rem] md:h-[20rem] rounded-xl w-full"></div>
                </div>
                <div className="">
                  <div className="border-2 border-solid border-accent h-[15rem] md:h-[20rem] rounded-xl w-full"></div>
                </div>
              </div>
              <div className="px-5 md:px-0 flex flex-col md:grid grid-cols-2 gap-5">
                <div className="">
                  <div className="border-2 border-solid border-accent h-[15rem] md:h-[20rem] rounded-xl w-full"></div>
                </div>
                <div className="">
                  <div className="border-2 border-solid border-accent h-[15rem] md:h-[20rem] rounded-xl w-full"></div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="pt-32 px-20">
            <div className="grid grid-cols-2 gap-24">
              <div className="h-full w-full bg-white rounded-2xl"></div>
              <div>
                <h4 className="font-bold text-4xl mb-3 w-[70%] leading-snug">Track job performance with real-time analytics.</h4>
                <p className="text-sm md:text-base z-20 mb-5 md:leading-loose w-full tracking-tighter w-[95%]">
                  Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum. Vel morbi quis morbi risus
                  tristique nulla quam sit. Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum.
                </p>
                <p className="text-sm md:text-base md:leading-loose w-full tracking-tighter text-main font-medium">
                  To get started, you should have:</p>
                <div className="h-2 w-full border-b-2 border-solid mb-3 border-[#F3F3F3]"></div>
                <p className="text-sm md:text-base mb-3 md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                  <PiStoolFill className="text-xl text-main" />
                  Track your credit score in real time
                </p>
                <p className="text-sm md:text-base mb-3 md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                  <CgToolbarBottom className="text-xl text-main" />
                  Create and manage personalized financial plans
                </p>
                <p className="text-sm md:text-base mb-3 md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                  <LiaToolsSolid className="text-xl text-main" />
                  Create and manage personalized financial plans
                </p>
                <button className="mt-5 py-4 px-8 text-sm bg-main rounded-lg font-600 text-white">Get Started</button>
              </div>
            </div>
          </div>
          <div className="pt-32 px-20">
            <div className="grid grid-cols-2 gap-24">
              <div>
                <h4 className="font-bold text-4xl mb-3 w-[70%] leading-snug">Track job performance with real-time analytics.</h4>
                <p className="text-sm md:text-base z-20 mb-5 md:leading-loose w-full tracking-tighter w-[95%]">
                  Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum. Vel morbi quis morbi risus
                  tristique nulla quam sit. Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum.
                </p>
                <p className="text-sm md:text-base md:leading-loose w-full tracking-tighter text-main font-medium">
                  To get started, you should have:</p>
                <div className="h-2 w-full border-b-2 border-solid mb-3 border-[#F3F3F3]"></div>
                <p className="text-sm md:text-base mb-3 md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                  <PiStoolFill className="text-xl text-main" />
                  Track your credit score in real time
                </p>
                <p className="text-sm md:text-base mb-3 md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                  <CgToolbarBottom className="text-xl text-main" />
                  Create and manage personalized financial plans
                </p>
                <p className="text-sm md:text-base mb-3 md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                  <LiaToolsSolid className="text-xl text-main" />
                  Create and manage personalized financial plans
                </p>
                <button className="mt-5 py-4 px-8 text-sm bg-main rounded-lg font-600 text-white">Get Started</button>
              </div>
              <div className="h-full w-full bg-white rounded-2xl"></div>
            </div>
          </div>
          <div className="h-[40rem] bg-[#FED1B0]"></div>
          <div className="grid grid-cols-2 gap-32 px-20 mt-32">
            <div className="flex justify-between flex-col">
              <h3 className="text-4xl leading-normal font-600 w-[70%]">Connecting Thousands to Meaningful Job Opportunities.</h3>
              <p className="text-sm md:text-base md:leading-loose w-full">
                Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum. Vel morbi quis morbi risus
                tristique nulla quam sit. Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum.
              </p>
            </div>
            <div>
              <div className="border-2 border-black border-solid grid grid-cols-2">
                <div className="p-6 border-r-2 border-solid border-black">
                  <div className="h-32"></div>
                  <h3 className="text-4xl font-bold mb-3">10,000+</h3>
                  <h5 className="text-xl font-bold mb-3">Job Listings</h5>
                  <p className="text-sm md:leading-relaxed w-full">
                    Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum. Vel morbi quis morbi.
                  </p>
                </div>
                <div className="p-6">
                  <div className="h-32"></div>
                  <h3 className="text-4xl font-bold mb-2">36,000+</h3>
                  <h5 className="text-xl font-bold mb-3">Active Users</h5>
                  <p className="text-sm md:leading-relaxed w-full">
                    Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum. Vel morbi quis morbi.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-20 bg-white px-20 mt-32">
            <h3 className="text-4xl leading-normal font-600 w-[70%] mb-10">Latest Job Postings</h3>
            <div className="grid grid-cols-3 gap-10">
              <div className="bg-background p-5 rounded-lg">
                <div className="size-20 rounded-full bg-white mb-5"></div>
                <h4 className="font-bold text-xl mb-4">Web Developer</h4>
                <p className="mb-3 text-base">Remote</p>
                <div className="flex justify-between mb-6">
                  <p className="text-sm">Creative Village</p>
                  <p className="text-sm">140 applicants</p>
                </div>
                <button className="bg-black py-5 w-full text-white rounded-lg text-sm">Apply for Job</button>
              </div>
              <div className="bg-background p-5 rounded-lg">
                <div className="size-20 rounded-full bg-white mb-5"></div>
                <h4 className="font-bold text-xl mb-4">Web Developer</h4>
                <p className="mb-3 text-base">Remote</p>
                <div className="flex justify-between mb-6">
                  <p className="text-sm">Creative Village</p>
                  <p className="text-sm">140 applicants</p>
                </div>
                <button className="bg-black py-5 w-full text-white rounded-lg text-sm">Apply for Job</button>
              </div>
              <div className="bg-background p-5 rounded-lg">
                <div className="size-20 rounded-full bg-white mb-5"></div>
                <h4 className="font-bold text-xl mb-4">Web Developer</h4>
                <p className="mb-3 text-base">Remote</p>
                <div className="flex justify-between mb-6">
                  <p className="text-sm">Creative Village</p>
                  <p className="text-sm">140 applicants</p>
                </div>
                <button className="bg-black py-5 w-full text-white rounded-lg text-sm">Apply for Job</button>
              </div>
            </div>
          </div> */}
        </>
      </DisplayLayout>
    </div>
  );
}
