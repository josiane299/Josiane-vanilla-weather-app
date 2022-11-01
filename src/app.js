//date function 

function formatDate(timestamp){
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0 ${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes <10){
    minutes = `0 ${minutes}`;
  }
  let days = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;


}







//temperature function

function displayTemperature(response) {
  console.log(response.data.time);
  let temperatureElement = document.querySelector(`#temperature`);
  temperatureElement.innerHTML = Math.round
  (response.data.temperature.current);

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

};



let apiKey = "ad14tc2f8f3off39960b4fb3559c5c0a";
let apiUrl =`https://api.shecodes.io/weather/v1/current?query=Philadelphia&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);