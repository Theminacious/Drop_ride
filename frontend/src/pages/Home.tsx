import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedVehicle from "../components/ConfirmedVehicle";
import LookingForDriver from "../components/LookingForDriver";
import WaitForDriver from "../components/WaitForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const panelCloseRef = useRef<HTMLDivElement>(null);
  const vehiclepanelRef = useRef<HTMLDivElement>(null);
  const ConfirmedvehiclepanelRef = useRef<HTMLDivElement>(null);
  const LookingForDriverRef = useRef<HTMLDivElement>(null);
  const waitingForDriverRef = useRef<HTMLDivElement>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmedvehiclePanel, setConfirmedvehiclePanel] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const [vehicleFound, setVehicleFound] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen((prev) => !prev);
  };

  const toggleVehiclePanel = () => {
    setVehiclePanel((prev) => !prev);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Add form submission logic
    console.log("Pick-up:", pickup, "Destination:", destination);
  };

  useEffect(() => {
    if (isPanelOpen) {
      gsap.to(panelRef.current, {
        duration: 1,
        height: "100%",
        padding: 24,
        ease: "power2.inOut",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
     

      
    } else {
      gsap.to(panelRef.current, {
        duration: 1,
        height: "0%",
        padding: 0,
        ease: "power2.inOut",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [isPanelOpen]);

  useEffect(() => {
    if (vehiclePanel) {
      gsap.to(vehiclepanelRef.current, {
        duration: 0.5,
        transform: "translateY(0%)",
        ease: "power2.inOut",
      });
    } else {
      gsap.to(vehiclepanelRef.current, {
        duration: 0.5,
        transform: "translateY(100%)",
        ease: "power2.inOut",
      });
    }
  }, [vehiclePanel]);
  useEffect(() => {
    if (confirmedvehiclePanel) {
      gsap.to(ConfirmedvehiclepanelRef.current, {
        duration: 0.5,
        transform: "translateY(0%)",
        ease: "power2.inOut",
      });
      
    } else {
      gsap.to( ConfirmedvehiclepanelRef.current, {
        duration: 0.5,
        transform: "translateY(100%)",
        ease: "power2.inOut",
      });
    }
  }, [confirmedvehiclePanel]);

  useEffect(() => {
    if (vehicleFound) {
      gsap.to(LookingForDriverRef.current, {
        duration: 0.5,
        transform: "translateY(0%)",
        ease: "power2.inOut",
      });
      
    } else {
      gsap.to( LookingForDriverRef.current, {
        duration: 0.5,
        transform: "translateY(100%)",
        ease: "power2.inOut",
      });
    }
  }, [vehicleFound]);

  useEffect(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        duration: 0.5,
        transform: "translateY(0%)",
        ease: "power2.inOut",
      });
      
    } else {
      gsap.to( waitingForDriverRef.current, {
        duration: 0.5,
        transform: "translateY(100%)",
        ease: "power2.inOut",
      });
    }
  }, [waitingForDriver]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://links.papareact.com/6do"
        alt="Logo"
      />

      <div className="absolute top-0 w-full h-full">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Background"
        />
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[23%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={togglePanel}
            className="absolute opacity-0 top-1 left-5 text-2xl cursor-pointer"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a Pick-up location"
              onClick={togglePanel}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
            <input
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
              onClick={togglePanel}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </form>
        </div>
        <div ref={panelRef} className="h-0 bg-white overflow-hidden">
          <LocationSearchPanel
            toggleVehiclePanel={toggleVehiclePanel}
             setIsPanelOpen={setIsPanelOpen}
          
          />
        </div>
      </div>

    {/* Vehicle Panel Component */}
      <div
        ref={vehiclepanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
      >
        <VehiclePanel setConfirmVehiclePanel={setConfirmedvehiclePanel} setVehiclePanel={setVehiclePanel}/>
      </div>

    {/* confirmed Vehicle Panel */}

      <div
        ref={ConfirmedvehiclepanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <ConfirmedVehicle setConfirmVehiclePanel={setConfirmedvehiclePanel} setVehicleFound={setVehicleFound}  />
        
      </div>
    {/* Looking for driver */}
      <div
      ref={LookingForDriverRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <LookingForDriver setVehicleFound={setVehicleFound}/>
        
      </div>

      <div
      ref={waitingForDriverRef}
        className="fixed w-full z-10 bottom-0  bg-white px-3 py-6 pt-12"
      >
        <WaitForDriver waitingForDriver={setWaitingForDriver}/>
        
      </div>
    </div>
  );
};

export default Home;



