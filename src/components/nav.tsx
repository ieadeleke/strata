"use client";

import Link from "next/link";

import { CgMenuRight } from "react-icons/cg";

import { useState, useEffect } from "react";

interface NavProps {
    hideExtra?: boolean
}

const Navigation = (props: NavProps) => {

    const [fixedNav, setFixed] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const offset = window.scrollY;
            if (offset > 200) {
                setFixed(true);
            } else {
                setFixed(false);
            }
        });
    }, [])
    return (
        <div className={`flex justify-between ${fixedNav ? "shadow-xl" : ""} items-center px-5 md:px-20 fixed top-0 w-full pt-5 pb-3 bg-background`}>
            <div className="logo flex items-center gap-1 md:gap-2">
                <div className="size-10 md:size-12 bg-main rounded-xl"></div>
                <h3 className="text-xl md:text-2xl font-bold">Strata</h3>
            </div>
            <div className="hidden md:block">
                <ul className="flex gap-10">
                    <li>
                        <Link className="font-medium text-sm" href="/">Home</Link>
                    </li>
                    <li>
                        <Link className="font-medium text-sm" href="">Solutions</Link>
                    </li>
                    <li>
                        <Link className="font-medium text-sm" href="">Companies</Link>
                    </li>
                    <li>
                        <Link className="font-medium text-sm" href="">Individuals</Link>
                    </li>
                    <li>
                        <Link className="font-medium text-sm" href="/pricing">Pricing</Link>
                    </li>
                </ul>
            </div>
            <div className="hidden md:block">
                <ul className="flex gap-10">
                    <li>
                        <Link className="font-medium text-sm" href="">Contact Us</Link>
                    </li>
                    {/* <li>
                        <Link className="font-600 text-sm text-main px-8 py-4 border-main border-2 border-solid rounded-full" href="">Sign In</Link>
                    </li> */}
                    <li>
                        <Link className="font-600 text-sm text-white bg-main px-8 py-4 border-main border-2 border-solid rounded-full" href="">Create Account</Link>
                    </li>
                </ul>
            </div>
            <div className="block md:hidden">
                <CgMenuRight className="text-3xl text-main font-black" />
            </div>
        </div>
    )
}

export default Navigation;