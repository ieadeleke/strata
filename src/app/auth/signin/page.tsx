import DisplayLayout from "@/components/layout"
import Link from "next/link";

import { FaCircleCheck } from "react-icons/fa6";
import { TiTicket } from "react-icons/ti";
import { HiPlusSm } from "react-icons/hi";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { FiArrowRightCircle } from "react-icons/fi";
import { Controller, useForm } from "react-hook-form";
import { Input } from "antd";


const SignInPage = () => {

    // const { control, handleSubmit } = useForm({
    //     defaultValues: {
    //         email: "",
    //         password: ""
    //     }
    // });

    return (
        // <DisplayLayout hideExtra={true}>
        <div>
            <div className="h-screen grid grid-cols-1/1.5">
                <div className="bg-main"></div>
                <div className="flex items-center">
                    <div className="w-[60%] mx-auto">
                        <h3 className="text-3xl mb-3 text-center font-bold">Welcome Back!</h3>
                        <p className="text-sm md:text-base leading-loose md:leading-loose text-center">Please signin by entering your information below.</p>
                        <div className="mt-8">
                            <form action="">
                                <div className="form-group mb-5">
                                    <label className="text-sm" htmlFor="">Email address</label>
                                    <Input type="email" className="py-5 text-sm" />
                                    {/* <Controller name="email" control={control}
                                        render={({ field }) => (
                                            <Input type="email" className="py-4" {...field} />
                                        )} /> */}
                                </div>
                                <div className="form-group mb-3">
                                    <label className="text-sm" htmlFor="">Password</label>
                                    <Input type="password" className="py-5 text-sm" />
                                    {/* <Controller name="email" control={control}
                                        render={({ field }) => (
                                            <Input type="email" className="py-4" {...field} />
                                        )} /> */}
                                </div>
                                <div className="mb-8">
                                    <Link href="/auth/signup" className="text-sm block">Forgot password? <span className="text-main">Reset here!</span></Link>
                                </div>
                                <button className="bg-main w-full py-5 text-sm mb-4 text-center rounded-lg text-white">Click Here to Sign In</button>
                                <Link href="/auth/signup" className="text-center block text-sm">No account yet? Signup now!</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </DisplayLayout>
    )
}

export default SignInPage;