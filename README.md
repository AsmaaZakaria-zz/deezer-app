# Deezer App

## Tools:

-   create-react-app
-   react-router
-   redux, react-redux
-   Semantic-ui react
-   styled-components
-   react-hooks
-   Cypress
-   Deezer API

## Start Project

-   download/clone the project
-   \$ cd deezer-app
-   \$ yarn && yarn start
-   open url: localhost:3000

### Start test

To start tests you have to replace `PrivateRoute` to `Route` in `src/components/App.js`
// tests does not include login!

-   yarn test

## Available routes

-   `/` Welcome page, you have to login to continue
-   `/genre` view genres list
-   `/genre/:id` when click on genre card in genres list view
-   `/genre/:id/artists` when click on show artists button in genre card
