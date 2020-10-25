import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import SimpleExample from './SimpleExample';
import EventsExample from './EventsExample';
import ViewportExample from './ViewportExample';
import VectorLayersExample from './VectorLayersExample';
import OtherLayersExample from './OtherLayersExample';
import TooltipExample from './TooltipExample';
import ZoomControlExample from './ZoomControlExample';
import LayersControlExample from './LayersControlExample';
import PaneExample from './PaneExample';
import DraggableExample from './DraggableExample';
import BoundsExample from './BoundsExample';
import CustomComponentExample from './CustomComponentExample';
import AnimateExample from './AnimateExample';
import WMSTileLayerExample from './WMSTileLayerExample';
import VideoOverlayExample from './VideoOverlayExample';
import CustomIconsExample from './CustomIconsExample';

const AppExample = () => {
    // const examples = [
    //     {
    //         'path': '/examples/simple',
    //         'label': 'Simple Map & Marker',
    //         'component': <SimpleExample />,
    //     }
    // ];

    return (
        <section id="section-example">
            <nav className="flex justify-start p-2 bg-blue-800">
                {/* {examples.map((example, i) => {
                    return (
                        <div key={i} className="mr-2 bg-yellow-500 py-1 px-2 text-xs rounded flex items-center justify-center text-center">
                            <Link to={example.path}>{example.label}</Link>
                        </div>
                    )
                })} */}

                <div className="mr-2 bg-yellow-500 py-1 px-2 text-xs rounded flex items-center justify-center text-center">
                    <Link to="/examples/simple">Simple Map & Marker</Link>
                </div>
                <div className="mr-2 bg-yellow-500 py-1 px-2 text-xs rounded flex items-center justify-center text-center">
                    <Link to="/examples/events">Events</Link>
                </div>
                <div className="mr-2 bg-yellow-500 py-1 px-2 text-xs rounded flex items-center justify-center text-center">
                    <Link to="/examples/viewport">Viewport</Link>
                </div>
                <div className="mr-2 bg-yellow-500 py-1 px-2 text-xs rounded flex items-center justify-center text-center">
                    <Link to="/examples/vector-layers">Vector Layers</Link>
                </div>
                <div className="mr-2 bg-yellow-500 py-1 px-2 text-xs rounded flex items-center justify-center text-center">
                    <Link to="/examples/other-layers">Other Layers</Link>
                </div>
                <div className="mr-2 bg-yellow-500 py-1 px-2 text-xs rounded flex items-center justify-center text-center">
                    <Link to="/examples/tooltip">Tooltip</Link>
                </div>
                <div className="mr-2 bg-yellow-500 py-1 px-2 text-xs rounded flex items-center justify-center text-center">
                    <Link to="/examples/zoom-control">Zoom Control</Link>
                </div>
                <div className="mr-2 bg-yellow-500 py-1 px-2 text-xs rounded flex items-center justify-center text-center">
                    <Link to="/examples/layers-control">Layers Control</Link>
                </div>
                <div className="mr-2 bg-yellow-500 py-1 px-2 text-xs rounded flex items-center justify-center text-center">
                    <Link to="/examples/pane">Pane</Link>
                </div>
                <div className="mr-2 bg-yellow-500 py-1 px-2 text-xs rounded flex items-center justify-center text-center">
                    <Link to="/examples/draggable">Draggable</Link>
                </div>
                <div className="mr-2 bg-yellow-500 py-1 px-2 text-xs rounded flex items-center justify-center text-center">
                    <Link to="/examples/bounds">Bounds</Link>
                </div>
                <div className="mr-2 bg-yellow-500 py-1 px-2 text-xs rounded flex items-center justify-center text-center">
                    <Link to="/examples/custom-component">Custom Component</Link>
                </div>
                <div className="mr-2 bg-yellow-500 py-1 px-2 text-xs rounded flex items-center justify-center text-center">
                    <Link to="/examples/animate">Animate</Link>
                </div>
                <div className="mr-2 bg-yellow-500 py-1 px-2 text-xs rounded flex items-center justify-center text-center">
                    <Link to="/examples/wms-tile">WMS Tile</Link>
                </div>
                <div className="mr-2 bg-yellow-500 py-1 px-2 text-xs rounded flex items-center justify-center text-center">
                    <Link to="/examples/video-overlay">Video Overlay</Link>
                </div>
                <div className="mr-2 bg-yellow-500 py-1 px-2 text-xs rounded flex items-center justify-center text-center">
                    <Link to="/examples/custom-icons">Custom Icons</Link>
                </div>
            </nav>

            <div id="section-example-inner">
                <Switch>
                    {/* {examples.map((example, i) => {
                        return (
                            <Route key={i} path="/examples/events" component={example.component} />
                        )
                    })} */}
                    <Route path="/examples/simple" component={SimpleExample} />
                    <Route path="/examples/events" component={EventsExample} />
                    <Route path="/examples/viewport" component={ViewportExample} />
                    <Route path="/examples/vector-layers" component={VectorLayersExample} />
                    <Route path="/examples/other-layers" component={OtherLayersExample} />
                    <Route path="/examples/tooltip" component={TooltipExample} />
                    <Route path="/examples/zoom-control" component={ZoomControlExample} />
                    <Route path="/examples/layers-control" component={LayersControlExample} />
                    <Route path="/examples/pane" component={PaneExample} />
                    <Route path="/examples/draggable" component={DraggableExample} />
                    <Route path="/examples/bounds" component={BoundsExample} />
                    <Route path="/examples/custom-component" component={CustomComponentExample} />
                    <Route path="/examples/animate" component={AnimateExample} />
                    <Route path="/examples/wms-tile" component={WMSTileLayerExample} />
                    <Route path="/examples/video-overlay" component={VideoOverlayExample} />
                    <Route path="/examples/custom-icons" component={CustomIconsExample} />
                </Switch>
            </div>
        </section>
    )
}

export default AppExample;
