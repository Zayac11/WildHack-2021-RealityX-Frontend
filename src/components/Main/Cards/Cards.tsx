import React, {FC} from 'react';
import s from './Cards.module.scss'
import fire from '../../../assets/images/fire.png'
import balloon from '../../../assets/images/balloon.png'
import stars from '../../../assets/images/stars.png'
import CardItem from './CardItem/CardItem';

const Cards:FC = () => {
    return (
        <div className={'container'}>
            <div className={s.cards}>
                <CardItem img={fire} />
                <CardItem img={stars} />
                <CardItem img={balloon} />
            </div>
        </div>
    );
};

export default Cards;