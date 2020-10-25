import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import SimpleExample from './SimpleExample';
import EventsExample from './EventsExample';

const AppExample = () => {
    return (
        <section id="section-example">
            <nav className="flex justify-start p-2 bg-blue-800">
                <div className="mr-2 bg-yellow-500 py-1 px-2 text-xs rounded">
                    <Link to="/examples/simple">Simple Map & Marker</Link>
                </div>
                <div className="mr-2 bg-yellow-500 py-1 px-2 text-xs rounded">
                    <Link to="/examples/events">Events</Link>
                </div>
            </nav>

            <div id="section-example-inner">
                <Switch>
                    <Route path="/examples/simple" component={SimpleExample} />
                    <Route path="/examples/events" component={EventsExample} />
                </Switch>
            </div>
        </section>
    )
}

export default AppExample;
