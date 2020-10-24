import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AppLayout from './containers/AppLayout/AppLayout';
import Map from './components/AppSection/Map';
import About from './components/AppSection/About';
import Contact from './components/AppSection/Contact';
import Hero from './components/AppSection/Hero';

function App() {
  return (
    <div className="App">
      <AppLayout>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/map" component={Map} />
            <Route path="/" exact component={Hero} />
          </Switch>
      </AppLayout>
    </div>
  );
}

export default App;
