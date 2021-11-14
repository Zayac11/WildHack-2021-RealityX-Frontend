import React from 'react';
import s from './Logo.module.scss'
import wildhack from "../../assets/images/wildhack_from_site.svg";
import cross from "../../assets/images/x.svg";
import reality from "../../assets/images/realityx_white.svg";

const Logo = () => {
    return (
        <div className={s.logos}>
            <img className={s.wildhack} src={wildhack} alt='wildhack' />
            <img className={s.cross} src={cross} alt='cross' />
            <img className={s.reality} src={reality} alt='team' />
        </div>
    );
};

export default Logo;