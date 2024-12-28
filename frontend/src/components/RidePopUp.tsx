interface RidePopUpProps {
    setRidePopupPanel: (value: boolean) => void;
    setConfirmRidePopupPanel: (value: boolean) => void;
}

const RidePopUp = (props: RidePopUpProps) => {
    return (
        <div className="p-8 bg-white rounded-xl shadow-xl max-w-md mx-auto border border-gray-200 relative">
            {/* Close Button */}
            <h5
                className="p-1 text-center absolute top-2 left-1/2 transform -translate-x-1/2 cursor-pointer"
                onClick={() => { props.setRidePopupPanel(false); }}
            >
                <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
            </h5>

            {/* Header */}
            <div className="flex items-center  justify-between space-x-4 mb-6 mt-5">
                <img
                    className="w-16 h-16 rounded-full border-2 border-gray-400 shadow-sm"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s"
                    alt="Driver"
                />
                <div>
                    <h1 className="text-xl font-bold text-gray-800">Ride Details</h1>
                    <p className="text-sm text-gray-500">
                        Ride ID: <span className="font-medium text-gray-700">123456</span>
                    </p>
                    <p className="text-sm text-gray-500">
                        Distance: <span className="font-medium text-gray-700">2.5 miles away</span>
                    </p>
                    <p className="text-sm text-gray-500">
                        User: <span className="text-lg font-bold text-black">John Doe</span>
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
                {/* Locations */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Pickup Location</h2>
                        <p className="text-base text-gray-700">123, 4th Street, New York</p>
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Drop Location</h2>
                        <p className="text-base text-gray-700">456, 7th Avenue, New York</p>
                    </div>
                </div>
                {/* Times */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Pickup Time</h2>
                        <p className="text-base text-gray-700">12:00 PM</p>
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Drop Time</h2>
                        <p className="text-base text-gray-700">12:30 PM</p>
                    </div>
                </div>
                {/* Fare */}
                <div>
                    <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Fare Price</h2>
                    <p className="text-lg font-bold text-gray-800">$25.00</p>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center space-x-4 mt-6">
                    <button
                        onClick={() => {
                            props.setRidePopupPanel(false);
                            props.setConfirmRidePopupPanel(true);
                        }}
                        className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 shadow-md transition duration-300"
                    >
                        Accept
                    </button>
                    <button
                        onClick={() => {
                           props.setRidePopupPanel(false);
                        }}
                        className="bg-white text-black border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white shadow-md transition duration-300"
                    >
                        Ignore
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RidePopUp;
