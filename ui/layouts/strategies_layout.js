"use client"
import Link from "next/link";
import menu from "@/public/db/strategies.json";
import { usePathname } from "next/navigation";

const StrategiesLayout = ({ children }) => {

    const path = usePathname();

    return (
        <div>
            <ul className="flex items-center gap-4 mb-4 pb-2 overflow-x-auto">
                {
                    menu.map((strategy, index) => {

                        const isActive = strategy.route === path ? "bg-background  p-2  rounded-md" : "";

                        return (
                            <li className={`capitalize text-xs text-primary font-medium text-nowrap ${isActive}`} key={index} >
                                <Link href={strategy.route}>{strategy.label}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            {children}
        </div>
    )
}

export default StrategiesLayout