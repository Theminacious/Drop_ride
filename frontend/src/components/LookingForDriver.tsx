interface LookingForDriverProps {
  setVehicleFound: (value: boolean) => void;
  vehicleType: string;
  fare: { [key: string]: number };
  pickup: string;
  destination: string;
}

const LookingForDriver: React.FC<LookingForDriverProps> = (props) => {
  return (
    <div>
      <h5
        className="p-3 text-center w-[93%] absolute top-0 "
        onClick={() => {
          props.setVehicleFound(false);
          
        }}
      >
        <i className=" text-3xl  text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl fomt-semibold mb-5">Looking for a driver</h3>

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
                Kankariya Talab, Chandigarh
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
          <i className=" text-lg ri-map-pin-2-fill"></i>
            <div className="">
              <h3 className="text-lg font-medium">{props.destination}</h3>
              <p className="text-sm -mt-1 text-gray-600">Kankariya Talab, Chandigarh</p>
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

      </div>
    </div>
  )
}

export default LookingForDriver