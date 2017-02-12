# generator-redux-stack

A react/redux generator with all the build tooling goodies.

[![Circle CI](https://circleci.com/gh/zakangelle/generator-redux-stack/tree/master.svg?style=shield)](https://circleci.com/gh/zakangelle/generator-redux-stack/tree/master)

<img src='https://dl.dropboxusercontent.com/s/4w9bsn1ti8zbz7b/octo.png' width='400px'>

## Requirements

+ NodeJS
+ Yeoman

## Tech Stack

* [react](https://facebook.github.io/react/) - View layer
* [redux](https://github.com/reactjs/redux) - State management
* [sass](http://sass-lang.com/) - CSS preprocessor
* [react-css-modules](https://github.com/gajus/react-css-modules) - Scoped CSS modules
* [babel](https://babeljs.io/) - ES6/JSX compiler
* [webpack](https://webpack.github.io/) - Module bundler
* [jest](https://facebook.github.io/jest/) - Test suite

## Dev Tooling

* Hot module replacement (using [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware))
* Redux time travel environment (using [redux-devtools](https://github.com/gaearon/redux-devtools), [redux-devtools-log-monitor](https://github.com/gaearon/redux-devtools-log-monitor))
* Redux action log (using [redux-logger](https://github.com/evgenyrodionov/redux-logger))

## Setup

Install it globally:

```sh
$ npm install -g generator-redux-stack
```

## Usage

Make a folder for your app:

```sh
$ mkdir app-name && cd app-name
```

Generate the scaffolding:

```sh
$ yo redux-stack
```

Boot up the app at [http://localhost:3000](http://localhost:3000):

```sh
$ npm start
```

If you opt in to the API server, a sample endpoint will be set up at [http://localhost:3000/api/test](http://localhost:3000/api/test).

## License

MIT
