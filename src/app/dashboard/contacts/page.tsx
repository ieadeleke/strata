"use client";

import DashboardLayout from "@/components/dashboard/dashboardlayout";
import { Input, Modal } from "antd";
import { useState } from "react";

import { Controller, useForm } from "react-hook-form";

const ContactUs = () => {
    const { handleSubmit, control } = useForm({});
    const [openNewContactModal, setOpenNewContactModal] = useState(false);

    const toggleNewContactModal = () => setOpenNewContactModal(!openNewContactModal);

    const handleAddNewContactForm = (e: any) => {
        console.log(e.jobTitle)
    }
    return (
        <>
            <DashboardLayout>
                <>
                    <div className="h-full w-full flex items-center justify-center">
                        <div className="text-center">
                            <h4 className="mb-3 font-bold text-2xl">There's nothing yet</h4>
                            <p className="w-[70%] mb-5 text-center mx-auto">You have not added any contact yet. Click below to get started</p>
                            <button onClick={toggleNewContactModal} className="bg-main py-4 px-8 text-sm rounded-lg text-white">Add Content</button>
                        </div>
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

export default ContactUs;