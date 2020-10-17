import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';

// css styles
// TODO: the css was working, but icons doesn't. find a way to fix broken icons.
// NOTE: we temporary apply leaflet cdn in the public/index.html for the time being.
// import 'leaflet/dist/images/marker-icon-2x.png';
// import 'leaflet/dist/images/marker-icon.png';
// import 'leaflet/dist/images/marker-shadow.png';
// import 'leaflet/dist/leaflet.css';
import './styles/css/app.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
