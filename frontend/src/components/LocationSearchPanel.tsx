import React from 'react';

const LocationSearchPanel = (props) => {
  const locations = [
    { id: 1, address: '24B, Near Kapoor\'s Cafe, Chandigarh' },
    { id: 2, address: 'Sector 17, Plaza, Chandigarh' },
    { id: 3, address: 'Phase 3B2, Mohali' },
  ];

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg max-w-md mx-auto">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Saved Locations</h3>
      {locations.map((location) => (
        <div
          key={location.id}
          onClick={()=>{props.toggleVehiclePanel(true)}}
          className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200"
        >
          <div className="bg-gray-200 h-10 w-10 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-2-line text-2xl text-gray-700"></i>
          </div>
          <div className="flex-grow">
            <h4 className="text-base text-gray-800 font-medium">{location.address}</h4>
          </div>
          <i className="ri-arrow-right-s-line text-xl text-gray-400"></i>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
