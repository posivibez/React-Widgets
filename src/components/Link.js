import React from 'react';

const Link = ({ className, href, children }) => {

    const changeWidget = (e) => {
        e.preventDefault();
        window.history.pushState({}, '', href);

        const newEvent = new PopStateEvent('popstate');
        window.dispatchEvent(newEvent);
    }

    return(
        <a href={href} className={className} onClick={changeWidget}>
            {children}
        </a>
    );
};

export default Link;