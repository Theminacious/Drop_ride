import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const panelCloseRef = useRef<HTMLDivElement>(null);
  const vehiclepanelRef = useRef<HTMLDivElement>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);

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
          
          />
        </div>
      </div>

      <div
        ref={vehiclepanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6"
      >
        {[
          {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqfK0GHWJX4ZFuFeONtsWYBH-i_iNQGmIYbw&s",
            title: "GoCar",
            passengers: 4,
            eta: "2 mins",
            description: "Affordable, compact rides",
            price: 120,
          },
          {
            img: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688399652/assets/ba/dfb1d6-6c2b-4553-b929-9ff32f02a55e/original/UberXL.png",
            title: "GoCar Premier",
            passengers: 4,
            eta: "4 mins",
            description: "Comfortable sedans, top-rated",
            price: 220,
          },
          {
            img: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png",
            title: "GoAuto",
            passengers: 3,
            eta: "5 mins",
            description: "Affordable, compact rides",
            price: 180,
          },
          {
            img: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png",
            title: "GoBike",
            passengers: 1,
            eta: "3 mins",
            description: "Affordable motorcycle rides",
            price: 100,
          },
        ].map((option, index) => (
          <div
            key={index}
            className="flex border-2 border-black mb-2 rounded-xl p-3 items-center justify-between"
          >
            <img className="h-12" src={option.img} alt={option.title} />
            <div className="w-1/2">
              <h4 className="font-medium text-lg">
                {option.title} <span><i className="ri-user-3-fill"></i>{option.passengers}</span>
              </h4>
              <h5 className="font-medium text-base">{option.eta}</h5>
              <p className="font-normal text-xs text-gray-600">{option.description}</p>
            </div>
            <h2 className="text-xl font-semibold">&#8377;{option.price}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

