import React, {StrictMode, useState} from 'react';
import { render } from 'react-dom';
import Timeline from './components/Timeline.js';
import Message from './components/Message.js';
import timelineItems from './timelineItems.js';


const App = () => {
  const [item, setItem] = useState(undefined);
  
  return (
    <div>
      <h1>Welcome Back!</h1>
      <h2>Click an event to get more information or edit the name</h2>
      <br/>
      <Timeline timelineItems={timelineItems} assign={setItem}/>
      <br/>
      { item && <Message item={item}/> } 
    </div>
  )
};

render(<StrictMode><App /></StrictMode>, document.getElementById('root'));
