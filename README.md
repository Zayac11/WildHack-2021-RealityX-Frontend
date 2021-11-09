# WildHack 2021

This MVP was made by RealityX.

**Stack:**

[![ReactJs](https://img.shields.io/badge/React.js-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Redux](https://img.shields.io/badge/Redux.js-764ABC?logo=redux&logoColor=white)](https://redux.js.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?logo=docker&logoColor=white)](https://www.docker.com/)


## Installation and layout

Download Node.js from https://nodejs.org/en/download/

* Update npm
    ```bash
    npm install -g npm
    ```

* Clone this repository
    ```bash
    git clone https://github.com/Zayac11/WildHack-2021-RealityX-Frontend
    ```

* Open a console in a folder and go to the cloned repository
    ```bash
    cd WildHack-2021-RealityX-Frontend
    ```

* Install the packages required for the project
    ```bash
    npm install
    ```

* Finally, start the project
    * Create `.env` file in the directory named `WildHack-2021-RealityX-Frontend` and add your secret data to it
        ```env
        REACT_APP_PRODUCTION_URL = "your domain name"
        ```
    * And start project
        ```bash
        npm start
        ```

Now wait, our project will open soon in the browser on the http://localhost:3000/

## Build

1. Open console in `WildHack-2021-RealityX-Frontend`
2. `npm run build` builds the app for production to the build folder.
