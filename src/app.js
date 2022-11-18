//date function

function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
    `Sunday`,
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

//temperature function

function getForcast(coordinates){
  
  let apiKey = `ad14tc2f8f3off39960b4fb3559c5c0a`;
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${coordinates.longitude}&lat=${coordinates.latitude}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayForecast);
}

function displayTemperature(response) {
  celsiusTemperature = response.data.temperature.current;
  let temperatureElement = document.querySelector(`#temperature`);
  temperatureElement.innerHTML = Math.round(celsiusTemperature);

  let cityElement = document.querySelector(`#city`);
  cityElement.innerHTML = response.data.city;

  let descriptionElement = document.querySelector(`#description`);
  descriptionElement.innerHTML = response.data.condition.description;

  let humidityElement = document.querySelector(`#humidity`);
  humidityElement.innerHTML = response.data.temperature.humidity;

  let windElement = document.querySelector(`#wind`);
  windElement.innerHTML = Math.round(response.data.wind.speed);

  let dateElement = document.querySelector(`#date`);
  dateElement.innerHTML = formatDate(response.data.time * 1000);

  let iconElement = document.querySelector(`#icon`);
  iconElement.setAttribute(`src`, response.data.condition.icon_url);
  iconElement.setAttribute(`alt`, response.data.condition.description);
   

  getForcast(response.data.coordinates);


}


function search(city) {
  let apiKey = "ad14tc2f8f3off39960b4fb3559c5c0a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector(`.search`);
  search(cityInputElement.value);
}

function displayFehrenheitTemperature(event) {
  event.preventDefault();
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  let temperatureElement = document.querySelector(`#temperature`);
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(`#temperature`);
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

//adding a search engine

let celsiusTemperature = null;

let form = document.querySelector(`#search-form`);
form.addEventListener(`submit`, handleSubmit);

let fahrenheitLink = document.querySelector(`#fahrenheit-link`);
fahrenheitLink.addEventListener(`click`, displayFehrenheitTemperature);

let celsiusLink = document.querySelector(`#celsius-link`);
celsiusLink.addEventListener(`click`, displayCelsiusTemperature);

search(`Philadelphia`);

//linking the cities (TOKYO)


function inputTokyo(event){

  let showTokyo = document.querySelector(`#city`);
  showTokyo.innerHTML = "Tokyo";
  let apiKey = "ad14tc2f8f3off39960b4fb3559c5c0a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Tokyo&key=${apiKey}&units=metric`;

  celsiusLink.classList.add(`active`);
  fahrenheitLink.classList.remove(`active`);
  axios.get(apiUrl).then(displayTemperature);
  
}
 
let showTokyo = document.querySelector(`#tokyo-city`);
showTokyo.addEventListener(`click`, inputTokyo);

//linking the cities (LONDON)

function inputLondon(event) {
  
  let showLondon = document.querySelector(`#city`);
  showLondon.innerHTML = "London";
  let apiKey = "ad14tc2f8f3off39960b4fb3559c5c0a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=London&key=${apiKey}&units=metric`;

  celsiusLink.classList.add(`active`);
  fahrenheitLink.classList.remove(`active`);
  axios.get(apiUrl).then(displayTemperature);
}

let showLondon = document.querySelector(`#london-city`);
showLondon.addEventListener(`click`, inputLondon);

//linking the cities (MIAMI)

function inputMiami (event) {
  let showMiami = document.querySelector(`#city`);
  showMiami.innerHTML = "Miami";
  let apiKey = "ad14tc2f8f3off39960b4fb3559c5c0a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Miami&key=${apiKey}&units=metric`;

  celsiusLink.classList.add(`active`);
  fahrenheitLink.classList.remove(`active`);
  axios.get(apiUrl).then(displayTemperature);
}

let showMiami = document.querySelector(`#miami-city`);
showMiami.addEventListener(`click`, inputMiami);

//linking the cities (LOME)

function inputLome(event) {
  let showLome = document.querySelector(`#city`);
  showLome.innerHTML = "Miami";
  let apiKey = "ad14tc2f8f3off39960b4fb3559c5c0a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lome&key=${apiKey}&units=metric`;

  celsiusLink.classList.add(`active`);
  fahrenheitLink.classList.remove(`active`);
  axios.get(apiUrl).then(displayTemperature);
}

let showLome = document.querySelector(`#lome-city`);
showLome.addEventListener(`click`, inputLome);

//Adding display forecast


displayForecast();

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    "Thursday",
    `Friday`,
    "Saturday",
  ];
  return days[day];
}

function displayForecast(response) {
  let forecast = response.data.daily;
  console.log(response.data.coordinates.longitude);

  let forecastElement = document.querySelector(`#forecast`);

  let forecastHTML = `<div class = "row">`;

  forecast.forEach(function (day, index) {
    if (index<6) { 
 

    forecastHTML =
      forecastHTML +
      ` 
      <div class="col-2">
        <div class="weather-forecast-date">
        ${formatDay(day.time)}
        <img src="${day.condition.icon_url}" 
        alt="clear-sky-day"
        width= "60">
        <span class="weather-forecast-temperature-max">
          ${Math.round(day.temperature.maximum)}&deg;
        </span>
        <span class="weather-forecast-temperature-min">
          ${Math.round(day.temperature.minimum)}&deg;
        </span>
         </div> 
         </div>
        
        `;
      }
 
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

