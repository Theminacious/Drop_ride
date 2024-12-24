import React, { useState, useEffect } from 'react';

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

interface WaitForDriverProps {
    waitingForDriver: (value: boolean) => void;
}

const WaitForDriver: React.FC<WaitForDriverProps> = (props) => {
    const [driverDetails, setDriverDetails] = useState<DriverDetails | null>(null);

    useEffect(() => {
        const fetchDriverDetails = async () => {
            // Example data to simulate API response
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

    const driverDetailsArray = [
        {
            icon: "ri-map-pin-2-fill",
            title: driverDetails.pickupLocation,
            subtitle: driverDetails.pickupAddress,
        },
        {
            icon: "ri-map-pin-2-fill",
            title: driverDetails.dropoffLocation,
            subtitle: driverDetails.dropoffAddress,
        },
        {
            icon: "ri-currency-line",
            title: `₹${driverDetails.fare}`,
            subtitle: driverDetails.paymentMethod,
        },
    ];

    return (
        <div>
            <h5
                className="p-3 text-center w-[93%] absolute top-0"
                onClick={() => {
                    props.waitingForDriver(false);
                }}
            >
                <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
            </h5>
            <div className="flex items-center p-3 relative">
                {/* Car Image */}
                <img
                    className="h-12 rounded-full relative z-0 ml-35"
                    src={driverDetails.carImage}
                    alt={driverDetails.carModel}
                />
                {/* Driver Info */}
                <div className="absolute right-0">
                    <h2 className="text-lg font-medium">{driverDetails.name}</h2>
                    <h4 className="text-xl font-semibold -mt-1 -mb-1">{driverDetails.licensePlate}</h4>
                    <p className="text-sm text-gray-500">{driverDetails.carModel}</p>
                </div>
                {/* Driver Image */}
                <img
                    className="h-12 rounded-full absolute  z-10"
                    src={driverDetails.image}
                    alt={driverDetails.name}
                />
            </div>

            <div className="flex gap-2 justify-between flex-col items-center">
                <div className="w-full mt-5">
                    {driverDetailsArray.map((detail, index) => (
                        <div key={index} className="flex items-center gap-5 p-3 border-b-2">
                            <i className={`text-lg ${detail.icon}`}></i>
                            <div>
                                <h3 className="text-lg font-medium">{detail.title}</h3>
                                <p className="text-sm -mt-1 text-gray-600">{detail.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WaitForDriver;
