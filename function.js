const locationInput = document.getElementById('locationInput')
        const getWeatherButton = document.getElementById('getWeather')
        const weatherInfo = document.getElementById('weatherInfo')
        let weatherData;
        getWeatherButton.addEventListener('click', () => {
        const location = locationInput.value
        fetch(
            `https://api.weatherapi.com/v1/current.json?key=91b4369798474fee84b51233233010&q=${location}&aqi=no`
        )
        .then(response => response.json())
        .then(data => {
          let png = data.current.condition.icon ;
          console.log(png)
          console.log(data)
          weatherData = data;

          const weatherHtml = `<div class='weathercontainer'> 
            <div class='row'> <h2 class="city-head" > Temperature in  ${data?.location?.name} </h2> 
                <span> Temperature :</span> <span> ${data?.current?.temp_c}        <sup>o</sup> C </span> <br/>
                <span> Feels Like  :</span> <span> ${data?.current?.feelslike_c}   <sup>o</sup> C </span> <br/>
                <span> Humadity    :</span> <span> ${data?.current?.humidity} %    </span>  <br/>
                <span> Wind        :</span> <span> ${data?.current?.wind_kph} km/h </span> 
            </div>

            <div class="weather-img" >
                <img src="${weatherData.current.condition.icon}" >  <br/><br/>
                <h4 class="city-head" > Temperature in  ${data?.current?.condition.text} </h4> 
            </div>
          
          </div>`

          weatherInfo.innerHTML = weatherHtml
        })
        .catch(error => {
          alert("Please Input Location!!!")
        })
        })