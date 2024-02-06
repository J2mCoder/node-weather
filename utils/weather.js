const weather = (query, callback) => {
  const keys = 'dd7c3ba83008656724870d3c4767a62f'
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?&lang=fr&units=metric&q=${encodeURIComponent(query)}&appid=${keys}`

  fetch(weatherUrl)
    .then(res => res.json())
    .then(data => {
      if (data.cod === '404') {
        callback({
          error: 'Désolé, nous n’avons pas trouvé de correspondance pour cette ville. Veuillez vérifier l’orthographe et réessayer.'
        })
      } else {
        callback({
          name: data.name,
          temp: data.main.temp,
          description: data.weather[0].description,
          icon: data.weather[0].icon
        })
      }
    })
}

module.exports = { weather }