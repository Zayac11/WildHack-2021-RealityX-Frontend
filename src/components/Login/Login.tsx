import React, {FC, useEffect} from 'react';
import s from './Login.module.scss'
import Form from './Form/Form';
import {NavLink, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import wildhack from "../../assets/images/wildhack.svg";
import cross from "../../assets/images/x.svg";
import reality from "../../assets/images/realityx.svg";
import Logo from '../../common/Logo/Logo';

const Login:FC = () => {
    const isLogin = useSelector((state:AppStateType) => state.auth.isLogin)
    const isAuth = useSelector((state:AppStateType) => state.auth.isAuth)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if(isLogin || isAuth) {
        return <Redirect to='/' />
    }
    return (
        <div className={'outer'}>
            <div className={'gradientTop'}>
                <div className={'container'}>
                    <div className={s.top}>
                        <div className={s.front}>
                            <NavLink to={'/'} className={s.logos}>
                                <Logo />
                            </NavLink>
                            <div className={s.demo}>
                                AUTHORIZATION
                            </div>
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;