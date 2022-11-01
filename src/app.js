function displayTemperature(response) {
  console.log (response.data.temperature.current);
};



let apiKey = "ad14tc2f8f3off39960b4fb3559c5c0a";
let apiUrl =`https://api.shecodes.io/weather/v1/current?query=Philadelphia&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);