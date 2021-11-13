import React, {FC, useEffect} from 'react';
import AdaptiveTop from './AdaptiveTop/AdaptiveTop';
import Cards from './Cards/Cards';
import Top from './Top/Top';

const Main:FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className={'outer'}>
            {
                window.innerWidth >= 650
                ?    <Top />
                :    <AdaptiveTop />
            }
            <Cards />
        </div>
    );
};

export default Main;