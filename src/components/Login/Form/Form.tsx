import React, {FC, useState} from 'react';
import s from './Form.module.scss'
import FormItem from './FormItem/FormItem';
import {useDispatch} from "react-redux";
import {motion} from "framer-motion";
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

    return (
        <motion.div className={s.wrapper}
                    variants={animationContainer}
                    animate='visible'
                    initial='hidden'
        >
            <motion.div className={s.form} variants={animationItem}>
                <FormItem value={username} handleChange={setUsername} placeholder={'Введите логин'}
                          type='text' handleKeyUp={handleKeyUp} text='Логин' />
                <FormItem value={password} handleChange={setPassword} placeholder={'**********'}
                          type='password' handleKeyUp={handleKeyUp} text='Пароль' />
                <LoginButton handleSubmit={handleSubmit} />
            </motion.div>
        </motion.div>
    );
};

export default Form;