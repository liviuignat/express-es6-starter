### Starter Express app with Express, ES6, babel and piping already included

```
npm install
npm run start
npm run dev
```
### Docker

```sh
docker build -t express-es6 .

docker run -d -p 3000:3000 --name express-es6 \
  -e PORT=3000 \
  -e ENV_TEST="test env" \
  -e ENV2_TEST="test env 2" \
  express-es6
```