#### Promoter

##### what is inside
* latest react, react-router, redux, immutable - see __package.json__ for full details
* api calls stub server with sample data
* webpack, babel, eslint configured with [airbnb](https://github.com/airbnb/javascript) recomendations

##### how to
* `npm run dev` to run webpack dev server backed with stubs-server for api calls: goto __localhost:5999__
* `npm run build:dev` to build dev version into __build/__ folder
* `node server/server.js` to serve build code from __build/__ folder along with api calls stubs: goto __localhost:4999__
* `npm run lint` for linter

##### TODO
* tests
* production build
