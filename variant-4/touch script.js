document.getElementById('city-selector').addEventListener('change', function() {
    var city = this.value;
    var apiKey = 'romantic_weather'; 
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;
 
    fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(function(data) {
            document.getElementById('city-name').innerText = data.name;
            var temperature = Math.round(data.main.temp - 273.15); // Преобразование температуры из Кельвинов в градусы Цельсия
            document.getElementById('temperature').innerText = temperature + '°C';
            document.getElementById('weather-description').innerText = data.weather[0].description;
        })
        .catch(function(error) {
            console.error('There has been a problem with your fetch operation:', error);
        });
 });