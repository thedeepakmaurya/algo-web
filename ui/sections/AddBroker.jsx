"use client"
import Image from "next/image";
import { useState } from "react";
import ModalOverlay from "../common/modal_overlay";
import Tutorial from "../components/Tutorial";

const AddBroker = () => {

    const [isTutorial, setIsTutorial] = useState(false);

    return (
        <section className="flex flex-col gap-4 text-gray-800">
            <h2 className="font-medium text-lg">Add new broker</h2>
            {/* broker */}
            <div className="flex items-center gap-4">
                <Image className="w-16 h-16 border-4 border-indigo-100 rounded-full" src="/img/dhan_logo.png" alt="dhan" height={100} width={100} />
                <div>
                    <h3 className="font-medium pb-1">Dhan</h3>
                    <p onClick={() => setIsTutorial(true)} className="text-sm cursor-pointer">How to add Dhan broker? <i className="ri-youtube-fill text-red-600"></i></p>
                </div>
            </div>
            {/* form  */}
            <form className="text-sm flex flex-col gap-4 w-full lg:w-1/3">
                <input className="border border-gray-300 rounded-lg outline-none p-4" type="text" placeholder="Enter Broker ID" />
                <button className="bg-gradient-to-tr from-indigo-900 to-indigo-400 p-2 font-bold text-white rounded-md">Submit</button>
            </form>

            {/* tutorial */}
            {
                isTutorial && <ModalOverlay content={<Tutorial source="https://www.youtube.com/embed/Y7x6-HYv9c8?si=YCMjZThUbdBtbf-2" onClose={() => setIsTutorial(false)}/>} onClose={() => {}} />
            }
        </section>
    )
};

export default AddBroker;