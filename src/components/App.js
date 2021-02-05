import React, { useState } from "react";

import Header from './Header';
import Route from './Route';
import Accordian from './Accordian';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';

const App = () => {

    
    const accordianItems = [
        {
            title: "What is the purpose of life?",
            content: "To discover your true self which is no self.",
        },
        {
            title: "What should you do when life is hard?",
            content: "Let it flow. Be mindful.",
        },
        {
            title: "Where do I end and the universe begins?",
            content: "You are already that which you seek.",
        }
    ];
    
    const dropdownOptions = [
        {
            label: 'Like a beautiful summer sky',
            value: 'blue'
        },
        {
            label: 'Like a raging fire',
            value: 'orangered'
        },
        {
            label: 'Like a dainty blossom',
            value: 'yellow'
        }
    ];

    const [ selected, setSelected ] = useState(null);
    
  return (
      <div style={{margin: '5rem 10rem'}}>
        <Header />
        <Route path='/' >
            <Accordian items={accordianItems} />
        </Route>

        <Route path='/search' >
            <Search />
        </Route>
        
        <Route path='/dropdown' >
            <Dropdown label="Select your mood:" options={dropdownOptions} selected={selected} setSelected={setSelected} />
        </Route>

        <Route path='/translate' >
            <Translate />
        </Route>

      </div>
  );
};

export default App;
