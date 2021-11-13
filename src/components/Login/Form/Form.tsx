import React, {FC, useEffect, useState} from 'react';
import s from './Form.module.scss'
import FormItem from './FormItem/FormItem';
import {useDispatch, useSelector} from "react-redux";
import {motion} from "framer-motion";
import LoginButton from "./LoginButton/LoginButton";
import {authActions, login} from "../../../redux/auth-reducer";
import LoginError from './LoginError/LoginError';
import {AppStateType} from "../../../redux/redux-store";

const Form:FC = () => {
    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isError, setIsError] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)
    const isLoginError = useSelector((state:AppStateType) => state.auth.isLoginError)

    useEffect(() => {
        setIsError(isLoginError)
    }, [isLoginError])

    const handleChangeUsername = (value: string) => {
        dispatch(authActions.setLoginError(false))
        setIsEmpty(false)
        setUsername(value)
    }
    const handleChangePassword = (value: string) => {
        dispatch(authActions.setLoginError(false))
        setIsEmpty(false)
        setPassword(value)
    }

    const handleSubmit = () => {
        if(username !== '' && password !== '') {
            dispatch(login(username, password))
        }
        else {
            setIsEmpty(true)
        }
    }
    const handleKeyUp = (e:any) => {
        if(e.keyCode === 13) {
            handleSubmit()
        }
    }

    return (
        <motion.div className={s.wrapper}
                    variants={animationContainer}
                    animate='visible'
                    initial='hidden'
        >
            <motion.div className={s.form} variants={animationItem}>
                <FormItem value={username} handleChange={handleChangeUsername} placeholder={'Введите логин'}
                          type='text' handleKeyUp={handleKeyUp} text='Логин' />
                <FormItem value={password} handleChange={handleChangePassword} placeholder={'**********'}
                          type='password' handleKeyUp={handleKeyUp} text='Пароль' />
                <div className={s.errors}>
                    {
                        isEmpty &&
                            <LoginError text={'Пожалуйста, заполните все поля'} />
                    }
                    {
                        isError &&
                            <LoginError text={'Неправильный логин или пароль'} />
                    }
                </div>
                <LoginButton handleSubmit={handleSubmit} />
            </motion.div>
        </motion.div>
    );
};

export default Form;

const animationContainer = {
    hidden: {opacity: 1, scale: 1},
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.1
        }
    }
}
const animationItem = {
    hidden: {x: 0, y: -50, opacity: 0},
    visible: {
        x: 0,
        y: 0,
        opacity: 1
    }
}