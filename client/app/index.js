import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import App from './containers/layouts/App';
import NotFound from './containers/pages/NotFound';

import Home from './containers/pages/Home';
import MapPage from "./containers/pages/Map";


// import './styles/styles.scss';

render((
  <Router>
    <Switch>
      <Route exact path="/" render={() => <App><Home /></App>} />
      <Route path="/map" render={() => <App><MapPage /></App>} />
      <Route component={NotFound} />
    </Switch>
  </Router>
), document.getElementById('app'));

// const map = new Map({
//   basemap: "streets"
// });

// // const view = new MapView({
// //   container: document.getElementById('viewDiv'),
// //   map,
// //   center: [-100.33, 25.69],
// //   zoom: 10,
// //   ui: {
// //     components: [] // empty the UI
// //   }
// // });

