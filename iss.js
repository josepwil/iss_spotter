const request = require('request');
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request('https://api.ipify.org?format=json', (error, response, body) => {
    // error can be set if invalid domain, user is offline, etc
    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    // if get here all is well and we got the data
    const data = JSON.parse(body);
    callback(null, data.ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`https://api.ipgeolocation.io/ipgeo?apiKey=ed544950efe442ddb34be1722b9c42fb&ip=${ip}&fields=geo`, (error, response, body) => {
    // if error without request
    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    // parse data
    const data = JSON.parse(body);
    // add relevant data to object
    const latLon = {
      latitude: data.latitude,
      longitude: data.longitude
    };
    // pass data into callback
    callback(null, latLon);
  });
};




module.exports = { fetchMyIP, fetchCoordsByIP };