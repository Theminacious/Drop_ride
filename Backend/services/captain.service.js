const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  plate,
  capacity,
  vehicletype
}) => {
  if (!firstname || !email || !password || !color || !plate || !capacity || !vehicletype) {
    throw new Error("Please fill all the required fields");
  }

  const captain = captainModel.create({
    fullname: {
      firstname,
      lastname
    },
    email,
    password,
    vehicle: {
      color,
      plate,
      capacity,
      vehicletype
    }
  });

  return captain;
};