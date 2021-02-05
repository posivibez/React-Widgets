import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'French',
        value: 'fr',
    },
    {
        label: 'Arabic',
        value: 'ar',
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];

const label = 'Select language';


const Translate = () => {
    const [ language, setLanguage ] = useState(null);
    const [ text, setText ] = useState('');

    return(
        <div className="ui form">
            <div className="field">
                <label>Enter Text</label>
                <input value={text} onChange={e => setText(e.target.value)} />
            </div>


            <Dropdown 
                options={options}
                selected={language}
                setSelected={setLanguage}
                label='Select language'
            />
            <hr />
            <h3 className="ui header">Translation:</h3>

            <Convert 
                input={text}
                language={language}
            />
        </div>
    );
};

export default Translate;