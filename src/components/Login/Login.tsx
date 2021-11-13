import React, {FC} from 'react';
import s from './Login.module.scss'
import Form from './Form/Form';
import {NavLink, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import wildhack from "../../assets/images/wildhack.svg";
import cross from "../../assets/images/x.svg";
import reality from "../../assets/images/realityx.svg";

const Login:FC = () => {
    const isLogin = useSelector((state:AppStateType) => state.auth.isLogin)
    const isAuth = useSelector((state:AppStateType) => state.auth.isAuth)

    if(isLogin || isAuth) {
        return <Redirect to='/' />
    }
    return (
        <div className={'outer'}>
            <div className={'gradientTop'}>
                <div className={'container'}>
                    <div className={s.top}>
                        <NavLink to={'/'} className={s.logos}>
                            <img className={s.wildhack} src={wildhack} alt='wildhack' />
                            <img className={s.cross} src={cross} alt='cross' />
                            <img className={s.reality} src={reality} alt='team' />
                        </NavLink>
                        <div className={s.demo}>
                            AUTHORIZATION
                        </div>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;