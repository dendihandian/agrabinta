import React from 'react';
import {Switch, Route} from 'react-router-dom';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import AppLayout from './containers/AppLayout/AppLayout';
import Map from './components/AppSection/Map';
import About from './components/AppSection/About';
import Contact from './components/AppSection/Contact';
import Hero from './components/AppSection/Hero';
import AppExample from './components/AppExample/AppExample';

import enTrans from './lang/en';
import idTrans from './lang/id';
// import AgrabintaMapTest from './components/AgrabintaMapTest/AgrabintaMapTest';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTrans
      },
      id: {
        translation: idTrans
      }
    },
    lng: "id",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

function App() {
  return (
    <div className="flex flex-col min-h-screen App">
      <AppLayout>
          <Switch>
            <Route path="/examples" component={AppExample} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/map" component={Map} />
            <Route path="/" exact component={Hero} />
          </Switch>
      </AppLayout>
      {/* <AgrabintaMapTest/> */}
    </div>
  );
}

export default App;
