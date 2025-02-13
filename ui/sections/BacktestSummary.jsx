import summary from '@/public/db/summary.json';
const BacktestSummary = () => {
    return (
        <section className='flex flex-col gap-4'>
            <h3 className="font-semibold text-gray-600 text-sm px-4">Backtest Summary</h3>
            {/* trading data */}
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    summary.map((item, index) => {
                        return (
                            <div key={index} className='border rounded-lg'>
                                <div className='p-4 flex items-center justify-between border-b'>
                                    <h1 className='capitalize text-sm font-semibold'>{item.title}</h1> <span className='text-xl font-bold text-gray-400'>{item.count}</span>
                                </div>
                                {
                                    item.data.map((detail, index) => {
                                        return (
                                            <div key={index} className='flex items-end justify-between  p-4 border-b last:border-b-0'>
                                                <div>
                                                    <h3 className='capitalize font-medium text-sm mb-1'>{detail.days}</h3>
                                                    <h2 className='text-xl font-bold text-gray-400'>{detail.percent} %</h2>
                                                </div>
                                                <p className='text-xs text-green-600 font-medium bg-green-50 py-1 px-2 rounded-sm'><i className="ri-arrow-up-s-fill ri-lg"></i> {detail.compare}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>

            {/* max and average */}
            <div className='grid  grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='border rounded-lg'>
                    <div className='border-b p-4'>
                        <h3 className='capitalize font-medium text-sm mb-1'>Streak</h3>
                        <div className='flex justify-between'>
                            <h2 className='text-xs font-bold text-gray-400'>Wins <span className='ps-2 text-green-600'><i className="ri-arrow-up-s-fill"></i> 2</span></h2>
                            <h2 className='text-xs font-bold text-gray-400'>Loss <span className='ps-2 text-red-600'><i className="ri-arrow-down-s-fill"></i> 4</span></h2>
                        </div>
                    </div>

                    {/* max profit and loss */}
                    <div className=' p-4 flex justify-between'>
                        <div>
                            <h3 className='capitalize font-medium text-sm mb-1'>Max Profit</h3>
                            <h2 className='text-xl font-bold text-green-600'>11.21K</h2>
                        </div>
                        <div className=''>
                            <h3 className='capitalize font-medium text-sm mb-1'>Max Loss</h3>
                            <h2 className='text-xl font-bold text-red-600'>2.50K</h2>
                        </div>
                    </div>
                </div>

                <div className='border rounded-lg'>
                    {/* max profit and loss */}
                    <div className=' p-4 border-b flex justify-between'>
                        <div>
                            <h3 className='capitalize font-medium text-sm mb-1'>Max Profit</h3>
                            <h2 className='text-xl font-bold text-green-600'>11.21K</h2>
                        </div>
                        <div className=''>
                            <h3 className='capitalize font-medium text-sm mb-1'>Max Loss</h3>
                            <h2 className='text-xl font-bold text-red-600'>2.50K</h2>
                        </div>
                    </div>

                    {/* average profit and loss */}
                    <div className=' p-4 flex items-center justify-between'>
                        <div>
                            <h3 className='capitalize font-medium text-sm mb-1'>Max Breakdown</h3>
                            <h2 className='text-xs font-bold text-gray-400'>From Peak <span className='ps-2 text-red-600'><i className="ri-arrow-down-s-fill"></i></span></h2>
                        </div>
                        <div className='border-2 border-dashed p-6 border-red-600 rounded-full flex justify-center items-center w-10 h-10 '>
                            <p className=' text-xs font-semibold text-red-600'>10.17K</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default BacktestSummary;