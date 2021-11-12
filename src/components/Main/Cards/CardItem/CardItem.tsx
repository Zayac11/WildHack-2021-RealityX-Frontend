import React, {FC} from 'react';
import s from './CardItem.module.scss'
import cl from 'classnames'

const CardItem:FC<MyProps> = ({img}) => {
    return (
        <div className={s.card}>
            <div className={s.front}>
                <div className={s.center}>
                    <img src={img} alt='icon' />
                </div>
                <div className={cl(s.rectangle, s.first)}></div>
                <div className={cl(s.rectangle, s.second)}></div>
            </div>
            <div className={s.back}>

            </div>
        </div>
    );
};

export default CardItem;

type MyProps = {
    img: string
}