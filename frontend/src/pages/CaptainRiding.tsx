import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainRiding = () => {
   

    
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
      <div className="h-4/5 ">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Riding"
        />
      </div>

      {/* Bottom Half with White Background */}
        <div className="h-1/5 p-6 items-center flex  bg-black">
          <h4>4 KM away</h4>
          <button>Complete Ride</button>
        </div>

        

      
    </div>
    );
};

export default CaptainRiding;
