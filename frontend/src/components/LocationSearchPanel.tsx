import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface LocationSearchPanelProps {
  toggleVehiclePanel: (value: boolean) => void;
  setIsPanelOpen: (value: boolean) => void;
}

const LocationSearchPanel: React.FC<LocationSearchPanelProps> = (props) => {
  const [locations, setLocations] = useState<{ id: string; description: string }[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (input.length >= 3) {
        try {
          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
            params: { input },
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            withCredentials: true,
          });
          setLocations(response.data.map((item: { place_id: string; description: string }, index: number) => ({ id: item.place_id, description: item.description })));
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      }
    };

    fetchSuggestions();
  }, [input]);

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg max-w-md mx-auto">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Saved Locations</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for a location"
        className="w-full p-2 mb-4 border rounded"
      />
      {locations.map((location) => (
        <div
          key={location.id}
          onClick={() => {
            // props.toggleVehiclePanel(true);
            // props.setIsPanelOpen(false);
          }}
          className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200"
        >
          <div className="bg-gray-200 h-10 w-10 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-2-line text-2xl text-gray-700"></i>
          </div>
          <div className="flex-grow">
            <h4 className="text-base text-gray-800 font-medium">{location.description}</h4>
          </div>
          <i className="ri-arrow-right-s-line text-xl text-gray-400"></i>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;