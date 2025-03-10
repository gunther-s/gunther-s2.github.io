/* ********************************
 *  Menu Activity
 ******************************** */

// Get menu where clicks will occur
const MENULINK = document.getElementById('page-nav');

// Intercept the menu link clicks
MENULINK.addEventListener('click', function (evt) {
 // Get the data values for state and city
 // See https://javascript.info/bubbling-and-capturing for evt.target explanation
 let cityName = evt.target.dataset['city'];
 let stateName = evt.target.dataset['state'];
 console.log(cityName);
 console.log(stateName);
 if(cityName != null){
 evt.preventDefault();
 const LOCALE = cityName;
 getData(LOCALE);
 }

});



//Get location code from weather.json file
function getData(LOCALE) {
let URL = "weather.json";
 fetch(URL)
  .then(response => response.json())
  .then(function (data) {
   console.log('Json object from getCode function:');
   console.log(data);
   console.log(data[LOCALE+" "]);

   const locData = {}; // Create an object
   locData['key'] = data.Key; // Add the value to the object
    locData['name'] = data.LocalizedName;
    locData['postal'] = data.PrimaryPostalCode;
    locData['state'] = data.AdministrativeArea.LocalizedName;
    locData['stateAbbr'] = data.AdministrativeArea.ID;
    locData['geoposition'] = LOCALE;
    locData['elevation'] = data.GeoPosition.Elevation.Imperial.Value;
   })
  .catch(error => console.log('There was a getCode error: ', error))
} // end getCode function

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }