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
                    ? "bg-background text-primary"
                    : "bg-transparent text-gray-400"
                    } w-full hover:bg-indigo-50 hover:text-primary rounded-md py-2 px-3 flex flex-row items-center gap-3 transition-all duration-200`}
            >
                <span><i className={`${heroIcon} ri-md`}></i></span>
                <span className="pt-[1px] font-[500] text-sm capitalize">
                    {label}
                </span>
            </Link>
        </li>
    );
};

export default DashboardLink;