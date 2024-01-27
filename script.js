const endpoint = 'https://api.openweathermap.org/data/2.5/weather?units=metric'
const key = '&appid=3fa53fd0f477c900a312f9ad4243bffd'

async function getWeather(city){
    const response = await fetch(`${endpoint}&q=${city}${key}`)
    const data = await response.json()
    
    if(response.status == '404'){
        document.querySelector('.error-msg').style.display = 'block'
    } else if(response.status == '400'){
        document.querySelector('.error-msg').style.display = 'block'
        document.querySelector('.error-msg').innerHTML = 'Please enter a city'
    }

    document.querySelector('.temp-deg').innerHTML = Math.round(data.main.temp) + '°'
    document.querySelector('.city-name').innerHTML = data.name
    document.querySelector('.per-hum').innerHTML = data.main.humidity + '%'
    document.querySelector('.wind-speed').innerHTML = Math.round(data.wind.speed) + ' km/h'
    document.querySelector('.weather-description').innerHTML = data.weather[0].main


    if(data.weather[0].main == 'Clouds')
    { 
        document.querySelector('.status-icon').src = 'weahter Icons/scattered-clouds.png'
    } else if(data.weather[0].main == 'Mist')
    {
        document.querySelector('.status-icon').src = 'weahter Icons/mist.png'
    } else if(data.weather[0].main == 'Snow')
    {
        document.querySelector('.status-icon').src = 'weahter Icons/snow.png'
    } else if(data.weather[0].main == 'Rain')
    {
        document.querySelector('.status-icon').src = 'weahter Icons/rain-day.png'
    } else if(data.weather[0].main == 'Thunderstorm')
    {
        document.querySelector('.status-icon').src = 'weahter Icons/thunderstorm.png'
    } 

    document.querySelector('.weather').style.display = 'block'

}

document.querySelector('.btn').addEventListener('click', () => {
    let city =  document.querySelector('.input').value
    getWeather(city)
})

