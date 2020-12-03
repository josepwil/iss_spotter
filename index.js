// index.js
const {  nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('174.92.76.213', (error, coords) => {
//   if (error) {
//     console.log(error);
//     return
//   } else {
//     console.log(coords);
//   }
// })

// fetchISSFlyOverTimes({ latitude: '43.60260', longitude: '-79.50620' }, (error, data) => {
//   if (error) {
//     console.log(error);
//     return
//   } else {
//     console.log(data);
//   }
// })

