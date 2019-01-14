**THIS PROJECT HAS BEEN DEPRECATED IN FAVOR OF [LEAN JAVASCRIPT APPLICATION STARTER](https://github.com/IsaacLean/lean-js-app-starter).**

# Lean React Starter
This codebase can help you kickoff your next React project.

## Features
### Main Dependencies
Use the latest trends so you can fit in with the Silicon Valley hipsters:

* [React](https://reactjs.org/) (v16)
* [React Router](https://github.com/ReactTraining/react-router) (v4)
* [Bootstrap](https://getbootstrap.com) (v4 Beta)

### Easy Setup
All dependencies are managed through npm. Run ```npm install``` to download and install everything you need to run the project.

### Convenient Development
Develop locally on your computer with [webpack-dev-server](https://github.com/webpack/webpack-dev-server). Simply run ```npm start``` to get the server up.

While it's running, any changes you do to your JavaScript, styles, or HTML will trigger the following:
* Automatic browser refresh so you can see changes from your code immediately
* Lint your JavaScript with [ESLint](https://eslint.org)
* Keep your JavaScript formatting clear and consistent with [Prettier](https://prettier.io)
* Lint your Sass/CSS with [stylelint](https://github.com/stylelint/stylelint) to avoid errors and enforce consistent conventions in your code

Source maps for both JavaScript and CSS make it easy to debug even after all of the transformations your code goes through.

Avoid bugs and problems with understanding your code by type checking with [Flow](https://flow.org).

### ECMAScript 2015 Support
Use some of JavaScript's latest features with ES2015. [Babel](https://babeljs.io) will handle making your code browser-compatible behind-the-scenes so you don't need to worry about lack of browser support.

### Testing
Test your scripts and components with [Jest](https://facebook.github.io/jest) and [Enzyme](http://airbnb.io/enzyme) by running ```npm test``` to make sure your code is running properly.

Run code coverage analysis with [Istanbul](https://istanbul.js.org) by running ```npm run test:coverage``` to tell you when code is being executed so you can decide if you need to rewrite code, remove unnecessary code, or require additional testing.

### Better Style Development
Build responsive, cross-browser compatible styles with Bootstrap. Extend the capabilities of CSS with [Sass](http://sass-lang.com). Use newer CSS features and let [Autoprefixer](https://github.com/postcss/autoprefixer) handle adding the vendor prefixes for you, making you type less and ensuring your application will render correctly across different browsers.

### webpack
#### The Beast Has Been Tamed
[webpack](https://webpack.js.org) (v3) can be one of the biggest obstacles you need to overcome before even starting to work on your React code. Now it's already set and ready for you to use.

#### Optimized Builds for Development & Production
Wait less with shorter compile times in the development environment. Get smaller build sizes for faster loading in the production environment through use of production versions of vendor files, minification, tree shaking, and removal of unused CSS with [PurifyCSS](https://github.com/purifycss/purifycss). Utilize hashes in production file names to effectively leverage caching.

#### Live Configuration Server Reload
If you want to update the webpack configurations while webpack-dev-server is running, the server will automatically restart to reflect the new changes so you don't have to manually restart the server process yourself.

#### Export Build Statistics
Export build stats which can be read with various analysis tools to help you better understand what webpack is doing.

### Ready for Customization
The configurations are designed to be as clean and minimal as possible, giving you an easier time reading, understanding, and customizing the codebase.

### Redux Support
If you want to use [Redux](https://redux.js.org) for state management, checkout the ```redux``` branch.

### Need Help?
Check out the [GitHub wiki](https://github.com/IsaacLean/lean-react-starter/wiki)!
