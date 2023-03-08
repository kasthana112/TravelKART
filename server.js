const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({  });
// const sequelize = require('./config/connection');
const controller = require('./controllers/index');

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use(controller)

// sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
// })