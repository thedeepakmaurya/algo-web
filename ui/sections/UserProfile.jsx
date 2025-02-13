import Image from "next/image"
import Link from "next/link"

const UserProfile = () => {

    const user = "deepakmaurya";

    return (
        <div className="flex flex-col gap-4">
            <section className="flex flex-col lg:flex-row gap-4">
                {/* profile image */}
                <div className="flex justify-center lg:block">
                    <Image className=" rounded-xl w-40 h-40 object-cover" src="/img/user.jpg" alt="user" width={100} height={100} />
                </div>

                {/* information */}
                <div className="flex flex-col lg:flex-row flex-1 justify-between gap-4">
                    <div className="w-full flex flex-col gap-2">
                        <h1 className="text-primary font-bold text-2xl">Deepak Maurya</h1>
                        <div className="text-sm text-gray-700 flex flex-wrap gap-4">
                            <h2><i className="ri-user-6-fill"></i> AR008978</h2>
                            <Link href="tel:+910000480692"><i className="ri-phone-line"></i> +91 00004 80692</Link>
                            <Link href="mailto:example@gmail.com"><i className="ri-mail-open-line"></i> example@gmail.com</Link>
                        </div>

                        {/* wallet details */}
                        <div className="w-full grid lg:grid-cols-3 gap-4 mt-3">
                            <div className="border rounded-lg py-3 px-2 flex items-center gap-4">
                                <i className="ri-wallet-fill ri-xl"></i>
                                <div>
                                    <h2 className="font-semibold text-gray-600 text-xl">0.00</h2>
                                    <p className="text-sm text-gray-800">Wallet Amount</p>
                                </div>
                            </div>

                            <div className="border rounded-lg py-3 px-2 flex items-center gap-4">
                                <i className="ri-bank-card-fill ri-xl"></i>                                <div>
                                    <h2 className="font-semibold text-gray-600 text-xl">49.0</h2>
                                    <p className="text-sm text-gray-800">Backtest Credit</p>
                                </div>
                            </div>

                            <div className="border rounded-lg py-3 px-2 flex items-center gap-4">
                                <i className="ri-wallet-fill ri-xl"></i>
                                <div>
                                    <h2 className="font-semibold text-gray-600 text-xl">Free Plan</h2>
                                    <p className="text-sm text-gray-800">Active Plan</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* edit button */}
                    <Link className="text-sm text-center font-medium px-4 py-2 border h-fit rounded-md border-primary/40 text-nowrap" href={`/profile/${user}`} ><i className="ri-pencil-line"></i> Edit Profile</Link>
                </div>
            </section>

            {/* referral */}
            <section className="">
                <h3 className="text-sm font-medium text-gray-600 mb-3">Refferal Link: <span className="text-blue-500 font-normal"> https://web.algorooms.com/login?referral_code=AR144271 </span> <i className="ri-file-copy-line ri-lg cursor-pointer"></i></h3>
                <p className="text-gray-400 text-xs">Joined on 20/06/2024</p>
            </section>
        </div>
    )
};

export default UserProfile