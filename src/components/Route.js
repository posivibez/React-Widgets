import { useState, useEffect } from 'react';

const Route = ({path, children}) => {

    //state not entirely necessary but makes sure rerendered on widget change
    const [ widget, setWidget ] = useState(window.location.pathname);


    //add eventlistener to listen for popstate from Link component
    useEffect(() => {

        const onWidgetChange = () => {
            setWidget(window.location.pathname);
        };

        window.addEventListener('popstate', onWidgetChange);

        return () => {
            window.removeEventListener('popstate', onWidgetChange);
        }
    }, [])

    //rerender whenever widget change clicked and popstate triggered
    //return diff child in App
    if(path === widget) {
        return children;
    }

    return null;

};

export default Route;