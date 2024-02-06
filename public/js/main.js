const q = document.getElementById('q')
const form = document.getElementById('form')
const cardMetoe = document.querySelector('.cardMetoe')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  cardMetoe.innerHTML = ''
  const query = e.target.elements.q.value

  fetch(`http://localhost:3000/weather?q=${query}`)
    .then(res => res.json())
    .then(data => {
      const name = data.name
      const description = data.description
      const icon = data.icon
      const temp = data.temp
      let temperaturePhrase = ''

      if (temp < 0) {
        temperaturePhrase += " ❄️ Brrr... C'est très froid ! Habillez-vous chaudement et restez au coin du feu.";
      } else if (temp >= 0 && temp < 10) {
        temperaturePhrase += " 🌬️ Il fait frais. Pensez à prendre une veste et un bonnet.";
      } else if (temp >= 10 && temp < 20) {
        temperaturePhrase += " 🌤️ La température est douce, profitez de votre journée. Que diriez-vous d'une balade en forêt ?";
      } else if (temp >= 20 && temp < 30) {
        temperaturePhrase += " ☀️ Il fait chaud ! N'oubliez pas de vous hydrater et de mettre de la crème solaire.";
      } else {
        temperaturePhrase += " 🔥 Il fait très chaud ! Restez au frais si possible et évitez les efforts.";
      }

      let cloudPhrase = ''
      if (description.includes('nuage')) {
        cloudPhrase = `Les nuages ressemblent à des plumes qui s'étirent dans le ciel bleu.`
      } else if (description.includes('ciel dégagé')) {
        cloudPhrase = `Le ciel est d'un bleu éclatant, sans le moindre nuage à l'horizon.`
      } else if (description.includes('pluie')) {
        cloudPhrase = `Les nuages sont lourds et sombres, ils déversent leur colère en averses torrentielles.`
      } else if (description.includes('neige')) {
        cloudPhrase = `Les nuages sont blancs et duveteux, ils saupoudrent la terre de flocons immaculés.`
      } else if (description.includes('brouillard')) {
        cloudPhrase = `Le brouillard enveloppe la ville d'un voile mystérieux.`
      } else if (description.includes('vent')) {
        cloudPhrase = `Le vent souffle fort et fait danser les feuilles.`
      } else if (description.includes('orage')) {
        cloudPhrase = `L'orage gronde et illumine le ciel de ses éclairs.`
      } else if (description.includes('couvert')) {
        cloudPhrase = `Le ciel est gris et triste, il n'y a pas la moindre éclaircie.`
      }

      const card = `
      <div class="container d-flex justify-content-center mt-4 col-lg-6">
        <div class="card w-80">
          <div class="card-header bg-dark text-white border-bottom" id="nameCity">
            Prévisions météo
          </div>
          <div class="card-body bg-dark text-white">
            <blockquote class="blockquote mb-0">
              <h2>${name}</h2>
              <p><b>${Math.trunc(temp)}°</b> ${temperaturePhrase}</p>
              <p>
              <img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather icon" class="img-fluid">
              </p>
              <footer class="blockquote-footer"><b>Conditions :</b> ${cloudPhrase}</cite></footer>
            </blockquote>
          </div>
        </div>
      </div>
      `
      cardMetoe.insertAdjacentHTML('beforeend', card)
    })
})