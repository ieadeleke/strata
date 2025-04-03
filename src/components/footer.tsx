'use client';

import Link from "next/link";
import { useState } from "react";

interface FooterProps {
    hideExtra?: boolean
}

const Footer = (props: FooterProps) => {
    const [currYear] = useState(new Date().getFullYear());
    return (
        <div className={`bg-main py-20 px-5 md:px-20 ${props?.hideExtra ? "" : "mt-28"}`}>
            <div className="flex flex-col md:grid grid-cols-2 gap-10">
                <div>
                    <h2 className="text-5xl md:text-7xl mb-3 font-bold leading-tight">Find Work.</h2>
                    <h2 className="text-5xl md:text-7xl mb-3 font-bold leading-tight">Share Work.</h2>
                    <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-10">All In One Place.</h2>
                    <p className="text-sm md:text-base md:leading-loose w-full">
                        &copy; {currYear}. All Rights Reserved.
                    </p>
                </div>
                <div>
                    <div className="flex justify-between md:gap-32">
                        <div>
                            <h5 className="font-bold text-base mb-5">Product</h5>
                            <ul className="flex flex-col gap-5">
                                <li>
                                    <Link className="text-sm font-medium" href="">Home</Link>
                                </li>
                                <li>
                                    <Link className="text-sm font-medium" href="">Solutions</Link>
                                </li>
                                <li>
                                    <Link className="text-sm font-medium" href="">Company</Link>
                                </li>
                                <li>
                                    <Link className="text-sm font-medium" href="">Pricing</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold text-base mb-5">Company</h5>
                            <ul className="flex flex-col gap-5">
                                <li>
                                    <Link className="text-sm font-medium" href="">Partners</Link>
                                </li>
                                <li>
                                    <Link className="text-sm font-medium" href="">Customers</Link>
                                </li>
                                <li>
                                    <Link className="text-sm font-medium" href="">Brand</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold text-base mb-5">Resources</h5>
                            <ul className="flex flex-col gap-5">
                                <li>
                                    <Link className="text-sm font-medium" href="">Community</Link>
                                </li>
                                <li>
                                    <Link className="text-sm font-medium" href="">Reach out to us</Link>
                                </li>
                                <li>
                                    <Link className="text-sm font-medium" href="">Terms of Service</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:flex justify-between pt-20">
                <div>

                </div>
                <div>
                    {/* <p className="">Developed with love in Lagos Nigeria by <Link className="" href="">ieadeleke</Link></p> */}
                </div>
            </div>
        </div>
    )
}

export default Footer;