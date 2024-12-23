import React, { useRef, useState } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const panelCloseRef = useRef<HTMLDivElement>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen((prev) => !prev);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // todo: add form submission logic
  };

  useEffect(() => {
    if (isPanelOpen) {
      gsap.to(panelRef.current, {
        duration: 1,
        height: "100%",
        padding :24,
        ease: "power2.inOut",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        duration: 1,
        padding:0,
        height: "0%",
        ease: "power2.inOut",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [isPanelOpen]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://links.papareact.com/6do"
        alt=""
      />

      <div className="absolute top-0 w-full h-full">
        {/* // image for temporary use */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[23%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={togglePanel}
            className="absolute opacity-0 top-1 left-5 text-2xl  "
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
              value={destination}
              onClick={togglePanel}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="  h-0 bg-white">
          <LocationSearchPanel/>
        </div>
      </div>

    <div className="fixed w-full z-10 bottom-0 bg-white px-3 py-6">
      <div className="  flex  border-2 border-black mb-2 rounded-xl p-3 items-center justify-between">
        <img className="h-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqfK0GHWJX4ZFuFeONtsWYBH-i_iNQGmIYbw&s" alt="" />
        <div className="w-1/2">
          <h4 className="font-medium text-lg">GoCar <span><i className="ri-user-3-fill"></i>4</span></h4>
          <h5 className="font-medium text-base">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">Affordable,compact rides</p>
        </div>
        <h2 className="text-xl font-semibold">&#8377;120</h2>

      </div>
      <div className="  flex  border-2 border-black mb-2 rounded-xl p-3 items-center justify-between">
        <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688399652/assets/ba/dfb1d6-6c2b-4553-b929-9ff32f02a55e/original/UberXL.png" alt="" />
        <div className="w-1/2">
          <h4 className="font-medium text-lg">GoCar Premier <span><i className="ri-user-3-fill"></i>4</span></h4>
          <h5 className="font-medium text-base">4 mins away</h5>
          <p className="font-normal text-xs text-gray-600">Comfortable sedans, top-</p>
        </div>
        <h2 className="text-xl font-semibold">&#8377;220</h2>

      </div>
      <div className="  flex  border-2 border-black mb-2 rounded-xl p-3 items-center justify-between">
        <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
        <div className="w-1/2">
          <h4 className="font-medium text-lg">GoAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
          <h5 className="font-medium text-base">5 mins away</h5>
          <p className="font-normal text-xs text-gray-600">Affordable,compact rides</p>
        </div>
        <h2 className="text-xl font-semibold">&#8377;180</h2>

      </div>
      <div className="  flex  border-2 border-black mb-2 rounded-xl p-3 items-center justify-between">
        <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" alt="" />
        <div className="w-1/2">
          <h4 className="font-medium text-lg">GoBike <span><i className="ri-user-3-fill"></i>1</span></h4>
          <h5 className="font-medium text-base">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">Affordable motorcycle rides</p>
        </div>
        <h2 className="text-xl font-semibold">&#8377;100</h2>

      </div>
    </div>

    </div>
  );
};

export default Home;


