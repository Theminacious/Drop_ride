import { useNavigate } from "react-router-dom";

interface ConfirmRidePopUpProps {
    setConfirmRidePopupPanel: (value: boolean) => void;
}

const ConfirmRidePopUp = ({ setConfirmRidePopupPanel }: ConfirmRidePopUpProps) => {
    const navigate = useNavigate()

    // Sample Ride Data (You would normally fetch this from an API or pass it as a prop)
    const rideData = {
        pickupLocation: "123 Main Street, Anytown",
        dropLocation: "456 Oak Avenue, Anytown",
        pickupTime: "10:00 AM",
        fare: "15.50",
    };

    const handleConfirm = () => {
       navigate('/captain-riding')
        setConfirmRidePopupPanel(false);
    };

    return (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full p-8 relative rounded-2xl shadow-lg">
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition duration-200"
                    onClick={() => setConfirmRidePopupPanel(false)}
                >
                    <i className="ri-close-line text-2xl"></i>
                </button>

                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Confirm Your Ride</h2>
                    <p className="mt-2 text-gray-600">Please review the details below before confirming.</p>
                </div>

                <div className="space-y-8">
                    <div className="flex items-center">
                        <i className="ri-map-pin-line text-xl mr-3 text-gray-500"></i>
                        <div>
                            <h3 className="text-lg font-medium text-gray-800">Pickup</h3>
                            <p className="text-gray-600 truncate">{rideData.pickupLocation}</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <i className="ri-flag-line text-xl mr-3 text-gray-500"></i>
                        <div>
                            <h3 className="text-lg font-medium text-gray-800">Dropoff</h3>
                            <p className="text-gray-600 truncate">{rideData.dropLocation}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <div className="flex items-center">
                                <i className="ri-time-line text-lg mr-2 text-gray-500"></i>
                                <h3 className="text-base font-medium text-gray-800">Time</h3>
                            </div>
                            <p className="mt-1 text-gray-600">{rideData.pickupTime}</p>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <i className="ri-money-dollar-circle-line text-lg mr-2 text-green-500"></i>
                                <h3 className="text-base font-medium text-gray-800">Fare</h3>
                            </div>
                            <p className="mt-1 text-xl font-semibold text-green-600">${rideData.fare}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row sm:justify-between gap-4">
                    <button
                        onClick={handleConfirm}
                        className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-300"
                    >
                        Confirm Ride
                    </button>
                    <button
                        onClick={() => setConfirmRidePopupPanel(false)}
                        className="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition duration-300"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmRidePopUp;
 
