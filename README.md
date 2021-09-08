# StockTab Chrome Extension
Chrome extension that customizes new tabs to display daily stock information created using react, polygon.io REST API, Bing News Search API, chart.js (2 for react). Customization aims to improve awareness for stock-holders, traders, or trading hobbyists, through providing graphics on updates on the current market and news.
The following is displayed
- Local time/date
- Google search bar 
- Market status (from Polygon.io)
- Time series graphs for 3 major market indexes (NASDAQ, DOWJONES, SP&500) (from Polygon.io)
- News on stocks/finance (from Bing API)

### Preview:
#### Demo:
https://user-images.githubusercontent.com/72533858/132594419-7be87aa0-d44a-4e21-a163-07c86901aa84.mov

#### Default view:
Market status, date and current time (updating live), and a google search bar.
<img width="700" alt="Screen Shot 2021-08-31 at 2 38 00 PM" src="https://user-images.githubusercontent.com/72533858/131557822-a41507c7-bf1e-4ff9-82a3-149e504179e8.png">

#### Scrolled view:
Time series graphs from the most recent month for three market indexes, and news from the current day with the keyword "Stocks" obtained from bing news search. Information on title, publication date, image, and description of the article is displayed in a thumbnail. A total of 10 articles are displayed.


### Installation instructions:
Due to API restrictions the extension is not published in the chrome store.
To use this extension, 
1. Download the zip file or repository
2. Use IDE of choosing (that can run react/html/css) to open the folder
3. Build the react app using the "Getting Started with Create React App" instructions below
4. Open chrome extension manager and click "load unpacked"
5. Load the build folder
6. Refresh to display your chrome extension

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
