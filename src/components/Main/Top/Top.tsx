import React, {FC} from 'react';
import s from './Top.module.scss'
import reality from '../../../assets/images/realityx.svg'
import cross from '../../../assets/images/x.svg'
import wildhack from '../../../assets/images/wildhack.svg'
import Search from "./Search/Search";
import { NavLink } from 'react-router-dom';

const Top:FC = () => {
    return (
        <div className={'gradientTop'}>
            <div className={'container'}>
                <div className={s.top}>
                    <div className={s.logos}>
                        <img className={s.wildhack} src={wildhack} alt='wildhack' />
                        <img className={s.cross} src={cross} alt='cross' />
                        <img className={s.reality} src={reality} alt='team' />
                    </div>
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