import transactions from "@/public/db/transactions.json"
function TransactionDetails() {
    return (
        <section>
            <div className="flex lg:flex-row flex-col lg:items-center justify-between gap-4 px-4">
                <h3 className="font-semibold text-gray-600 text-sm ">Transaction Details</h3>
                <button className="w-full lg:w-fit bg-gradient-to-tr  from-primary to-secondary text-white text-sm font-medium py-2 px-4 rounded-md">Export Transactions to Excel <i className="ri-download-cloud-2-line"></i></button>
            </div>
            <div className="mt-4 flex flex-col gap-4">

                {
                    transactions.map((item, index) => {
                        return (
                            <div key={index} className="flex justify-between p-6 border rounded-lg text-sm">
                                <h5 className="font-semibold text-base text-gray-500">{item.date}</h5>
                                <p className="text-gray-60">Profit/Loss: <span className="text-green-600 text-md">{item.stat}</span></p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
};

export default TransactionDetails