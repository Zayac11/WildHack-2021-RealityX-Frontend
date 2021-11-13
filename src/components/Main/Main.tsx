import React, {FC, useEffect} from 'react';
import AdaptiveTop from './AdaptiveTop/AdaptiveTop';
import Cards from './Cards/Cards';
import Top from './Top/Top';
import {useDispatch} from "react-redux";
import {searchActions} from "../../redux/search-reducer";

const Main:FC = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0)
        return () => {
            dispatch(searchActions.hintsReceived([]))
        }
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