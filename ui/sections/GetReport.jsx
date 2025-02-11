"use client"
import { useState } from "react"

const GetReport = () => {

    const [isDashboard, setIsDashboard] = useState(true);
    const [isTrade, setIsTrade] = useState(false);

    return (
        <section>
            <div className="flex gap-3 text-xs font-medium">
                <button onClick={() => { setIsTrade(false); setIsDashboard(true) }} className={`text-indigo-900  p-2 rounded-md ${isDashboard && "bg-indigo-100"}`}>Dashboard</button>
                <button onClick={() => { setIsDashboard(false); setIsTrade(true) }} className={`text-indigo-900 p-2 rounded-md ${isTrade && "bg-indigo-100"}`}>Trade Engine Logs</button>
            </div>

            {/* Get report */}
            {
                isDashboard &&
                <form className="text-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4 mt-5">
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-1 w-1/2 lg:w-64">
                            <label className="font-semibold ">From</label>
                            <input className="border rounded-md w-full  p-2 outline-none" type="date" name="from" />
                        </div>
                        <div className="flex flex-col gap-1 w-1/2 lg:w-64">
                            <label className="font-semibold ">To</label>
                            <input className="border rounded-md w-full p-2 outline-none" type="date" name="to" />
                        </div>
                    </div>

                    <button className="text-indigo-900 border border-indigo-900 rounded-md h-fit p-2">Get Reports <i className="ri-download-cloud-2-line"></i></button>
                </form>
            }
        </section>
    )
}

export default GetReport