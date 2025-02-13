import summary from '@/public/db/summary.json';
const BacktestSummary = () => {
    return (
        <section>
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
        </section>
    )
};

export default BacktestSummary;