const form = document.getElementById('form')
const app = document.querySelector('#app')
const MsgInsertCity = document.querySelector(".MsgInsertCity");
const loaderSearch = document.querySelector(".loader-search");
const body = document.querySelector('body')

const card1 = document.querySelector('#card-1')
const card2 = document.querySelector('#card-2')
const card3 = document.querySelector('#card-3')
const card4 = document.querySelector('#card-4')
const tempH = document.getElementById('tempH')
const iconImag = document.getElementById('iconImag')
const descriptionH = document.getElementById('description')
const annonce = document.getElementById('annonce')
const cardLeftBlock = document.querySelector('.cardLeftBlock')

window.addEventListener("load", function () {
  loader.style.display = "none";
});

form.addEventListener('submit', (e) => {
  e.preventDefault()
  loaderSearch.style.display = "flex";
  MsgInsertCity.classList.add("d-none")
  const query = e.target.elements.q.value
  fetchData(query)
})

const fetchData = (query) => {
  fetch(`/weather?q=${query}`)
    .then(res => res.json())
    .then(data => {
      loaderSearch.style.display = "none";
      MsgInsertCity.classList.add("d-none")
      updataHtml(data)
      console.log(data);
    })
  form.reset()
}

const updataHtml = (data) => {
  const name = data.name
  const description = data.weather[0].description
  const icon = data.weather[0].icon
  const temp = data.main.temp
  const error = data.error

  const feels_like = data.main.feels_like
  const humidity = data.main.humidity
  const pressure = data.main.pressure

  if (name) {
    const card1html = `
      <div class="card cards card-temp d-flex justify-content-center align-items-center position-relative" hetgh="170px">
        <p class="mt-3">
          <span class="float-start p-2 m-0 ms-0 position-absolute top-0" style="left: 0;">Maintenant</span>
          <span class="fs-1 fw-bold">${Math.trunc(temp)}°c</span>
          <img src="http://openweathermap.org/img/wn/${icon}@2x.png" height="100" width="100" alt="" />
        </p>
      </div>
      `
    const descrip = `<div class="card cards" style="overflow:hidden"><p class="descriptP"><div><span class="float-start rounded m-0 ms-0 position-absolute top-0" style="left: 0;paddind:2px; background:#cee8ff;color:#0f1c2e">Description</span></div><br/>${enoncerTemp(description)}</p></div>`
    const annonce = `
      <div class="cards card">
        <p class="mt-3">
          ${tempGest(temp)}
        </p>
      </div>
    `
    const detailRessenti = `
    <div class="cards col-12 ">
      <div class="col-5 me-3 text-center title-more-info">
        <h6 class="text-wrap">Humidité et pression</h6>
        <div class="form-text text-wrap">Détails de ressenti</div>
      </div>
      <div class="col-2 me-2">
        <div class="cards-info d-flex justify-content-center align-items-center ">
          <table>
            <tr>
              <td><span class="badge form-text fw-light ">Humidité</span></td>
            </tr>
            <tr>
              <td>
                <span class="form-text">
                  <svg fill="#e0e0e0" class="mt-2" height="30px" width="30px" version="1.1" id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 328.611 328.611" xml:space="preserve">
                    <g>
                      <path
                        d="M209.306,50.798c-2.452-3.337-7.147-4.055-10.485-1.602c-3.338,2.453-4.055,7.147-1.603,10.485
                                            c54.576,74.266,66.032,123.541,66.032,151.8c0,27.691-8.272,52.794-23.293,70.685c-17.519,20.866-42.972,31.446-75.651,31.446
                                            c-73.031,0-98.944-55.018-98.944-102.131c0-52.227,28.103-103.234,51.679-136.829c25.858-36.847,52.11-61.415,52.37-61.657
                                            c3.035-2.819,3.209-7.565,0.39-10.6c-2.819-3.034-7.565-3.209-10.599-0.39c-1.11,1.031-27.497,25.698-54.254,63.765
                                            c-24.901,35.428-54.586,89.465-54.586,145.71c0,31.062,9.673,59.599,27.236,80.353c20.361,24.061,50.345,36.779,86.708,36.779
                                            c36.794,0,66.926-12.726,87.139-36.801c17.286-20.588,26.806-49.117,26.806-80.33C278.25,156.216,240.758,93.597,209.306,50.798z" />
                      <path
                        d="M198.43,148.146l-95.162,95.162c-2.929,2.929-2.929,7.678,0,10.606c1.465,1.464,3.385,2.197,5.304,2.197
                                            s3.839-0.732,5.304-2.197l95.162-95.162c2.929-2.929,2.929-7.678,0-10.606C206.107,145.217,201.359,145.217,198.43,148.146z" />
                      <path d="M191.965,207.899c-13.292,0-24.106,10.814-24.106,24.106s10.814,24.106,24.106,24.106s24.106-10.814,24.106-24.106
                                            S205.257,207.899,191.965,207.899z M191.965,241.111c-5.021,0-9.106-4.085-9.106-9.106s4.085-9.106,9.106-9.106
                                            s9.106,4.085,9.106,9.106S196.986,241.111,191.965,241.111z" />
                      <path
                        d="M125.178,194.162c13.292,0,24.106-10.814,24.106-24.106s-10.814-24.106-24.106-24.106s-24.106,10.814-24.106,24.106
                                            S111.886,194.162,125.178,194.162z M125.178,160.949c5.021,0,9.106,4.085,9.106,9.106s-4.085,9.106-9.106,9.106
                                            c-5.021,0-9.106-4.085-9.106-9.106S120.156,160.949,125.178,160.949z" />
                    </g>
                  </svg>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span class="form-text fw-lighter ">${humidity}%</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="col-2 me-2">
        <div class="cards-info d-flex justify-content-center align-items-center ">
          <table>
            <tr>
              <td><span class="badge form-text fw-light ">Ressenti</span></td>
            </tr>
            <tr>
              <td>
                <span class="form-text">
                  <svg fill="#e0e0e0" class="mt-2" height="30px" width="30px" viewBox="0 0 32 32" id="Layer_1"
                            data-name="Layer 1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <style>
                        .cls-1 {
                          fill: none;
                        }
                      </style>
                    </defs>
                    <path
                      d="M26,30H22a2.0059,2.0059,0,0,1-2-2V21a2.0059,2.0059,0,0,1-2-2V13a2.9465,2.9465,0,0,1,3-3h6a2.9465,2.9465,0,0,1,3,3v6a2.0059,2.0059,0,0,1-2,2v7A2.0059,2.0059,0,0,1,26,30ZM21,12a.9448.9448,0,0,0-1,1v6h2v9h4V19h2V13a.9448.9448,0,0,0-1-1Z"
                      transform="translate(0 0)" />
                    <path
                      d="M24,9a4,4,0,1,1,4-4h0A4.0118,4.0118,0,0,1,24,9Zm0-6a2,2,0,1,0,2,2h0a2.0059,2.0059,0,0,0-2-2Z"
                      transform="translate(0 0)" />
                    <path d="M10,20.1839V12H8v8.1839a3,3,0,1,0,2,0Z" transform="translate(0 0)" />
                    <path
                      d="M9,30A6.9931,6.9931,0,0,1,4,18.1108V7A5,5,0,0,1,14,7V18.1108A6.9931,6.9931,0,0,1,9,30ZM9,4A3.0033,3.0033,0,0,0,6,7V18.9834l-.332.2983a5,5,0,1,0,6.664,0L12,18.9834V7A3.0033,3.0033,0,0,0,9,4Z"
                      transform="translate(0 0)" />
                    <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1"
                      width="32" height="32" />
                  </svg>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span class="form-text fw-lighter ">${Math.trunc(feels_like)}°C</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="col-2">
        <div class="cards-info d-flex justify-content-center align-items-center ">
          <table>
            <tr>
              <td><span class="badge form-text fw-light ">Pression</span></td>
            </tr>
            <tr>
              <td>
                <span class="form-text">
                  <svg class="mt-2" height="30px" width="30px" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15.7639 7C16.3132 6.38625 17.1115 6 18 6C19.6569 6 21 7.34315 21 9C21 10.6569 19.6569 12 18 12H3M8.50926 4.66667C8.87548 4.2575 9.40767 4 10 4C11.1046 4 12 4.89543 12 6C12 7.10457 11.1046 8 10 8H3M11.5093 19.3333C11.8755 19.7425 12.4077 20 13 20C14.1046 20 15 19.1046 15 18C15 16.8954 14.1046 16 13 16H3"
                      stroke="#e0e0e0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span class="form-text fw-lighter ">${pressure}hPa</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    `
    const nameCity = `
      <div class="cards-left" >
        <span class="p-2 rounded me-3" style="background:#cee8ff">
          <svg id="Layer_1" style="enable-background:new 0 0 100.353 100.352;" version="1.1"
            viewBox="0 0 100.353 100.352" fill="#0f1c2e" class="" height="30px" width="30px" xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g>
              <path
                d="M58.23,69.992l14.993-24.108c0.049-0.078,0.09-0.16,0.122-0.245c2.589-4.222,3.956-9.045,3.956-13.969   c0-14.772-12.018-26.79-26.79-26.79S23.72,16.898,23.72,31.67c0,4.925,1.369,9.75,3.96,13.975c0.03,0.074,0.065,0.146,0.107,0.216   l14.455,24.191c-11.221,1.586-18.6,6.2-18.6,11.797c0,6.935,11.785,12.366,26.829,12.366S77.3,88.783,77.3,81.849   C77.301,76.226,69.578,71.509,58.23,69.992z M30.373,44.294c-2.39-3.804-3.653-8.169-3.653-12.624   c0-13.118,10.672-23.79,23.791-23.79c13.118,0,23.79,10.672,23.79,23.79c0,4.457-1.263,8.822-3.652,12.624   c-0.05,0.08-0.091,0.163-0.124,0.249L54.685,70.01c-0.238,0.365-0.285,0.448-0.576,0.926l-4,6.432L30.507,44.564   C30.472,44.471,30.427,44.38,30.373,44.294z M50.472,91.215c-14.043,0-23.829-4.937-23.829-9.366c0-4.02,7.37-7.808,17.283-8.981   l4.87,8.151c0.269,0.449,0.751,0.726,1.274,0.73c0.004,0,0.009,0,0.013,0c0.518,0,1-0.268,1.274-0.708l5.12-8.232   C66.548,73.9,74.3,77.784,74.3,81.849C74.301,86.279,64.515,91.215,50.472,91.215z" />
              <path
                d="M60.213,31.67c0-5.371-4.37-9.741-9.741-9.741s-9.741,4.37-9.741,9.741s4.37,9.741,9.741,9.741   C55.843,41.411,60.213,37.041,60.213,31.67z M43.731,31.67c0-3.717,3.024-6.741,6.741-6.741s6.741,3.024,6.741,6.741   s-3.023,6.741-6.741,6.741S43.731,35.387,43.731,31.67z" />
            </g>
          </svg>
        </span>
        <span id="cityName">
        ${name}
        </span>
      </div>`

    cardLeftBlock.innerHTML = nameCity
    card1.innerHTML = card1html
    card2.innerHTML = descrip
    card3.innerHTML = detailRessenti
    card4.innerHTML = annonce

    MsgInsertCity.classList.add("d-none")
  }

  if (error) {
    app.insertAdjacentHTML('beforeend', error)
    MsgInsertCity.classList.add("d-none")
  }
}

