const Button = document.getElementById("search");
const Input = document.getElementById("display");
const country = document.getElementById("country");
const temp = document.getElementById("temp");
// const weatherDescription = document.getElementById("weatherDescription");
// const humidity = document.getElementById("humidity");
// const windSpeed = document.getElementById("windSpeed");

// Replace with your actual weather API fetch logic here
// This is a placeholder example to demonstrate the structure
function fetchWeatherData(city) {
  // Simulate fetching weather data from an API (replace with actual API call)
  let weatherData = {
    city: city,
    temperature:"23℃",
    weatherDescription: "Heavy Intense Rain",
    humidity: "90%",
    windSpeed: "90 km/h"
  };
  return weatherData
}

Button.addEventListener("click", () => {
  const city = Input.value;
  if (!city) {
    alert("Please enter a city name");
    return;
  }
  const weatherData = fetchWeatherData(city);
  country.textContent = weatherData.city;
  temp.textContent = weatherData.temperature;
  weatherDescription.textContent = weatherData.weatherDescription;
  humidity.textContent = weatherData.humidity;
  windSpeed.textContent = weatherData.windSpeed;
});