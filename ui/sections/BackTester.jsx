const BackTester = () => {
    return (
        <div className="flex flex-col gap-5">
            <h2 className="text-gray-800 font-medium text-lg">Backtest for Advanced Delta Neutral</h2>
            <section className="flex flex-col lg:flex-row justify-between gap-4 text-sm">
                <select className=" w-full lg:w-1/3 border rounded-md appearance-none outline-none p-3">
                    <option defaultValue="select" disabled>Select Strategy</option>
                    <option>Advanced Delta Neutral</option>
                    <option>Time 9.16</option>
                </select>

                {/* date */}
                <ul className="flex items-center gap-3 text-xs text-nowrap overflow-x-auto">
                    <li className="text-primary font-medium bg-indigo-100 hover:text-white hover:bg-primary cursor-pointer p-2 rounded-md">1 Month</li>
                    <li className="text-primary font-medium bg-indigo-100 hover:text-white hover:bg-primary cursor-pointer p-2 rounded-md">3 Month</li>
                    <li className="text-primary font-medium bg-indigo-100 hover:text-white hover:bg-primary cursor-pointer p-2 rounded-md">6 Months</li>
                    <li className="text-primary font-medium bg-indigo-100 hover:text-white hover:bg-primary cursor-pointer p-2 rounded-md">1 Year</li>
                    <li className="text-primary font-medium bg-indigo-100 hover:text-white hover:bg-primary cursor-pointer p-2 rounded-md">2 Years</li>
                    <li className="text-primary font-medium bg-indigo-100 hover:text-white hover:bg-primary cursor-pointer p-2 rounded-md">Custom Range</li>
                </ul>
            </section>

            {/* backtest credit */}
            <section className="flex items-center justify-between border rounded-lg p-4 text-sm">
                <h4 className="text-gray-600 rounded-md ">Backtest credit: 47/50</h4>
                <button className="text-sm text-primary border p-2 border-primary/40 px-2 rounded-md">Export to PDF</button>
            </section>
        </div>
    )
}

export default BackTester;