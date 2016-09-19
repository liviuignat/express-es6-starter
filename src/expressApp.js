import Express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = new Express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());

app.use((req, res) => {
  res.status(200);
  res.send(`Hello world. ENV_TEST="${process.env.ENV_TEST}" ENV2_TEST="${process.env.ENV2_TEST}"`);
});

export default app;
