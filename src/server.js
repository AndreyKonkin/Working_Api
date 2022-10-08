import express from 'express';
import morgan from 'morgan';
import path from 'path';
import CORS from 'cors';
import { localsMiddle } from './midWar/midlwar';
import customRender from './customRender/customRender';
import registrAuth from './routers/registrAuth';
import indexRouter from './routers/indexRouter';

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const app = express();
const PORT = 3000;

app.use(CORS());
app.engine('jsx', customRender);
app.set('views', path.join(__dirname, 'components'));
app.set('view engine', 'jsx');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  next();
});

app.use(session({
  name: 'sid',
  store: new FileStore(),
  secret: 'blabla',
  saveUninitialized: false,
}));

app.use(localsMiddle);

app.use('/', indexRouter);
app.use('/auth', registrAuth);

app.listen(PORT, () => {
  console.log('Start on', PORT);
});
