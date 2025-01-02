import React from 'react'
// Define prop types (if using TypeScript)
interface VehiclePanelProps {
  setVehiclePanel: React.Dispatch<React.SetStateAction<boolean>>;
  setConfirmVehiclePanel: React.Dispatch<React.SetStateAction<boolean>>;
  setVehicleType: React.Dispatch<React.SetStateAction<string>>;

  fare: {
    car: number;
    bike: number;
    auto:number;
  };
}

const VehiclePanel :React.FC<VehiclePanelProps>= (props) => {
   return (
    <div>
      <h5 className="p-3 text-center w-[93%] absolute top-0 " onClick={()=> {
       props.setVehiclePanel(false)
      }}><i className=" text-3xl  text-gray-400 ri-arrow-down-wide-line"></i></h5>
      {[
       {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqfK0GHWJX4ZFuFeONtsWYBH-i_iNQGmIYbw&s",
        title: "GoCar",
        passengers: 4,
        eta: "2 mins",
        description: "Affordable, compact rides",
        price:  props.fare.car,
        type: "car"
       },
       {
        img: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png",
        title: "GoAuto",
        passengers: 3,
        eta: "5 mins",
        description: "Affordable, compact rides",
        price: props.fare.auto,
        type: "auto"
       },
       {
        img: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png",
        title: "GoBike",
        passengers: 1,
        eta: "3 mins",
        description: "Affordable motorcycle rides",
        price: props.fare.bike,
        type: "bike"
       },
      ].map((option, index) => (
       <div
        key={index}
        onClick={() => {
          props.setVehiclePanel(false);
          props.setConfirmVehiclePanel(true);
          props.setVehicleType(option.type);
        }}
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
   );
};

export default VehiclePanel;