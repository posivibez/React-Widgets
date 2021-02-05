import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, setSelected, label }) => {

    const [ open, setOpen ] = useState(false);
    const ref = useRef();

    const renderedOptions = options.map( (option, index) => {
        // if (selected && option.value === selected.value) return null;
        return(         
            <div className="item" key={index} onClick={() => setSelected(options[index])}>
                {option.label}
            </div>
        );
    });

    useEffect(() => {
        
        const closeDropdown = (e) => {
            if(ref.current && ref.current.contains(e.target)) return null;
            setOpen(false);
        };
                
        document.body.addEventListener('click', closeDropdown);

        return () => {
            document.body.removeEventListener('click', closeDropdown);
        };
    }, []);


    return(
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">
                    {label}
                </label>
                <div 
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>

                    <div className="text">{selected ? selected.label : 'Choose your option'}</div>

                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
            {/* Below code only used in select mood dropdown widget */}
            { label === "Select your mood:" && selected ? <div><p>Your mood now is </p> <p style={{fontWeight: 'bold', color: `${selected.value}`}}>{selected.label}</p></div> : null}
        </div>
    );
};

export default Dropdown;
