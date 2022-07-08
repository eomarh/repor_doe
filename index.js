require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials', function (er) { });
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
   res.render('index', {
      titulo: 'Inicio'
   })
})

app.use((req, res, next) => {
   res.status(404).render("404", {
       titulo: "404",
       descripcion: "Página no encontrada"
   })
})

app.listen(port, () => {
   console.log(`Server running on http://localhost:${port}`);
})