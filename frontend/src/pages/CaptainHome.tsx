import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {

  const [ridePopupPanel, setRidePopupPanel] = useState(true)
  const [confirmridePopupPanel, setConfirmRidePopupPanel] = useState(false)
  const ridePopupPanelRef = useRef<HTMLDivElement>(null);
  const confirmridePopupPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        duration: 0.5,
        transform: "translateY(0%)",
        ease: "power2.inOut",
      });
      
    } else {
      gsap.to( ridePopupPanelRef.current, {
        duration: 0.5,
        transform: "translateY(100%)",
        ease: "power2.inOut",
      });
    }
  }, [ridePopupPanel]);

  useEffect(() => {
    if (confirmridePopupPanel) {
      gsap.to(confirmridePopupPanelRef.current, {
        duration: 0.5,
        transform: "translateY(0%)",
        ease: "power2.inOut",
      });
      
    } else {
      gsap.to( confirmridePopupPanelRef.current, {
        duration: 0.5,
        transform: "translateY(100%)",
        ease: "power2.inOut",
      });
    }
  }, [confirmridePopupPanel]);



  return (
    <div className="h-screen relative overflow-hidden">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img className="w-16" src="https://links.papareact.com/6do" alt="" />
        <Link
          to="/captain-home"
          className=" h-10 w-10 bg-white rounded-full flex items-center justify-center z-10"
        >
          <i className=" text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      {/* Top Half with Background Image */}
      <div className="h-3/5 ">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Riding"
        />
      </div>
      {/* Bottom Half with White Background */}
        <div className="h-2/5 p-6">
          <CaptainDetails/>
        </div>

        <div ref={ridePopupPanelRef} className="fixed w-full z-10 bottom-0 transylate-y-full bg-white px-3 py-6 pt-12">
        <RidePopUp  setRidePopupPanel={setRidePopupPanel}setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
        </div>
        <div ref={confirmridePopupPanelRef} className="fixed h-screen w-full z-10 bottom-0 transylate-y-full bg-white px-3 py-6 pt-12">
        <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel}/>
        </div>


      
    </div>
  );
};

export default CaptainHome;
