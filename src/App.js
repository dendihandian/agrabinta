import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AppLayout from './containers/AppLayout/AppLayout';
import Map from './components/AppSection/Map';
import About from './components/AppSection/About';

function App() {
  return (
    <div className="App">
      <AppLayout>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" exact component={Map} />
          </Switch>
      </AppLayout>
    </div>
  );
}

export default App;
