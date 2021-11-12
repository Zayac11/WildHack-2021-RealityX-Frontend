import React from 'react';
import s from './Top.module.scss'
import logos from '../../../assets/images/Logos.png'
import Search from "./Search/Search";
import { NavLink } from 'react-router-dom';

const Top = () => {
    return (
        <div className={'gradientTop'}>
            <div className={'container'}>
                <div className={s.top}>
                    <img className={s.logos} src={logos} alt='logos' />
                    <div className={s.demo}>
                        SMART SEARCH DEMO
                    </div>
                    <div className={s.searchLine}>
                        <Search />
                        <NavLink className={s.login} to={'/login'}>
                            Войти
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;