import React, {FC, useState} from 'react';
import s from './Form.module.scss'
import FormItem from './FormItem/FormItem';
import {useDispatch} from "react-redux";
import LoginButton from "./LoginButton/LoginButton";

const Form:FC = () => {
    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)

    const handleSubmit = () => {

    }
    const handleKeyUp = (e:any) => {
        if(e.keyCode === 13) {
            handleSubmit()
        }
    }

    return (
        <div className={s.wrapper}>
            <div className={s.form}>
                <FormItem value={username} handleChange={setUsername} placeholder={'Введите логин'}
                          type='text' handleKeyUp={handleKeyUp} text='Логин' />
                <FormItem value={password} handleChange={setPassword} placeholder={'**********'}
                          type='password' handleKeyUp={handleKeyUp} text='Пароль' />
                <LoginButton handleSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default Form;