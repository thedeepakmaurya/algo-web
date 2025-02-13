import Link from "next/link"

const MyStrategies = () => {
    return (
        <div className="border rounded-lg h-60 w-full lg:w-1/3 relative">
            <div className="flex items-center justify-between border-b p-3">
                <div>
                    <h2 className="font-semibold text-base text-gray-800 mb-1">Advanced Delta Neutral</h2>
                    <h5 className="text-xs font-bold text-gray-600">By AR144271</h5>
                </div>
                {/* edit button */}
                <div className="bg-background p-1 rounded-md">
                    <Link href=""><i className="ri-pencil-fill text-primary ri-lg"></i></Link>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 px-2 py-4">
                <div className="text-xs font-bold text-gray-600">
                    <h2><i className="ri-timer-line text-gray-800 font-normal"></i> Start Time <span className="ms-4 text-green-600 font-medium">09:22</span></h2>
                    <h2><i className="ri-timer-line text-gray-800 font-normal"></i> End Time <span className="ms-4 text-red-600 font-medium">15:11</span></h2>
                </div>
                <div className="text-xs font-bold text-gray-600">
                    <h2>Segment Type <span className="ms-4 font-medium">OPTION</span></h2>
                    <h2> Strategy Type <span className="ms-4 text-gray-900 font-medium">Time</span></h2>
                </div>
            </div>

            <div className="px-2 text-gray-600 text-xs flex gap-2">
                <button className="bg-gray-100 p-1 rounded-sm">SELL NIFTY BANK ATM 0 CE</button>
                <button className="bg-gray-100 p-1 rounded-sm">SELL NIFTY BANK ATM 0 PE</button>
            </div>

            <div className="absolute w-full bottom-0 border-t p-3 text-xs flex justify-center gap-4">
                <Link href="/backtest" className="text-primary  bg-background py-2 px-4 rounded-md font-medium">Back Test</Link>
                <button className="text-primary bg-background py-2 px-4 rounded-md font-medium">Deploy</button>
            </div>
        </div>
    )
}

export default MyStrategies