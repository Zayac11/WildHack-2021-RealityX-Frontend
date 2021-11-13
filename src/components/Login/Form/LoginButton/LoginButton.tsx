import React, {FC} from 'react';
import s from './LoginButton.module.scss'

const LoginButton:FC<MyProps> = ({handleSubmit}) => {
    return (
        <button className={s.button} onClick={() => handleSubmit()}>
            Войти
        </button>
    );
};

export default LoginButton;

type MyProps = {
    handleSubmit: () => void,
}