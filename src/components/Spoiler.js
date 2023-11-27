'use client';
import React from 'react';

function Spoiler({ children }) {
    const [isCensored, setIsCensored] = React.useState(true);
    function toggleCensored() {
        setIsCensored(!isCensored);
    }
    return (
        <button onClick={toggleCensored} className={isCensored ? "censored" : undefined}>{children}</button>
    )
}

export default Spoiler;
