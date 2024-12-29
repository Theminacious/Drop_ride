import { useNavigate } from "react-router-dom";






const FinishRide = () => {
  const navigate=useNavigate()

  return (
    <div className="h-screen flex flex-col items-center bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="w-full p-6 bg-gradient-to-r from-green-500 to-green-600 text-white text-center shadow-md">
        <h1 className="text-3xl font-bold">Ride Completed!</h1>
        <p className="text-sm">Thank you for riding with us</p>
      </header>

      {/* Ride Summary */}
      <div className="flex flex-col items-center justify-center flex-1 w-full p-6">
        {/* Ride Info Card */}
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
          <h2 className="text-2xl font-semibold text-center mb-4">Ride Summary</h2>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">Ride ID:</span>
            <span className="text-lg font-medium text-gray-800">#123456</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">Pickup Location:</span>
            <span className="text-lg font-medium text-gray-800">123, 4th Street</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">Drop Location:</span>
            <span className="text-lg font-medium text-gray-800">456, 7th Avenue</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">Distance:</span>
            <span className="text-lg font-medium text-gray-800">4 KM</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Fare Price:</span>
            <span className="text-lg font-bold text-green-600">$25.00</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 space-y-4 w-full max-w-md">
          <button className="w-full bg-green-500 text-white py-3 rounded-full hover:bg-green-600 shadow-md transition duration-300">
            Submit Feedback
          </button>
          <button onClick={()=>{
            navigate('/captain-home')
          }} className="w-full bg-gray-800 text-white py-3 rounded-full hover:bg-gray-700 shadow-md transition duration-300">
            New Ride
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full p-4 bg-gray-200 text-center text-sm text-gray-500">
        <p>Need help? <a href="/support" className="text-blue-500 hover:underline">Contact Support</a></p>
      </footer>
    </div>
  );
};

export default FinishRide;