const tempGest = (temp) => {
  let temperaturePhrase = ''

  if (temp >= -20 && temp < 14) {
    temperaturePhrase = `<p class="text-center"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
  y="0px" width="45px" height="45px" viewBox="0 0 700.236 700.236"
  xml:space="preserve" fill="#cee8ff">
  <g>
    <path d="M645.527,495.815l-75.609-43.689l63.832-38.015c10.262-4.944,13.438-18.724,7.602-28.855
		c-5.941-10.375-18.764-12.563-28.498-6.89l-85.107,49.849L392.488,349.51l135.258-77.894l85.107,49.768
		c2.658,1.945,6.078,3.08,9.881,3.08c7.213,0,13.674-3.404,18.617-9.889c5.699-10.294,2.66-23.911-7.602-28.855l-63.832-38.015
		l75.609-43.688c9.855-5.674,13.244-18.4,7.602-28.856c-5.389-10.051-18.723-13.536-28.879-7.619l-75.99,44.094l-1.135-76.03
		c-0.178-11.753-9.119-21.237-20.896-21.237c-11.775,0-20.984,10.213-20.895,21.237l0.754,100.346l-134.496,77.894V155.788
		l84.727-48.309c9.891-5.593,14.201-18.643,8.357-28.855c-5.934-10.375-18.115-13.456-28.498-7.619l-64.586,36.475V21.236
		c0-11.753-9.5-21.236-21.277-21.236c-11.777,0-20.896,9.483-20.896,21.236v87.053l-66.871-37.285
		c-10.416-5.755-22.274-2.513-28.118,7.619c-5.933,10.375-2.245,23.101,7.976,28.855l87.013,49.039v156.518l-137.542-79.353
		l0.762-98.077c1.143-11.023-8.738-21.237-20.515-21.237h-0.762c-11.016,0-20.774,9.484-20.896,21.237l-0.762,73.76l-74.084-42.554
		c-10.343-5.998-23.109-2.432-28.499,7.538c-5.642,10.537-2.724,22.939,7.603,28.937l74.846,43.283l-65.354,39.15
		C53.96,290.664,50.758,304.443,57,314.575c4.02,6.566,9.873,9.889,17.856,9.889c4.174,0,7.651-1.054,11.015-3.08l85.489-50.498
		l137.162,78.624l-137.162,79.434l-85.489-50.578c-10.262-5.998-23.49-3.161-28.872,6.89c-5.642,10.456-2.578,23.02,7.214,28.855
		l65.355,38.744l-74.847,43.689c-10.302,5.998-13.642,18.643-7.603,28.937C51.342,532.614,57,536.1,64.976,536.1
		c1.897,0,5.698-1.135,10.643-3.08l74.084-42.554l0.762,73.76c0.122,11.753,9.88,20.831,20.896,20.831h0.762
		c11.777,0,20.604-9.808,20.515-21.642l-0.762-97.996l137.542-78.623v155.707l-87.013,49.038
		c-10.383,5.836-14.015,18.562-7.976,28.856c4.223,7.214,9.881,10.699,17.856,10.699c3.802,0,7.303-0.648,10.262-2.351
		l66.871-37.935v88.513c0,11.753,9.119,20.912,20.896,20.912c11.777,0,21.277-9.159,21.277-20.912v-87.054l64.586,36.476
		c2.957,1.702,6.459,2.351,9.881,2.351c8.355,0,14.516-3.404,18.617-10.699c5.771-10.213,2.043-23.021-8.357-28.856l-84.727-47.498
		V385.985l134.496,77.894l-0.754,99.536c-0.098,11.834,9.119,21.642,20.896,21.642s20.717-9.078,20.895-20.831l1.135-76.435
		l75.99,44.499c2.934,1.702,6.84,2.27,11.023,2.27c7.977,0,13.828-3.323,17.855-9.889
		C659.363,514.539,655.382,501.489,645.527,495.815z" />
  </g><g></g><g></g><g></g><g></g><g></g>
  <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
</svg></p><p class="text-center">Il fait frais. Pensez à prendre une veste et un bonnet.</p>`;
  } else if (temp >= 14 && temp < 20) {
    temperaturePhrase = `<p class="text-center">
    <svg id="Expanded" fill="#cee8ff" width="45px" height="45px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <title />
      <path d="M39,12.58a1,1,0,0,0,1-1V9.44a1,1,0,1,0-2,0v2.14A1,1,0,0,0,39,12.58Z" />
      <path
        d="M47.92,15a.91.91,0,0,0,.45.11,1,1,0,0,0,.89-.55s.26-.5,1.09-1.81a1,1,0,1,0-1.69-1.07,21.44,21.44,0,0,0-1.18,2A1,1,0,0,0,47.92,15Z" />
      <path d="M55.33,21.94a1,1,0,0,0,.54-.17s.4-.25,1.7-1a1,1,0,1,0-1-1.76c-1.39.76-1.8,1-1.84,1.06a1,1,0,0,0,.56,1.83Z" />
      <path d="M60,29.42H57.85a1,1,0,0,0,0,2H60a1,1,0,0,0,0-2Z" />
      <path d="M57.63,40.07l-1.75-1.13a1,1,0,1,0-1.11,1.67l1.79,1.15a1,1,0,0,0,1.38-.31A1,1,0,0,0,57.63,40.07Z" />
      <path
        d="M20.33,20.81c1.42.77,1.93,1,1.93,1a1.06,1.06,0,0,0,.45.11,1,1,0,0,0,.89-.55A1,1,0,0,0,23.16,20s-.52-.25-1.87-1a1,1,0,0,0-1.36.4A1,1,0,0,0,20.33,20.81Z" />
      <path
        d="M28.64,14.56a1,1,0,0,0,.9.55A1,1,0,0,0,30,15a1,1,0,0,0,.45-1.34s-.26-.52-1-1.93a1,1,0,1,0-1.75,1C28.38,14,28.63,14.55,28.64,14.56Z" />
      <path
        d="M50.36,42.88a10.65,10.65,0,0,0-.74-2.19,14.29,14.29,0,0,0,3.63-6.46A14.58,14.58,0,0,0,51.8,23a14.81,14.81,0,0,0-26.9,2.64A14.83,14.83,0,0,0,10.41,38.7a8.46,8.46,0,0,0,1.05,16.86H49.68a6.41,6.41,0,0,0,6.14-6.43A6.31,6.31,0,0,0,50.36,42.88ZM42.29,18a12.9,12.9,0,0,1,7.77,6,12.94,12.94,0,0,1-1.48,14.89,10.67,10.67,0,0,0-6-4.1l-.1,0c-.33-.08-.66-.14-1-.19l-.27,0A8.62,8.62,0,0,0,40,34.48c-.39,0-.75,0-1.13,0A14.63,14.63,0,0,0,27,25.72,12.74,12.74,0,0,1,42.29,18Zm7.34,35.58H11.46a6.46,6.46,0,0,1-.13-12.91h.95l.05-.93A13,13,0,0,1,25.24,27.63a12.1,12.1,0,0,1,1.21.06l.27,0c.35,0,.69.09,1,.16l.13,0A12.93,12.93,0,0,1,38.14,40.53a10.29,10.29,0,0,1-.56,3.8,1,1,0,0,0,.56,1.3,1,1,0,0,0,.37.07,1,1,0,0,0,.93-.62,12.39,12.39,0,0,0,.7-4.55,15.06,15.06,0,0,0-.57-4.05H40a7.17,7.17,0,0,1,1,.07l.2,0A8.57,8.57,0,0,1,47.49,41l.47.86A9,9,0,0,1,48.52,44l.11.87h.88a4.37,4.37,0,0,1,4.31,4.31A4.41,4.41,0,0,1,49.63,53.56Z" />
    </svg>
    </p class="text-center">La température est douce, profitez de votre journée. Que diriez-vous d'une balade en forêt ?`;
  } else if (temp >= 20 && temp < 30) {
    temperaturePhrase = `<p class="text-center"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
  y="0px" fill="#cee8ff" width="45px" height="45px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;"
  xml:space="preserve">
  <g>
    <g id="_x37__5_">
      <g>
        <path d="M76.5,286.875H19.125C8.568,286.875,0,295.443,0,306c0,10.557,8.568,19.125,19.125,19.125H76.5
				c10.557,0,19.125-8.568,19.125-19.125C95.625,295.443,87.057,286.875,76.5,286.875z M306,95.625
				c10.557,0,19.125-8.568,19.125-19.125V19.125C325.125,8.568,316.557,0,306,0c-10.557,0-19.125,8.568-19.125,19.125V76.5
				C286.875,87.057,295.443,95.625,306,95.625z M490.002,148.792l40.182-40.182c7.401-7.401,7.401-19.393,0-26.794
				s-19.394-7.401-26.795,0l-40.182,40.182c-7.401,7.401-7.401,19.393,0,26.794C470.609,156.194,482.601,156.194,490.002,148.792z
				 M141.716,443.509l-40.182,40.182c-7.401,7.401-7.401,19.393,0,26.794s19.393,7.401,26.794,0l40.182-40.182
				c7.401-7.401,7.401-19.393,0-26.794S149.118,436.107,141.716,443.509z M130.203,157.246c7.478,7.478,19.584,7.478,27.042,0
				c7.459-7.478,7.459-19.584,0-27.042L116.682,89.62c-7.478-7.478-19.584-7.478-27.043,0c-7.478,7.478-7.478,19.584,0,27.043
				L130.203,157.246z M306,516.375c-10.557,0-19.125,8.568-19.125,19.125v57.375c0,10.557,8.568,19.125,19.125,19.125
				c10.557,0,19.125-8.568,19.125-19.125V535.5C325.125,524.943,316.557,516.375,306,516.375z M481.797,454.754
				c-7.478-7.478-19.584-7.478-27.043,0c-7.478,7.479-7.478,19.584,0,27.043l40.564,40.564c7.478,7.478,19.584,7.478,27.043,0
				c7.459-7.479,7.478-19.584,0-27.043L481.797,454.754z M592.875,286.875H535.5c-10.557,0-19.125,8.568-19.125,19.125
				c0,10.557,8.568,19.125,19.125,19.125h57.375c10.557,0,19.125-8.568,19.125-19.125C612,295.443,603.432,286.875,592.875,286.875z
				 M306,133.76c-95.128,0-172.24,77.112-172.24,172.24S210.872,478.24,306,478.24S478.24,401.128,478.24,306
				S401.128,133.76,306,133.76z M306,439.837c-73.918,0-133.837-59.919-133.837-133.837S232.082,172.163,306,172.163
				S439.837,232.082,439.837,306S379.918,439.837,306,439.837z" />
      </g>
    </g>
  </g>
</svg></p><p class="text-center">Il fait chaud ! N'oubliez pas de vous hydrater et de mettre de la crème solaire.</p>`;
  } else {
    temperaturePhrase = `<p class="text-center">
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
      y="0px" fill="#cee8ff" width="45px" height="45px" viewBox="0 0 301.605 301.605" style="enable-background:new 0 0 301.605 301.605;" xml:space="preserve">
      <g>
      <path d="M236.896,38.375v12.854h-49.808V38.375H236.896z M216.009,66.389h-28.921v12.854h28.921V66.389z M187.088,107.257h49.808
		  V94.404h-49.808V107.257z M216.009,122.425h-28.921v12.854h28.921V122.425z M187.088,163.293h49.808v-12.854h-49.808V163.293z
		  M194.852,236.533c0,35.881-29.191,65.072-65.072,65.072s-65.072-29.191-65.072-65.072c0-23.252,12.211-44.384,32.134-56.074
		  V32.938C96.843,14.775,111.618,0,129.78,0s32.938,14.775,32.938,32.938v147.522C182.641,192.137,194.852,213.275,194.852,236.533z
		  M181.998,236.533c0-19.73-10.964-37.565-28.619-46.53l-3.515-1.787V32.944c0-11.08-9.01-20.084-20.084-20.084
		  c-11.073,0-20.084,9.004-20.084,20.084v155.272l-3.515,1.787c-17.655,8.972-28.619,26.806-28.619,46.53
		  c0,28.792,23.426,52.218,52.218,52.218S181.998,265.325,181.998,236.533z M171.291,236.533c0,22.886-18.619,41.505-41.511,41.505
	  	c-22.886,0-41.505-18.619-41.505-41.505c0-18.76,12.674-35.232,30.823-40.058l2.384-0.636V52.97h16.601v142.862l2.384,0.643
		  C158.624,201.301,171.291,217.78,171.291,236.533z M131.837,208.866c-0.99-4.396-5.411-7.288-9.917-6.26
		  c-15.733,3.56-26.723,17.32-26.723,33.465c0,4.569,3.721,8.291,8.291,8.291s8.291-3.721,8.291-8.291
		  c0-8.207,5.797-15.482,13.798-17.288C130.024,217.76,132.839,213.313,131.837,208.866z" />
    </g>
  </svg>
  </p><p class="text-center">Il fait très chaud ! Restez au frais si possible et évitez les efforts.</p>`;
  }

  return temperaturePhrase
}

