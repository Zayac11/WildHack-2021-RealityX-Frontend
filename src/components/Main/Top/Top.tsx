import React, {FC} from 'react';
import s from './Top.module.scss'
import cl from "classnames";
import { NavLink } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import Search from "./Search/Search";
import {authActions} from "../../../redux/auth-reducer";
import {AppStateType} from "../../../redux/redux-store";
import Logo from '../../../common/Logo/Logo';
import {getHints, searchActions} from "../../../redux/search-reducer";

const Top:FC = () => {

    const dispatch = useDispatch()
    const isAuth = useSelector((state:AppStateType) => state.auth.isAuth)
    const username = useSelector((state:AppStateType) => state.auth.username)

    const handleLogout = () => {
        localStorage.removeItem('accessToken')
        dispatch(authActions.setIsUserLogin(false))
        dispatch(authActions.login(false))
        dispatch(authActions.logout())
        dispatch(searchActions.hintsReceived([]))
        dispatch(getHints(''))
    }

    return (
        <div className={'gradientTop'}>
            <div className={'container'}>
                <div className={s.top}>
                    <Logo />
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
                                    Вы авторизированы как пользователь <span>«{username}»</span>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Top;