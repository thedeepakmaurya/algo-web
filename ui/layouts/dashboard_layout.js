"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DashboardLink from "./dashboard_link";
import data from "@/public/db/navigation.json";
import { usePathname } from "next/navigation";
import ProfileLink from "./profile_link";

export default function DashboardLayout({ children }) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const path = usePathname();

    const { dashboard, profile } = data;

    const pageTitle = () => {
        switch (path) {
            case "/brokers":
                return "Brokers";
            case "/strategies":
                return "Strategies";
            case "/backtest":
                return "BackTest";
            case "/reports":
                return "Reports";
            default:
                return "Home";
        }
    }

    return (
        <div className="flex h-screen ">
            {/* Sidebar - Hidden on small screens, always visible on medium and larger */}
            <div
                className={` fixed inset-y-0 left-0 bg-white shadow transform transition-transform duration-300 z-30 md:relative md:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } w-64 `}
            >
                <nav className="flex py-4 flex-col gap-2 h-full">
                    <div className="px-4 ">
                        <Image className="h-6 w-auto" src="/img/logo.png" alt="logo" width={100} height={100} />
                    </div>

                    {/* sidebar menu */}
                    <ul className=" overflow-y-auto vertical-scrollbar w-full flex flex-col gap-2 px-4 ">
                        <div className="py-4 w-full flex flex-col gap-2">
                            {/* menu */}
                            {dashboard.map((nav, index) => (
                                <DashboardLink
                                    key={index}
                                    active={path === nav.route}
                                    route={nav.route}
                                    label={nav.label}
                                    heroIcon={nav.icon}
                                    onClose={() => setIsSidebarOpen(false)}
                                />
                            ))}
                        </div>
                    </ul>
                </nav>
            </div>

            {/* Overlay for mobile when sidebar is open */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-20 md:hidden backdrop-blur-[2px]"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}

            {/* Main Content Area */}
            <div className="flex flex-col flex-1">
                {/* Sticky Header */}
                <header className="sticky top-0 bg-white shadow-sm py-3 flex justify-between items-center z-10 px-5 md:px-8">
                    <div className="flex items-center gap-4 sm:gap-0 ">
                        {/* Hamburger Icon (Visible on mobile) */}
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="md:hidden outline-none "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                        <Link
                            href="#"
                            className=" text-gray-400"
                        >
                            <h1 className="text-sm font-medium ">{pageTitle()}</h1>
                        </Link>
                    </div>

                    {/* wallet icon & Bell Icon */}
                    <div className="w-fit flex flex-row items-center gap-2">
                        <div
                            href="#"
                            className="text-xl text-indigo-900 px-2 py-1 rounded-full transition-all duration-200 hover:bg-indigo-100"
                        >
                            <i class="ri-wallet-3-line ri-1x"></i>
                        </div>
                        <div
                            href="#"
                            className="text-xl text-indigo-900 px-2 py-1 rounded-full transition-all duration-200 hover:bg-indigo-100"
                        >
                            <i className="ri-notification-4-line ri-1x"></i>
                        </div>
                        <div onClick={() => setIsProfileOpen(!isProfileOpen)} className="cursor-pointer">
                            <Image className="h-10 w-10 rounded-full" src="/img/user.jpg" alt="user" width={100} height={100} />
                        </div>
                    </div>
                    {/* profile nav */}
                    {
                        isProfileOpen &&
                        <nav className="absolute top-14 right-7">
                            <ul className=" w-full flex flex-col gap-2 bg-white p-4 border rounded-lg">
                                <div className=" w-full flex flex-col gap-2">
                                    {/* menu */}
                                    {profile.map((nav, index) => (
                                        <ProfileLink
                                            key={index}
                                            active={path === nav.route}
                                            route={nav.route}
                                            label={nav.label}
                                            heroIcon={nav.icon}
                                            onClose={() => setIsProfileOpen(false)}
                                        />
                                    ))}
                                </div>
                            </ul>
                        </nav>
                    }
                </header>

                {/* Page Content */}
                <main className="max-w-[100vw] flex-1 p-4 overflow-y-auto">{children}</main>
            </div>
        </div>
    );
}