const enoncerTemp = (description) => {
  let cloudPhrase = ''
  if (description?.includes('nuage')) {
    cloudPhrase = `Les nuages ressemblent à des plumes qui s'étirent dans le ciel bleu, comme si des oiseaux géants avaient laissé leur trace dans l'air. Ils forment des motifs variés et changeants, qui invitent à l'imagination et à la rêverie.`
  } else if (description?.includes('ciel dégagé')) {
    cloudPhrase = `Le ciel est d'un bleu éclatant, sans le moindre nuage à l'horizon. On dirait une immense toile peinte par un artiste inspiré. Le soleil brille de mille feux, réchauffant la peau et le cœur.`
  } else if (description?.includes('pluie')) {
    cloudPhrase = `Les nuages sont lourds et sombres, ils déversent leur colère en averses torrentielles. La pluie frappe le sol avec force, créant des flaques et des ruisseaux. L'air est humide et frais, et l'on entend le bruit de l'eau qui ruisselle.`
  } else if (description?.includes('neige')) {
    cloudPhrase = `Les nuages sont blancs et duveteux, ils saupoudrent la terre de flocons immaculés. La neige recouvre tout d'un manteau doux et silencieux. Le paysage semble féerique et magique, et l'on se sent comme dans un conte de fées.`
  } else if (description?.includes('brouillard')) {
    cloudPhrase = `Le brouillard enveloppe la ville d'un voile mystérieux. On ne distingue plus les contours des bâtiments, des arbres, des gens. Tout semble flou et lointain, comme si le monde était en pause. On avance à tâtons, guidé par les sons et les lumières.`
  } else if (description?.includes('vent')) {
    cloudPhrase = `Le vent souffle fort et fait danser les feuilles. Il balaie les nuages et les poussières, laissant place à un ciel clair. Il caresse les cheveux et les vêtements, apportant une sensation de liberté et de mouvement.`
  } else if (description?.includes('orage')) {
    cloudPhrase = `L'orage gronde et illumine le ciel de ses éclairs. Les nuages sont noirs et menaçants, ils annoncent une tempête imminente. La foudre zèbre le ciel, créant des contrastes saisissants. Le tonnerre fait trembler la terre, provoquant une peur mêlée d'admiration.`
  } else if (description?.includes('couvert')) {
    cloudPhrase = `Le ciel est gris et triste, il n'y a pas la moindre éclaircie. Les nuages sont bas et uniformes, ils semblent peser sur l'atmosphère. La lumière est faible et terne, donnant une impression de morosité et d'ennui.`
  } else if (description?.includes('bruine')) {
    cloudPhrase = `Le ciel est couvert de nuages gris, qui laissent échapper une bruine légère. La pluie est fine et discrète, mais elle mouille quand même. L'air est frais et humide, et l'on sent l'odeur de la terre.`
  } else if (description?.includes('brume')) {
    cloudPhrase = `La brume est une fine couche de gouttelettes d'eau qui flotte dans l'air, réduisant la visibilité. Elle donne au ciel une teinte grisâtre, qui se confond avec l'horizon. Elle crée une atmosphère douce et calme, propice à la contemplation.`
  } else if (description?.includes('poussière')) {
    cloudPhrase = `Le ciel est voilé par un nuage de poussière, qui obscurcit le soleil et rend l'air irrespirable. La poussière est soulevée par le vent ou par les activités humaines, créant une pollution atmosphérique. Elle recouvre tout d'une fine couche de sable, qui irrite les yeux et la peau.`
  } else {
    cloudPhrase = "La description n'est pas disponible pour cette ville"
  }
  return cloudPhrase
}