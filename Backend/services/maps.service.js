module.exports.getAddressCoordinate = async (address) => {
    const apikey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apikey}`;
    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                lat: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
};


module.exports.getDistanceTimes = async (origin, destination) => {
   if(!origin || !destination){
       throw new Error('Origin and destination are required');
   }
    const apikey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${apikey}`;
    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const data = response.data.rows[0].elements[0];
            
            return {
                distance: data.distance.text,
                duration: data.duration.text
            };
        } else {
            throw new Error('Unable to fetch distance and time');
        }
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

 module.exports.getAutoCompleteSuggestions = async (input) => {
    if(!input){
        throw new Error('query is required');
    }
    const apikey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${apikey}`;
    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            return response.data.predictions;
        } else {
            throw new Error('Unable to fetch suggestions');
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}