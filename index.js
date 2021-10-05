// The regions that have a connection are: Norte -> Nordeste, Sudeste -> Centro Oeste, Sudeste -> Sul
const regionsInfos = require('./regionsConnecteds.json');
const allRegions = regionsInfos.regions;

// All regions must to be in the arrival and departure array
const arrival = [];
const departure = [];

const arrivalRoutes = [];
const departureRoutes = [];

regionsInfos.regionsConnecteds.forEach((region) => {
  arrival.push(region.from);
  departure.push(region.to);
})

allRegions.forEach((region) => {
  isOnArrival = arrival.find((element) => element === region);
  isOnDeparture = departure.find((element) => element === region);
  
  if (!isOnArrival) {
    arrivalRoutes.push(region);
  }
  if (!isOnDeparture) {
    departure.push(region);
  }
})

console.log(arrivalRoutes);
console.log(departureRoutes);
