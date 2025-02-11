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
        <div className="flex h-screen">
            {/* Sidebar - Hidden on small screens, always visible on medium and larger */}
            <div
                className={` fixed inset-y-0 left-0 bg-white shadow overflow-y-auto vertical-scrollbar transform transition-transform duration-300 z-30 md:relative md:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } w-64 `}
            >
                {/* logo */}
                <div className="p-4 sticky top-0 bg-white">
                    <h1 className="text-2xl bg-gradient-to-tr from-primary to-secondary bg-clip-text text-transparent font-extrabold">LOGO</h1>
                </div>

                <nav className="flex pb-4 flex-col gap-2">
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

                <div className="p-4 flex flex-col gap-6">
                    {/* indices */}
                    <div className="border relative rounded-lg p-4">
                        <span className="absolute -top-3 bg-white px-2 text-sm">Indices</span>
                        <div className="flex flex-col font-semibold text-xs text-gray-800">
                            <h3>NIFTY <span className="ps-3 text-red-500">23071.80 -1.32 %</span></h3>
                            <h3>BNF <span className="ps-3 text-red-500">49403.40 -1.16 %</span></h3>
                            <h3>FN <span className="ps-3 text-red-500">23089.60 -1.33 %</span></h3>
                        </div>
                    </div>

                    {/* help desk */}
                    <div className="border relative rounded-lg p-4">
                        <span className="absolute -top-3 bg-white px-2 text-sm">Help Desk</span>
                        <div className="flex flex-col gap-1 font-semibold text-primary text-xs">
                            <h3><i className="ri-phone-fill"></i> Call us +91 98765 43210</h3>
                            <h3><i className="ri-message-3-line"></i> Chat with us!</h3>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="border relative rounded-lg p-4">
                        <span className="absolute -top-3 bg-white px-2 text-sm">join Us</span>
                        <div className="flex flex-col gap-1 font-semibold text-gray-800 text-xs">
                            <h3><i className="ri-youtube-fill text-red-600"></i> <span className="ps-1">how to use?</span> </h3>
                            <h3><i className="ri-telegram-fill text-sky-600"></i> <span className="ps-1">Realtime Updates</span></h3>
                            <h3><i className="ri-instagram-fill text-pink-600"></i> <span className="ps-1">Join Instagram</span></h3>
                        </div>
                    </div>
                </div>
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
                            <i className="ri-menu-2-line ri-lg"></i>
                        </button>
                        <Link
                            href="#"
                            className=" text-gray-400"
                        >
                            <h1 className="text-sm font-medium ">{pageTitle()}</h1>
                        </Link>
                    </div>

                    {/* wallet icon & Bell Icon */}
                    <div className="w-fit flex flex-row items-center">
                        <div
                            href="#"
                            className="text-xl text-primary px-2 py-1 rounded-full transition-all duration-200 hover:bg-background"
                        >
                            <i className="ri-wallet-3-line ri-1x"></i>
                        </div>
                        <div
                            href="#"
                            className="text-xl text-primary px-2 py-1 rounded-full transition-all duration-200 hover:bg-background"
                        >
                            <i className="ri-notification-4-line ri-1x"></i>
                        </div>
                        <div onClick={() => setIsProfileOpen(!isProfileOpen)} className="cursor-pointer ms-2">
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