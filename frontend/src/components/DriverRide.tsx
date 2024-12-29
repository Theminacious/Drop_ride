import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
import gsap from 'gsap';

interface RideDetails {
  pickupLocation: string;
  dropLocation: string;
  pickupTime: string;
  fare: string;
  distance: string;
  directions: string;
}

interface DriverRideProps {
    setFinishRidePanel: (value: boolean) => void;
    setDriverRidePanel: (value: boolean) => void;
}

const DriverRide: React.FC<DriverRideProps> = (props) => {
    const [rideDetails] = useState<RideDetails>({
        pickupLocation: '123 Main Street, Anytown',
        dropLocation: '456 Oak Avenue, Anytown',
        pickupTime: '10:00 AM',
        fare: '15.50',
        distance: '4 KM',
        directions: 'Turn right at the next intersection, then continue straight.',
    });

    const [confirmRidePanel, setConfirmRidePanel] = useState<boolean>(false);
    const confirmRidePanelRef = useRef<HTMLDivElement>(null);

    const showConfirmationPanel = (): void => {
        setConfirmRidePanel(true);
    };

    const hideConfirmationPanel = (): void => {
        setConfirmRidePanel(false);
    };

    useEffect(() => {
        if (confirmRidePanel) {
            gsap.to(confirmRidePanelRef.current, {
                duration: 0.5,
                transform: 'translateY(0%)',
                ease: 'power2.inOut',
            });
        } else {
            gsap.to(confirmRidePanelRef.current, {
                duration: 0.5,
                transform: 'translateY(100%)',
                ease: 'power2.inOut',
            });
        }
    }, [confirmRidePanel]);

    return (
        <div className="h-screen flex flex-col relative bg-gray-100">
            {/* Ride Details */}
            <div className="flex-1 relative p-4">
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Ride Details</h2>

                    <div className="space-y-6">
                        {/* Pickup and Drop Locations */}
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center">
                                <i className="ri-map-pin-line text-xl mr-3 text-gray-500"></i>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800">Pickup</h3>
                                    <p className="text-gray-600">{rideDetails.pickupLocation}</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <i className="ri-flag-line text-xl mr-3 text-gray-500"></i>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800">Dropoff</h3>
                                    <p className="text-gray-600">{rideDetails.dropLocation}</p>
                                </div>
                            </div>
                        </div>

                        {/* Distance and Directions */}
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <i className="ri-road-map-line text-xl mr-3 text-gray-500"></i>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800">Distance</h3>
                                    <p className="text-gray-600">{rideDetails.distance}</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <i className="ri-compass-line text-xl mr-3 text-gray-500"></i>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800">Directions</h3>
                                    <p className="text-gray-600">{rideDetails.directions}</p>
                                </div>
                            </div>
                        </div>

                        {/* Fare and Time */}
                        <div className="flex space-x-6">
                            <div className="flex flex-col">
                                <h3 className="text-lg font-medium text-gray-800">Fare</h3>
                                <p className="text-xl font-semibold text-green-600">${rideDetails.fare}</p>
                            </div>

                            <div className="flex flex-col">
                                <h3 className="text-lg font-medium text-gray-800">Time</h3>
                                <p className="text-lg text-gray-600">{rideDetails.pickupTime}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Confirm Ride Button */}
                <div className="mt-6 flex justify-center">
                    <button
                        onClick={showConfirmationPanel}
                        className="bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition duration-300 text-lg font-medium"
                    >
                        Confirm Ride
                    </button>
                </div>
            </div>

            {/* Confirmation Panel */}
           
                <div ref={confirmRidePanelRef} className=" fixed bottom-0 left-0 w-full bg-white px-6 py-4 rounded-t-3xl shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800">Are you sure you want to confirm the ride?</h2>
                    <p className="text-lg text-gray-600 mt-2">Once confirmed, the ride will be started.</p>

                    <div className="flex justify-between mt-6">
                        <button
                            onClick={hideConfirmationPanel}
                            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full shadow-md hover:bg-gray-300 transition duration-200"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => {
                                props.setFinishRidePanel(true);
                                props.setDriverRidePanel(false);
                            }}
                            className="bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition duration-300"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            
        </div>
    );
};

export default DriverRide;
