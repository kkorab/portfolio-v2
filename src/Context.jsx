import React, {useState, useEffect, createContext} from 'react'

export const PortfolioContext = createContext();

export const PortfolioContextProvider = (props) => {
    const [isMobile, setIsMobile] = useState(false);

    const fixedScrolling = (e) => {
        e.preventDefault();
        const target = e.currentTarget.getAttribute('href').slice(1);
        const coords = document.getElementById(target).getBoundingClientRect();
        const scrollCoords = window.scrollY;
        const navHeight = 110;
        window.scrollTo(0, (coords.top-navHeight+scrollCoords
        ));

        (isMobile ? (window.scrollTo(0, (coords.top+scrollCoords))) : (window.scrollTo(0, (coords.top-navHeight+scrollCoords))))
    }

    useEffect(() => {
        handleScreenSize()
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleScreenSize);
    }, [isMobile])

    const handleScreenSize = () => {
        if (window.innerWidth < 800) {
            setIsMobile(true);
        }
        else {
            setIsMobile(false);
        }
    }

    return (
        <PortfolioContext.Provider value={{isMobile: isMobile, fixedScrolling: fixedScrolling}}>
            {props.children}
        </PortfolioContext.Provider>
    )
}
