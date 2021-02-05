import React, { useEffect, useState } from 'react';

import axios from 'axios';

const Convert = (props) => {
    const [ converted, setConverted ] = useState('');
    const [ error, setError ] = useState('');

    useEffect(() => {

        // if(props.language) console.log(props.language.value);

        const searchQuery = async () => {

            try {
                setError('');
                const {data} = await axios.post(`https://translation.googleapis.com/language/translate/v2`, {}, {
                    params: {
                        q: props.input,
                        target: props.language.value,
                        key: process.env.REACT_APP_TRANSLATE_API_KEY
                    }
                });       
                
                setConverted(data.data.translations[0].translatedText);

            } catch(error) {
                setError(`🤡👻 ${error.message}`);
            }
        };


        const timeoutId = setTimeout(() => {
            if(props.input) searchQuery();
        }, 500);

        return(() => {
            clearTimeout(timeoutId);
        })

        
    }, [props.input, props.language]);

    return(
        <div>
        <h1 className="ui header">
            {props.language === null ? 'Please select a language to translate'
            : error !== '' ? '' : converted}
        </h1>
        </div>
    );
};

export default Convert;