import React from 'react';
import AgrabintaMap from './components/AgrabintaMap/AgrabintaMap';
import AppFooter from './components/AppFooter/AppFooter';
import { AppHeader } from './components/AppHeader/AppHeader';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <main>
        <section id="introduction">
          
        </section>
        <section id="agrabinta-map">
          <AgrabintaMap/>
        </section>
      </main>
      <AppFooter/>
    </div>
  );
}

export default App;
