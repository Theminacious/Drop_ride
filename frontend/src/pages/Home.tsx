import React, { useRef, useState } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

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
        ease: "power2.inOut",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        duration: 1,
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
            className="absolute opacity-0 top-2 left-3 text-2xl"
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
        <div ref={panelRef} className=" opacity-0 h-0 bg-red-500"></div>
      </div>
    </div>
  );
};

export default Home;

