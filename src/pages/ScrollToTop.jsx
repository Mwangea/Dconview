import { useEffect } from "react";
import { useLocation } from "react-router-dom";
//import React from 'react'

const ScrollToTop = () => {
  
    //extract pathname property(key) from an object
    const { pathname } = useLocation();

    //Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname]);
};

export default ScrollToTop;