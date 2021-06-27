let weather= {
    "apiKey": "a124262df13655cccf6be6b8317f3e59",
    fetchWeather: function (city) {
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q=" 
            + city
             + "&units=metric&appid="
             + this.apiKey
            )
            .then((response) => response.json())
            .then((data) => console.log(data));  
    },
    displayWeather: function(data) {

    }
}
