import React, {FC} from 'react';
import s from './CardItem.module.scss'
import cl from 'classnames'
import {motion} from "framer-motion"

const CardItem:FC<MyProps> = ({img}) => {
    const animationItem = {
        hidden: {x: -100, y: 20, opacity: 0},
        visible: {
            x: 0,
            y: 0,
            opacity: 1
        }
    }
    return (
        <motion.div variants={animationItem} className={s.card}>
            <div className={s.front}>
                <div className={s.center}>
                    <img src={img} alt='icon' />
                </div>
                <div className={cl(s.rectangle, s.first)}></div>
                <div className={cl(s.rectangle, s.second)}></div>
            </div>
            <div className={s.back}>

            </div>
        </motion.div>
    );
};

export default CardItem;

type MyProps = {
    img: string
}