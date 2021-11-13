import React, {FC} from 'react';
import s from './Top.module.scss'
import cl from "classnames";
import { NavLink } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import Search from "./Search/Search";
import {authActions} from "../../../redux/auth-reducer";
import {AppStateType} from "../../../redux/redux-store";
import reality from '../../../assets/images/realityx.svg'
import cross from '../../../assets/images/x.svg'
import wildhack from '../../../assets/images/wildhack.svg'

const Top:FC = () => {

    const dispatch = useDispatch()
    const isAuth = useSelector((state:AppStateType) => state.auth.isAuth)
    const username = useSelector((state:AppStateType) => state.auth.username)

    const handleLogout = () => {
        dispatch(authActions.setIsUserLogin(false))
        dispatch(authActions.login(false))
        dispatch(authActions.logout())
    }

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
                        {
                            isAuth ?
                                <div onClick={() => handleLogout()} className={cl(s.logout, s.login)}>
                                    Выйти
                                </div>
                            :
                                <NavLink className={s.login} to={'/login'}>
                                    Войти
                                </NavLink>
                        }
                    </div>
                    {
                        isAuth &&
                            <div className={s.authorizedContainer}>
                                <div className={s.authorized}>
                                    Вы авторизированы как пользователь {username}
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Top;