const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b058d5903amshbdfeb15b6b60d43p1dcdf8jsn76228c4a16e4",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};


submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Delhi");

// Lucknow
const getWeatherLucknow = () => {
	fetch(
	  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow",
	  options
	)
	  .then((response) => response.json())
	  .then((response) => {
		console.log(response);
		tempLucknow.innerHTML = response.temp;
		feels_likeLucknow.innerHTML = response.feels_like;
		humidityLucknow.innerHTML = response.humidity;
		min_tempLucknow.innerHTML = response.min_temp;
		max_tempLucknow.innerHTML = response.max_temp;
		wind_speedLucknow.innerHTML = response.wind_speed;
		wind_degreesLucknow.innerHTML = response.wind_degrees;
		sunriseLucknow.innerHTML = response.sunrise;
		sunsetLucknow.innerHTML = response.sunset;
	  })
	  .catch((err) => console.error(err));
  };
  getWeatherLucknow();
 
  // NewYork
const getWeatherNewYork = () => {
	fetch(
	  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York",
	  options
	)
	  .then((response) => response.json())
	  .then((response) => {
		console.log(response);
		tempNewYork.innerHTML = response.temp;
		feels_likeNewYork.innerHTML = response.feels_like;
		humidityNewYork.innerHTML = response.humidity;
		min_tempNewYork.innerHTML = response.min_temp;
		max_tempNewYork.innerHTML = response.max_temp;
		wind_speedNewYork.innerHTML = response.wind_speed;
		wind_degreesNewYork.innerHTML = response.wind_degrees;
		sunriseNewYork.innerHTML = response.sunrise;
		sunsetNewYork.innerHTML = response.sunset;
	  })
	  .catch((err) => console.error(err));
  };
  getWeatherNewYork();
  // London
const getWeatherLondon = () => {
	fetch(
	  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London",
	  options
	)
	  .then((response) => response.json())
	  .then((response) => {
		console.log(response);
		tempLondon.innerHTML = response.temp;
		feels_likeLondon.innerHTML = response.feels_like;
		humidityLondon.innerHTML = response.humidity;
		min_tempLondon.innerHTML = response.min_temp;
		max_tempLondon.innerHTML = response.max_temp;
		wind_speedLondon.innerHTML = response.wind_speed;
		wind_degreesLondon.innerHTML = response.wind_degrees;
		sunriseLondon.innerHTML = response.sunrise;
		sunsetLondon.innerHTML = response.sunset;
	  })
	  .catch((err) => console.error(err));
  };
  getWeatherLondon();
  
  // Tokyo
const getWeatherTokyo = () => {
	fetch(
	  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo",
	  options
	)
	  .then((response) => response.json())
	  .then((response) => {
		console.log(response);
		tempTokyo.innerHTML = response.temp;
		feels_likeTokyo.innerHTML = response.feels_like;
		humidityTokyo.innerHTML = response.humidity;
		min_tempTokyo.innerHTML = response.min_temp;
		max_tempTokyo.innerHTML = response.max_temp;
		wind_speedTokyo.innerHTML = response.wind_speed;
		wind_degreesTokyo.innerHTML = response.wind_degrees;
		sunriseTokyo.innerHTML = response.sunrise;
		sunsetTokyo.innerHTML = response.sunset;
	  })
	  .catch((err) => console.error(err));
  };
  getWeatherTokyo();


  // Time
const h2 = document.querySelector('.time');

let showTime = ()=> {
    const hello = new Date();
    const hour = (hello.getHours()%12) >= 10 ? (hello.getHours()%12) : "0" + (hello.getHours()%12);
    const minutes = hello.getMinutes() >= 10 ? hello.getMinutes() : '0' + hello.getMinutes();
    const second = hello.getSeconds() >= 10 ? hello.getSeconds() : '0' + hello.getSeconds();
    h2.innerHTML = `${hour} : ${minutes} : ${second}`;
};

let timer = setInterval(()=> {
    showTime()
},1000);