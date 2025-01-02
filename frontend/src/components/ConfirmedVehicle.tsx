interface ConfirmedVehicleProps {
  setConfirmVehiclePanel: (value: boolean) => void;
  setVehicleFound: (value: boolean) => void;
  pickup: string;
  destination: string;
  createRide: () => void;
  vehicleType: string;
  fare: { [key: string]: number };
}

const ConfirmedVehicle: React.FC<ConfirmedVehicleProps> = (props) => {
  return (
    <div>
      <h5
        className="p-3 text-center w-[93%] absolute top-0 "
        onClick={() => {
          props.setConfirmVehiclePanel(false);

        }}
      >
        <i className=" text-3xl  text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl fomt-semibold mb-5">Confirm Your ride</h3>

      <div className="flex gap-2 justify-between flex-col items-center ">
        <img
          className="h-20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqfK0GHWJX4ZFuFeONtsWYBH-i_iNQGmIYbw&s"
          alt=""
        />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 ">
            <i className=" text-lg ri-map-pin-2-fill"></i>
            <div className="">
              <h3 className="text-lg font-medium">{props.pickup}</h3>
              <p className="text-sm -mt-1 text-gray-600">
              {props.pickup}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
          <i className=" text-lg ri-map-pin-2-fill"></i>
            <div className="">
              <h3 className="text-lg font-medium">{props.destination}</h3>
              <p className="text-sm -mt-1 text-gray-600">{props.destination}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 " >
            <i className=" text-lg ri-currency-line"></i>
            <div className="">
                <h3 className="text-lg font-medium">₹{props.fare[props.vehicleType]}</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Cash
              </p>
            </div>
          </div>
        </div>

        <button onClick={()=>{
          props.setVehicleFound(true);
          props.setConfirmVehiclePanel(false);
          props.createRide()
        }} className="w-full mt-5 bg-green-600 text-white font-semibold py-2 rounded-lg ">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmedVehicle;
