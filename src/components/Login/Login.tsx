import React, {FC} from 'react';
import s from './Login.module.scss'
import wildhack from "../../assets/images/wildhack.svg";
import cross from "../../assets/images/x.svg";
import reality from "../../assets/images/realityx.svg";
import Form from './Form/Form';

const Login:FC = () => {
    return (
        <div className={'outer'}>
            <div className={'gradientTop'}>
                <div className={'container'}>
                    <div className={s.top}>
                        <div className={s.logos}>
                            <img className={s.wildhack} src={wildhack} alt='wildhack' />
                            <img className={s.cross} src={cross} alt='cross' />
                            <img className={s.reality} src={reality} alt='team' />
                        </div>
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