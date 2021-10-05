// The regions that have a connection are: Norte -> Nordeste, Sudeste -> Centro Oeste, Sudeste -> Sul
const regionsInfos = require('./regionsConnecteds.json');
const allRegions = regionsInfos.regions;

// O código não está nem perto de estar completo, não tem validações que sejam coerentes e está apenas analisando as regiôes. A minha pretensão era de, no próximo passo, puxar as informações do arquivo "regions,json" e validar das formas corretas!

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
    departureRoutes.push(region);
  }
})


console.log(arrivalRoutes);
console.log(departureRoutes);
