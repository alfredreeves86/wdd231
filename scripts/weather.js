//select elemenmt in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

//Openweather API URL Call
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=56b9c0a30b534396d84e1950c2ba88d7';

//display results data
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  //Icon URL
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  //Description
  const desc = data.weather[0].description;
  //Set the image src+alt
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
   //set figcaption
   captionDesc.textContent = desc;
  }

  //API Fetch asyn & await
async function apiFetch() {
   try {
     const response = await fetch(url);
     if (response.ok) {
       const data = await response.json();
       console.log(data); //for testing
       displayResults(data);
     } else {
       throw new Error(await response.text());
     }
   } catch (error) {
     console.error(error);
   }

}
apiFetch();

//Why should use async/await instead of .then()?
//Easier to debug(stack traces work), easier to read(linear flow), easier to add logi steps(e.g., caching, logging)
