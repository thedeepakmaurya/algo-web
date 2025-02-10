import Link from "next/link";

const DashboardLink = ({
    active = false,
    label = "Label",
    heroIcon,
    route = "#",
    onClose
}) => {
    return (
        <li onClick={onClose} className="w-full">
            <Link
                href={route}
                className={`${active
                    ? "bg-indigo-100 text-indigo-500"
                    : "bg-transparent text-gray-400"
                    } w-full hover:bg-indigo-50 hover:text-indigo-400 rounded-md py-2.5 px-3 flex flex-row items-center gap-1.5 transition-all duration-200`}
            >
                <span><i className={`${heroIcon} ri-lg`}></i></span>
                <span className="pt-[1px] font-[500] text-md capitalize">
                    {label}
                </span>
            </Link>
        </li>
    );
};

export default DashboardLink;