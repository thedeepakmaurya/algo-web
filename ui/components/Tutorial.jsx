
const Tutorial = ({ source, onClose }) => {
    return (
        <div className="bg-white rounded-lg">
            <div className="p-4 border-b border-b-indigo-900 flex items-center justify-between">
                <h1 className="text-indigo-900 font-semibold text-lg">How to add Dhan Broker? <i className="ri-youtube-fill text-red-600 ri-xl"></i></h1> <i onClick={onClose} className="ri-close-line text-indigo-900 ri-xl cursor-pointer"></i>
            </div>
            {/* youtube video */}
            <div>
                <iframe src={source} className="w-full h-48 lg:h-80 rounded-b-lg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboardWrite; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default Tutorial