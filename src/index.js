const express = require('express')
const path = require('path')
const { engine } = require('express-handlebars')
const { weather } = require('../utils/weather')

const app = express()
const port = 3000


const pathDirectoryViews = path.join(__dirname, '../views')
const pathDirectoryPublic = path.join(__dirname, '../public')

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', pathDirectoryViews)

app.use(express.static(pathDirectoryPublic))

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home'
  })
})

app.get('/weather', (req, res) => {
  const { q } = req.query

  /* if (!q) {
    res.send("⚠️ Oups ! Vous avez oublié de saisir le nom de la ville. Veuillez le spécifier pour continuer.")
  }
  */
  weather(q, (data) => {
    res.send(data)
  })

})

app.get('/about', (req, res) => {
  res.render('about',
    {
      title: 'About'
    })
})

/* app.use((req, res) => {
  res.status(404).render('404',{
    title: '404'
  })
}) */

app.get('*', (req, res) => {
  res.render('404', {
    title: '404'
  })
})

app.use((err, req, res, next) => {
  console.log(err.stack)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))