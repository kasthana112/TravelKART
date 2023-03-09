const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({  });
const session = require('express-session');
// const sequelize = require('./config/connection');
const controller = require('./controllers/index');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// const sess = {
//     secret: 'Super secret secret',
//     cookie: {
//       maxAge: 24 * 60 * 60 * 1000, 
//     },
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//       // db: sequelize,
//     }),
//   };
  
  // app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use(controller)

// sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
// })