# Deezer App

React-Redux app using Deezer-API

-   [Tools](#tools)
-   [Features](#features)
-   [Getting started](#getting-started)
-   [Deploy](#deploy)
-   [Tests](#start-tests)

## Tools:

-   create-react-app
-   react-router-dom (navigation)
-   redux, react-redux (state management)
-   Semantic-ui react (css framework)
-   styled-components
-   react-hooks
-   Cypress (testing)
-   Deezer API (api)

## Features:

-   User Auth using Deezer-API authentication
-   Listing a Genres Lists
-   Listing the related artists for every genre

## Getting started

-   download/clone the project
-   \$ cd deezer-app
-   \$ yarn && yarn start
-   open url: localhost:3000

## Deploy

You can open deployed version on Heroku
https://deezer-app.herokuapp.com/

### Start tests

To start tests you have to replace `PrivateRoute` to `Route` in `src/components/App.js`
// tests does not include login!

-   yarn test

click `Run all specs` button

## Available routes

-   `/` Welcome page, you have to login to continue
-   `/genre` view genres list
-   `/genre/:id` when click on genre card in genres list view
-   `/genre/:id/artists` when click on show artists button in genre card
