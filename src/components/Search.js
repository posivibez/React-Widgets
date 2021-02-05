import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [ term, setTerm ] = useState('');
    const [ results, setResults ] = useState([]);

    const renderedResults = results.map(result => {
        return(
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">
                        GO
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
                </div>
            </div>
        );
    });

    useEffect(() => {
        const searchQuery = async () => {
            const { data } = await axios.get('http://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });           

            setResults(data.query.search);

        };

        const timeoutId = setTimeout(() => {
            if (term) searchQuery();
            setResults([]);

        }, 500);

        return (() => {
            console.log('cleanup');
            clearTimeout(timeoutId);
        });


    }, [term])

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Search through Wikipedia!</label>
                    <input 
                        type="text"
                        className="input"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    );
}

export default Search;