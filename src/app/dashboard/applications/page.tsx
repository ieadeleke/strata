"use client";

import DashboardLayout from "@/components/dashboard/dashboardlayout";
import { Input, Modal, Tabs } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import ResumeImage from "@/assets/images/resume.webp";

import { Controller, useForm } from "react-hook-form";
import { MdLocationPin } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";



const ApplicationsPage = () => {
    const { handleSubmit, control } = useForm({});
    const [currentView, setCurrentView] = useState("detail")
    const [openNewContactModal, setOpenNewContactModal] = useState(false);

    const toggleNewContactModal = () => setOpenNewContactModal(!openNewContactModal);

    const handleAddNewContactForm = (e: any) => {
        console.log(e.jobTitle)
    }
    return (
        <>
            <DashboardLayout>
                <>
                    <div className="h-full w-full px-5">
                        {
                            currentView === "list" ?
                                <>
                                    <div className="w-max mx-auto mt-20">
                                        <ul className="flex gap-3">
                                            <li className="rounded-full border-2 bg-main border-solid border-main px-8 text-sm py-3">View All</li>
                                            <li className="rounded-full border-2 border-solid border-main px-8 text-sm py-3">Technology</li>
                                            <li className="rounded-full border-2 border-solid border-main px-8 text-sm py-3">Technology</li>
                                            <li className="rounded-full border-2 border-solid border-main px-8 text-sm py-3">Technology</li>
                                            <li className="rounded-full border-2 border-solid border-main px-8 text-sm py-3">Technology</li>
                                            <li className="rounded-full border-2 border-solid border-main px-8 text-sm py-3">Technology</li>
                                        </ul>
                                    </div>
                                    <div className="mx-auto w-[50%] flex flex-col gap-5 mt-16">
                                        <div className="border-2 border-main border-solid bg-transparent px-4 shadow-xl py-3 rounded-lg">
                                            <div className="">
                                                <div className="flex justify-between">
                                                    <div>
                                                        <p className="text-sm mb-2">SAIL Innovation Lab</p>
                                                        <h4 className="text-xl font-medium mb-4">Product Designer</h4>
                                                    </div>
                                                    <div>
                                                        <Link href="" className="flex items-center gap-2">View Job <FaArrowRight /></Link>
                                                    </div>
                                                </div>
                                                <div className="w-full flex justify-between items-center mt-5">
                                                    <ul className="flex items-center gap-3">
                                                        <li className="text-sm flex gap-1 items-center"><MdLocationPin className="text-lg" /> Remote</li>
                                                        <li className="text-sm flex gap-1 items-center"><MdLocationPin className="text-lg" /> Full time</li>
                                                    </ul>
                                                    <div>
                                                        <p className="text-sm">October 20, 2024</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-2 border-main border-solid bg-transparent px-4 shadow-xl py-3 rounded-lg">
                                            <div className="">
                                                <div className="flex justify-between">
                                                    <div>
                                                        <p className="text-sm mb-2">SAIL Innovation Lab</p>
                                                        <h4 className="text-xl font-medium mb-4">Product Designer</h4>
                                                    </div>
                                                    <div>
                                                        <Link href="" className="flex items-center gap-2">View Job <FaArrowRight /></Link>
                                                    </div>
                                                </div>
                                                <div className="w-full flex justify-between items-center mt-5">
                                                    <ul className="flex items-center gap-3">
                                                        <li className="text-sm flex gap-1 items-center"><MdLocationPin className="text-lg" /> Remote</li>
                                                        <li className="text-sm flex gap-1 items-center"><MdLocationPin className="text-lg" /> Full time</li>
                                                    </ul>
                                                    <div>
                                                        <p className="text-sm">October 20, 2024</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-2 border-main border-solid bg-transparent px-4 shadow-xl py-3 rounded-lg">
                                            <div className="">
                                                <div className="flex justify-between">
                                                    <div>
                                                        <p className="text-sm mb-2">SAIL Innovation Lab</p>
                                                        <h4 className="text-xl font-medium mb-4">Product Designer</h4>
                                                    </div>
                                                    <div>
                                                        <Link href="" className="flex items-center gap-2">View Job <FaArrowRight /></Link>
                                                    </div>
                                                </div>
                                                <div className="w-full flex justify-between items-center mt-5">
                                                    <ul className="flex items-center gap-3">
                                                        <li className="text-sm flex gap-1 items-center"><MdLocationPin className="text-lg" /> Remote</li>
                                                        <li className="text-sm flex gap-1 items-center"><MdLocationPin className="text-lg" /> Full time</li>
                                                    </ul>
                                                    <div>
                                                        <p className="text-sm">October 20, 2024</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-2 border-main border-solid bg-transparent px-4 shadow-xl py-3 rounded-lg">
                                            <div className="">
                                                <div className="flex justify-between">
                                                    <div>
                                                        <p className="text-sm mb-2">SAIL Innovation Lab</p>
                                                        <h4 className="text-xl font-medium mb-4">Product Designer</h4>
                                                    </div>
                                                    <div>
                                                        <Link href="" className="flex items-center gap-2">View Job <FaArrowRight /></Link>
                                                    </div>
                                                </div>
                                                <div className="w-full flex justify-between items-center mt-5">
                                                    <ul className="flex items-center gap-3">
                                                        <li className="text-sm flex gap-1 items-center"><MdLocationPin className="text-lg" /> Remote</li>
                                                        <li className="text-sm flex gap-1 items-center"><MdLocationPin className="text-lg" /> Full time</li>
                                                    </ul>
                                                    <div>
                                                        <p className="text-sm">October 20, 2024</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-2 border-main border-solid bg-transparent px-4 shadow-xl py-3 rounded-lg">
                                            <div className="">
                                                <div className="flex justify-between">
                                                    <div>
                                                        <p className="text-sm mb-2">SAIL Innovation Lab</p>
                                                        <h4 className="text-xl font-medium mb-4">Product Designer</h4>
                                                    </div>
                                                    <div>
                                                        <Link href="" className="flex items-center gap-2">View Job <FaArrowRight /></Link>
                                                    </div>
                                                </div>
                                                <div className="w-full flex justify-between items-center mt-5">
                                                    <ul className="flex items-center gap-3">
                                                        <li className="text-sm flex gap-1 items-center"><MdLocationPin className="text-lg" /> Remote</li>
                                                        <li className="text-sm flex gap-1 items-center"><MdLocationPin className="text-lg" /> Full time</li>
                                                    </ul>
                                                    <div>
                                                        <p className="text-sm">October 20, 2024</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <div>
                                        <Tabs className="mt-10"
                                            // onChange={onChange}
                                            type="card">
                                            <Tabs.TabPane key="1" tab="Job Info">

                                            </Tabs.TabPane>
                                            <Tabs.TabPane key="2" tab="Resume">
                                                <div className="h-full w-full flex items-center justify-center">
                                                    <div className="text-center py-20">
                                                        <Image src={ResumeImage} alt="resume" className="w-[15%] mb-4 mx-auto" />
                                                        <h4 className="mb-3 font-bold text-2xl">There's nothing yet</h4>
                                                        <p className="w-[70%] mb-5 text-center mx-auto">You have not added any contact yet. Click below to get started</p>
                                                        <button onClick={toggleNewContactModal} className="bg-main py-4 px-8 text-sm rounded-lg text-white">Add Content</button>
                                                    </div>
                                                </div>
                                            </Tabs.TabPane>
                                            <Tabs.TabPane key="3" tab="Contacts">
                                            </Tabs.TabPane>
                                            <Tabs.TabPane key="4" tab="Email Templates">
                                                <div className="mx-10">
                                                    <Tabs type="card">
                                                        <Tabs.TabPane key="email-1" tab="Job Application">
                                                            <div className="ml-10">
                                                                <h4 className="mb-2 font-bold mt-5">Subject: Application for [Job Title] - [Your Full Name]</h4>

                                                                <h4 className="mb-2">Dear [Hiring Manager's Name or "Hiring Manager"],</h4>
                                                                <div className="w-[70%]">
                                                                    <p className="text-sm leading-loose mb-3">I hope this message finds you well. I am writing to express my interest in the [Job Title] position at [Company Name], as advertised on [Job Board/Company Website/Referral].

                                                                        With my background in [Your Field/Industry], including over [X years of experience] in [specific skills or achievements], I am confident in my ability to contribute significantly to your team. In my previous role(s) at [Previous Company Name(s)], I successfully [specific accomplishments or responsibilities that are relevant to the job].

                                                                        I have attached my resume and [any additional documents, if applicable] for your review. I would welcome the opportunity to further discuss how my skills and experiences align with the needs of your team.

                                                                        Thank you for considering my application. Please feel free to contact me at [your email address] or [your phone number] at your convenience. I look forward to the possibility of contributing to [Company Name]'s success.
                                                                    </p>
                                                                    <p className="text-sm mb-2">Best regards,</p>
                                                                    <p className="text-sm leading-loose">[Your Full Name]</p>
                                                                    <p className="text-sm leading-loose">[Your LinkedIn Profile (if applicable)]</p>
                                                                    <p className="text-sm leading-loose">[Your Contact Information]</p>
                                                                </div>
                                                            </div>
                                                        </Tabs.TabPane>
                                                        <Tabs.TabPane key="email-2" tab="Rejection Letter">
                                                            <div className="ml-10">
                                                                <h4 className="mb-2 font-bold mt-5">Subject: Application for [Job Title] - [Your Full Name]</h4>

                                                                <h4 className="mb-2">Dear [Hiring Manager's Name or "Hiring Manager"],</h4>
                                                                <div className="w-[70%]">
                                                                    <p className="text-sm leading-loose mb-3">I hope this message finds you well. I am writing to express my interest in the [Job Title] position at [Company Name], as advertised on [Job Board/Company Website/Referral].

                                                                        With my background in [Your Field/Industry], including over [X years of experience] in [specific skills or achievements], I am confident in my ability to contribute significantly to your team. In my previous role(s) at [Previous Company Name(s)], I successfully [specific accomplishments or responsibilities that are relevant to the job].

                                                                        I have attached my resume and [any additional documents, if applicable] for your review. I would welcome the opportunity to further discuss how my skills and experiences align with the needs of your team.

                                                                        Thank you for considering my application. Please feel free to contact me at [your email address] or [your phone number] at your convenience. I look forward to the possibility of contributing to [Company Name]'s success.
                                                                    </p>
                                                                    <p className="text-sm mb-2">Best regards,</p>
                                                                    <p className="text-sm leading-loose">[Your Full Name]</p>
                                                                    <p className="text-sm leading-loose">[Your LinkedIn Profile (if applicable)]</p>
                                                                    <p className="text-sm leading-loose">[Your Contact Information]</p>
                                                                </div>
                                                            </div>
                                                        </Tabs.TabPane>
                                                        <Tabs.TabPane key="email-3" tab="Job Application">
                                                            <div className="ml-10">
                                                                <h4 className="mb-2 font-bold mt-5">Subject: Application for [Job Title] - [Your Full Name]</h4>

                                                                <h4 className="mb-2">Dear [Hiring Manager's Name or "Hiring Manager"],</h4>
                                                                <div className="w-[70%]">
                                                                    <p className="text-sm leading-loose mb-3">I hope this message finds you well. I am writing to express my interest in the [Job Title] position at [Company Name], as advertised on [Job Board/Company Website/Referral].

                                                                        With my background in [Your Field/Industry], including over [X years of experience] in [specific skills or achievements], I am confident in my ability to contribute significantly to your team. In my previous role(s) at [Previous Company Name(s)], I successfully [specific accomplishments or responsibilities that are relevant to the job].

                                                                        I have attached my resume and [any additional documents, if applicable] for your review. I would welcome the opportunity to further discuss how my skills and experiences align with the needs of your team.

                                                                        Thank you for considering my application. Please feel free to contact me at [your email address] or [your phone number] at your convenience. I look forward to the possibility of contributing to [Company Name]'s success.
                                                                    </p>
                                                                    <p className="text-sm mb-2">Best regards,</p>
                                                                    <p className="text-sm leading-loose">[Your Full Name]</p>
                                                                    <p className="text-sm leading-loose">[Your LinkedIn Profile (if applicable)]</p>
                                                                    <p className="text-sm leading-loose">[Your Contact Information]</p>
                                                                </div>
                                                            </div>
                                                        </Tabs.TabPane>
                                                        <Tabs.TabPane key="email-4" tab="Job Application">
                                                            <div className="ml-10">
                                                                <h4 className="mb-2 font-bold mt-5">Subject: Application for [Job Title] - [Your Full Name]</h4>

                                                                <h4 className="mb-2">Dear [Hiring Manager's Name or "Hiring Manager"],</h4>
                                                                <div className="w-[70%]">
                                                                    <p className="text-sm leading-loose mb-3">I hope this message finds you well. I am writing to express my interest in the [Job Title] position at [Company Name], as advertised on [Job Board/Company Website/Referral].

                                                                        With my background in [Your Field/Industry], including over [X years of experience] in [specific skills or achievements], I am confident in my ability to contribute significantly to your team. In my previous role(s) at [Previous Company Name(s)], I successfully [specific accomplishments or responsibilities that are relevant to the job].

                                                                        I have attached my resume and [any additional documents, if applicable] for your review. I would welcome the opportunity to further discuss how my skills and experiences align with the needs of your team.

                                                                        Thank you for considering my application. Please feel free to contact me at [your email address] or [your phone number] at your convenience. I look forward to the possibility of contributing to [Company Name]'s success.
                                                                    </p>
                                                                    <p className="text-sm mb-2">Best regards,</p>
                                                                    <p className="text-sm leading-loose">[Your Full Name]</p>
                                                                    <p className="text-sm leading-loose">[Your LinkedIn Profile (if applicable)]</p>
                                                                    <p className="text-sm leading-loose">[Your Contact Information]</p>
                                                                </div>
                                                            </div>
                                                        </Tabs.TabPane>
                                                    </Tabs>
                                                </div>
                                            </Tabs.TabPane>
                                        </Tabs>
                                    </div>
                                </>
                        }
                    </div>
                </>
            </DashboardLayout>

            <Modal open={openNewContactModal} onCancel={toggleNewContactModal} footer={null}>
                <div>
                    <h3 className="text-xl font-bold mb-7 block text-center">Add New Job Contact</h3>
                    <form action="" onSubmit={handleSubmit(handleAddNewContactForm)}>
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="form-group">
                                <label htmlFor="">First Name</label>
                                <Controller name="firstName" control={control}
                                    render={({ field }) => (
                                        <Input className="py-4 w-full" {...field} />
                                    )} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Last Name</label>
                                <Controller name="lastName" control={control}
                                    render={({ field }) => (
                                        <Input className="py-4 w-full" {...field} />
                                    )} />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="form-group">
                                <label htmlFor="">Job Title</label>
                                <Controller name="jobTitle" control={control}
                                    render={({ field }) => (
                                        <Input {...field} className="py-4 w-full" />
                                    )} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Company Name</label>
                                <Controller name="companyName" control={control}
                                    render={({ field }) => (
                                        <Input {...field} className="py-4 w-full" />
                                    )} />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Controller name="email" control={control}
                                    render={({ field }) => (
                                        <Input {...field} className="py-4 w-full" />
                                    )} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone number</label>
                                <Controller name="phoneNumber" control={control}
                                    render={({ field }) => (
                                        <Input {...field} className="py-4 w-full" />
                                    )} />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="form-group">
                                <label htmlFor="">LinkedIn Profile</label>
                                <Controller name="linkedin" control={control}
                                    render={({ field }) => (
                                        <Input {...field} className="py-4 w-full" />
                                    )} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Twitter Profile</label>
                                <Controller name="twitter" control={control}
                                    render={({ field }) => (
                                        <Input {...field} className="py-4 w-full" />
                                    )} />
                            </div>
                        </div>
                        <button className="mt-5 w-full py-5 bg-main text-white rounded-lg">Add New Contact</button>
                    </form>
                </div>
            </Modal>
        </>
    )
}

export default ApplicationsPage;