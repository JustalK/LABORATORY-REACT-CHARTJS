# LABORATORY REACT with Chart.js

## Goal

On this laboratory, I am using `chart.js` in order to experiment charting on `React`.

On the first experiment, I am using `react-chartjs-2`. The library is a shortcut for Chart.js but does not provide everything from this library, so I skip `react-chartjs-2` quite fast and stick to the original one.

## Plan of the presentation

I explain with all the details how I build the project and my way of working.

- [Documentation](#documentation)
- [Organization](#organization)
- [Development](#development)
- [Running](#running)
- [Commands](#commands)

## Experiences

- **Experience 0**: Template Experience

- **Experience 1**: Testing the react-chartjs-2 for creating a radar chart
- **Experience 2**: Creating a simple line chart using Chart.js
- **Experience 3**: Creating a radar chart using Chart.js

## Links

- [Tutorial Linking Chart.js](https://blog.bitsrc.io/customizing-chart-js-in-react-2199fa81530a)

## Documentation
#### Code documentation

The jsdoc can be generated locally with the following command :

```
npm run build:docs
```

## Organization
#### Organization of the global folder

| Folder's Name | Description of the folder                               |
| :------------ | :------------------------------------------------------ |
| out           | The documentation generated by jsdoc                    |
| public        | Regroup the images and public files                     |
| src           | Regroup the source code                                 |

#### Organization of the src folder

| Folder's Name | Description of the folder                               |
| :------------ | :------------------------------------------------------ |
| components    | Regroup the components used inside the pages            |
| constants     | Regroup the exported constants                          |
| pages         | Regroup the components representing the pages           |
| services      | Regroup the services of the app                         |
| styles        | Regroup the scss files                                  |


## Development
#### Packages

- **react-app-rewired**: Allow us to rewrite the config of React without ejecting the app
- **customize-cra**: Allow us to rewrite the config of webpack and create module alias
- **eslint**: For linting the code with EsLint
- **@babel/eslint-parser**: Changing the parser for having access to eslint in babel
- **eslint-config-airbnb**: For having the set of rules airbnb for eslint
- **eslint-plugin-import**: For managing the alias import with eslint
- **eslint-plugin-react**: For managing the react rules
- **prettier**: For formating the style of the code
- **eslint-plugin-prettier**: For using the prettier package with esLint
- **sass**: For using the SASS css preprocessor (scss)
- **jsdoc**: For managing the dev documentation of the project
- **react-router-dom**: For managing the router and the path to the differents pages
- **react-helmet**: For managing the meta of the differents page

## Running

For running the API, a single command is needed.

```
npm run start
```

## Commands

- **npm run start**: Run the build version on a local server
- **npm run dev**: Run the linter and then the project in Devlopment mode
- **npm run build**: Build the project
- **npm run test**: Run the test of the project
- **npm run eject**: Eject the application (sometimes necessary)
- **npm run linter:fix**: Run the linter and fix the errors
- **npm run build:docs**: Build the documentation from the comments in the code
- **npm run check-update**: Check if the package are up to date (for now, everything is except the testing and webvital)
