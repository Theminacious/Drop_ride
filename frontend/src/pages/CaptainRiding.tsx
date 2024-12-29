import  { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import FinishRide from '../components/FinishRide';
import gsap from 'gsap';
import DriverRide from '../components/DriverRide';

const CaptainRiding = () => {
 const finishRideRef = useRef<HTMLDivElement>(null);
 const [finishRidePanel, setFinishRidePanel] = useState(false)
  const DriverRideRef = useRef<HTMLDivElement>(null);
  const [DriverRidePanel, setDriverRidePanel] = useState(false)

  useEffect(() => {
    if (finishRidePanel) {
      gsap.to(finishRideRef.current, {
        duration: 0.1,
        transform: "translateY(0%)",
        ease: "power2.inOut",
      });
      
    } else {
      gsap.to( finishRideRef.current, {
        duration: 0.1,
        transform: "translateY(100%)",
        ease: "power2.inOut",
      });
    }
  }, [finishRidePanel]);
  useEffect(() => {
    if (DriverRidePanel) {
      gsap.to(DriverRideRef.current, {
        duration: 0.1,
        transform: "translateY(0%)",
        ease: "power2.inOut",
      });
      
    } else {
      gsap.to( DriverRideRef.current, {
        duration: 0.1,
        transform: "translateY(100%)",
        ease: "power2.inOut",
      });
    }
  }, [DriverRidePanel]);

    return (
        <div className="h-screen flex flex-col relative bg-gray-100">
            {/* Top Navigation */}
            <div className="fixed top-0 w-full  flex items-center justify-between p-4 z-20">
                <img
                    src="https://links.papareact.com/6do"
                    alt="Logo"
                    className="w-16"
                />
                <Link
                    to="/captain-home"
                    className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-md transition transform hover:scale-105"
                >
                    <i className="text-lg text-gray-800 ri-logout-box-r-line"></i>
                </Link>
            </div>

            {/* Ride Animation Section */}
            <div className="flex-1 relative">
                <img
                    src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                    alt="Riding Animation"
                    className="w-full h-full object-cover"
                />
                {/* Distance Info Overlay */}
                <div className="absolute bottom-8 left-8 bg-black bg-opacity-70 text-white py-3 px-5 rounded-lg shadow-md">
                    <p className="text-lg font-semibold">4 KM Away</p>
                </div>
            </div>

            {/* Bottom Panel */}
            <div className="bg-white py-6 px-4 rounded-t-3xl shadow-lg z-10" 
            onClick={()=>{
              setDriverRidePanel(true)
            }}>
                {/* Pull-Up Gesture */}
                <div className="flex justify-center">
                    <div
                        className="w-12 h-1 bg-gray-300 rounded-full mb-4"
                        title="Swipe Up"
                    ></div>
                </div>

                <div className="flex items-center justify-between">
                    {/* Ride Info */}
                    <div className="flex flex-col">
                        <h4 className="text-lg font-semibold text-gray-800">Ride Status</h4>
                        <p className="text-sm text-gray-600">In Progress</p>
                    </div>

                    {/* Complete Ride Button */}
                    <button
                        onClick={() => {
                            console.log('Ride Completed');
                            setFinishRidePanel(true)
                        }}
                        className="bg-black text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-800 transition text-lg font-medium"
                    >
                        Complete Ride
                    </button>
                </div>
            </div>

            {/* Finish Ride Panel */}
            <div ref={finishRideRef} className="fixed h-screen w-full z-10 bottom-0 transylate-y-full bg-white px-3 py-6 pt-12">
        <FinishRide/>
        </div>

        {/* Finish Ride Panel */}
        <div ref={DriverRideRef} className="fixed h-screen w-full z-10 bottom-0 transylate-y-full bg-white px-3 py-6 pt-12">
        <DriverRide setFinishRidePanel={setFinishRidePanel} setDriverRidePanel={setDriverRidePanel}/>
        </div>

        </div>
    );
};

export default CaptainRiding;
