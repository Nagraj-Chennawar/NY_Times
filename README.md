
# Getting Started
 1. **Clone this Repo**
 2. **make sure you have latest node version**
 3. **In terminal navigate to project dir**
 4. **Run npm install**
 5. **Add required config see below**
 6. **Run npm start**

## Adding configuration required
You need to create .env.development.local file at top where package.json lives

add below code in that file , please note that if dev server is running , it requires to restart the dev server 

You can get your REACT_APP_API_KEY from [NY Times developer](https://developer.nytimes.com/get-started)

```j
REACT_APP_NOT_SECRET_CODE=https://api.nytimes.com
REACT_APP_API_KEY=YOUR_API_KEY_HERE
```



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
If you wish build this project make sure to add .env.production file and add the same configuration as .env.development.local

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.



