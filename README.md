[![Netlify Status](https://api.netlify.com/api/v1/badges/c47b3712-aae1-411d-a8eb-0e1a4eaf6ea3/deploy-status)](https://app.netlify.com/sites/currency-converter-redux/deploys)

## Overview

This currency conversion app was inspired by [this code challenge](https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Currency-Converter.md). It was intended as an exercise in familiarizing myself with Redux and React Redux. 

See it live [here](https://currency-converter-redux.netlify.app/). Please note, there is an hourly limit to the number of api calls on a free account.

## Technologies Used
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/) && [React Redux](https://react-redux.js.org/)
- [Material UI](https://mui.com/)
- [Currency Converter Api](https://www.currencyconverterapi.com/)

## Local Development
If you want to clone, fork, or modify this project: 

1. Clone:
    ```
    git clone git@github.com:keithrpotempa/currency-converter-redux.git && cd $_
    ```
1. Build dependencies:
    ```
    yarn
    ```
1. Get a free api key [here](https://free.currencyconverterapi.com/) 
1. Create a `.env.local` file at the root of the project with this:
    ```
    REACT_APP_API_KEY=YOURKEYHERE
    ```
1. Run the application in development mode
    ```
    yarn
    ```
1. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
