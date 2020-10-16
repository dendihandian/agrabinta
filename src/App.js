import React from 'react';
import AgrabintaMap from './components/AgrabintaMap/AgrabintaMap';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="h-4">
          <div className="logo-wrapper">
            <h1 className="text-gray-500">Agrabinta</h1>
          </div>
        </nav>
      </header>
      <main>
        <section id="agrabinta-map">
          <AgrabintaMap/>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
