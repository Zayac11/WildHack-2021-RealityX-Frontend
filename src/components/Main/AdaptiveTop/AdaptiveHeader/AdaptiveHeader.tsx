import React, {FC} from 'react';
import s from './AdaptiveHeader.module.scss'
import reality from './../../../../assets/images/realityx.svg'
import loup from './../../../../assets/images/whiteLoupe.svg'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import { NavLink } from 'react-router-dom';
import cl from "classnames";
import {authActions} from "../../../../redux/auth-reducer";
import {getHints, searchActions} from "../../../../redux/search-reducer";

const AdaptiveHeader:FC<MyProps> = ({handleSearchVisible}) => {
    const dispatch = useDispatch()
    const isAuth = useSelector((state:AppStateType) => state.auth.isAuth)

    const handleLogout = () => {
        localStorage.removeItem('accessToken')
        dispatch(authActions.setIsUserLogin(false))
        dispatch(authActions.login(false))
        dispatch(authActions.logout())
        dispatch(searchActions.hintsReceived([]))
        dispatch(getHints(''))
    }

    return (
        <div className={s.header}>
            <div className={s.logoContainer}>
                <img className={s.logo} src={reality} alt='team' />
            </div>
            <div className={s.buttons}>
                <img onClick={() => handleSearchVisible(true)} className={s.loup} src={loup} alt='loup' />
                {
                    isAuth ?
                        <div onClick={() => handleLogout()} className={cl(s.logout, s.login)}>
                            Выйти
                        </div>
                    :
                        <NavLink className={s.login} to='/login'>
                            Войти
                        </NavLink>
                }
            </div>
        </div>
    );
};

export default AdaptiveHeader;

type MyProps = {
    handleSearchVisible: (value:boolean) => void
}