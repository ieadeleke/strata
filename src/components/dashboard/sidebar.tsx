import Link from "next/link";

import { BiLogOut } from "react-icons/bi";
import { MdOutlineSupport } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";


const SideBar = () => {
    return (
        <div className="relative h-full px-5">
            <div className="h-24 mt-5 w-full bg-[#FED1B0] rounded-xl"></div>
            <ul className="flex flex-col gap-10 mt-10">
                <li>
                    <Link className="flex gap-3 items-center text-white" href=""><TbSmartHome className="text-xl" /> Home</Link>
                </li>
                <li>
                    <Link className="flex gap-3 items-center text-white" href=""><TbSmartHome className="text-xl" /> Resume</Link>
                </li>
                <li>
                    <Link className="flex gap-3 items-center text-white" href=""><TbSmartHome className="text-xl" /> Applications</Link>
                </li>
                <li>
                    <Link className="flex gap-3 items-center text-white" href=""><TbSmartHome className="text-xl" /> Contacts</Link>
                </li>
            </ul>
            <div className="absolute bottom-20">
                <ul className="flex flex-col gap-10">
                    <li>
                        <Link href="" className="flex gap-3 items-center text-white"><MdOutlineSupport className="text-2xl" /> Support</Link>
                    </li>
                    <li>
                        <Link href="" className="flex gap-3 items-center text-white"><BiLogOut className="text-2xl" /> Log Out</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar;