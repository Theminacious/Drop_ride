import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface DriverDetails {
    image: string;
    name: string;
    licensePlate: string;
    carModel: string;
    carImage: string;
    pickupLocation: string;
    pickupAddress: string;
    dropoffLocation: string;
    dropoffAddress: string;
    fare: number;
    paymentMethod: string;
}

const Riding: React.FC = () => {
    const [driverDetails, setDriverDetails] = useState<DriverDetails | null>(null);

    useEffect(() => {
        const fetchDriverDetails = async () => {
            const data = {
                image: "https://randomuser.me/api/portraits/men/75.jpg",
                name: "John Doe",
                licensePlate: "AB123CD",
                carModel: "Toyota Prius",
                carImage: "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_1280.jpg",
                pickupLocation: "Sector 17 Plaza",
                pickupAddress: "Chandigarh, India",
                dropoffLocation: "Phase 3B2",
                dropoffAddress: "Mohali, India",
                fare: 350,
                paymentMethod: "Credit Card",
            };
            setDriverDetails(data);
        };

        fetchDriverDetails();
    }, []);

    if (!driverDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="h-screen relative overflow-hidden">
            <Link to="/home" className="fixed h-10 w-10 bg-white rounded-full flex items-center justify-center top-5 right-5 z-10">
                <i className=" text-lg font-medium ri-home-5-line"></i>
            </Link>
            {/* Top Half with Background Image */}
            <div className="h-1/2 relative">
                <img
                    className="h-full w-full object-cover"
                    src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                    alt="Riding"
                />

                {/* Driver and Car Info */}
                <div className="h-1/2 p-4">
                    <div className="flex items-center justify-between">
                        <img
                            className="h-12 rounded-full"
                            src={driverDetails.carImage}
                            alt={driverDetails.carModel}
                        />
                        <div className="text-right">
                            <h2 className="text-lg font-medium capitalize">{driverDetails.name}</h2>
                            <h4 className="text-xl font-semibold -mt-1 -mb-1">{driverDetails.licensePlate}</h4>
                            <p className="text-sm text-gray-600">{driverDetails.carModel}</p>
                        </div>
                    </div>

                    {/* Details of Pickup and Dropoff */}
                    <div className="flex gap-2 justify-between flex-col items-center">
                        <div className="w-full mt-5">
                            {/* Pickup Info */}
                            <div className="flex items-center gap-5 p-3 border-b-2">
                                <i className="text-lg ri-map-pin-2-fill"></i>
                                <div>
                                    <h3 className="text-lg font-medium">{driverDetails.pickupLocation}</h3>
                                    <p className="text-sm -mt-1 text-gray-600">{driverDetails.pickupAddress}</p>
                                </div>
                            </div>

                            {/* Dropoff Info */}
                            <div className="flex items-center gap-5 p-3 border-b-2">
                                <i className="text-lg ri-map-pin-2-fill"></i>
                                <div>
                                    <h3 className="text-lg font-medium">{driverDetails.dropoffLocation}</h3>
                                    <p className="text-sm -mt-1 text-gray-600">{driverDetails.dropoffAddress}</p>
                                </div>
                            </div>

                            {/* Fare Info */}
                            <div className="flex items-center gap-5 p-3">
                                <i className="ri-currency-line"></i>
                                <div>
                                    <h3 className="text-lg font-medium">₹{driverDetails.fare}</h3>
                                    <p className="text-sm -mt-1 text-gray-600">{driverDetails.paymentMethod}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Payment Button */}
                    <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">
                        Make a Payment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Riding;
