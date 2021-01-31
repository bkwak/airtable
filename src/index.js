import React from 'react';
import { render } from 'react-dom';
import Timeline from './components/Timeline.js';
import timelineItems from './timelineItems.js';

const App = () => (

  <div>
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
    <h3>{timelineItems.length} timeline items to render</h3>
    <br/>
    <Timeline timelineItems={timelineItems}/>
  </div>
);

render(<App />, document.getElementById('root'));
