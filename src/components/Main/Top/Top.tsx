import React from 'react';
import s from './Top.module.scss'
import logos from '../../../assets/images/Logos.png'
import Search from "./Search/Search";

const Top = () => {
    return (
        <div className={'gradientTop'}>
            <div className={'container'}>
                <div className={s.top}>
                    <img className={s.logos} src={logos} alt='logos' />
                    <div className={s.demo}>
                        SMART SEARCH DEMO
                    </div>
                    <Search />
                </div>
            </div>
        </div>
    );
};

export default Top;