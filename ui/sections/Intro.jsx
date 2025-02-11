import Link from "next/link"

const Intro = () => {
    return (
        <section className="h-fit flex flex-col lg:flex-row lg:items-center justify-between gap-2">
            <h1 className=" text-2xl font-bold"><span className="bg-gradient-to-tr from-primary to-secondary bg-clip-text text-transparent">Hello, Deepak </span>👋</h1>
            <Link className="w-fit bg-gradient-to-tr from-primary to-secondary text-white text-sm font-medium py-2 px-4 rounded-md" href="/brokers"><i className="ri-add-fill ri-lg"></i> Add Broker</Link>
        </section>
    )
}

export default Intro