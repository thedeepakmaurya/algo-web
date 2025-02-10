import Link from "next/link"

const Intro = () => {
    return (
        <section className="h-fit flex flex-col lg:flex-row lg:items-center justify-between gap-2">
            <h1 className="text-indigo-900 text-2xl font-bold">Hello, Deepak 👋</h1>
            <Link className="w-fit bg-gradient-to-tr from-indigo-950 to-indigo-400 text-white text-sm font-medium py-2 px-4 rounded-lg" href="/brokers"><i class="ri-add-fill ri-lg"></i> Add Broker</Link>
        </section>
    )
}

export default Intro