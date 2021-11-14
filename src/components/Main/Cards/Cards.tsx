import React, {FC} from 'react';
import s from './Cards.module.scss'
import fire from '../../../assets/images/fire.png'
import balloon from '../../../assets/images/balloon.png'
import stars from '../../../assets/images/stars.png'
import CardItem from './CardItem/CardItem';
import {motion} from "framer-motion"

const Cards:FC = () => {
    const images = [fire, stars, balloon]

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

    return (
        <div className={'container'}>
            <motion.div className={s.cards}
                        variants={animationContainer}
                        initial='hidden'
                        animate='visible'>
                {
                    images.map((img, index) => {
                        return (
                            <CardItem key={img} img={img} />
                        )
                    })
                }
            </motion.div>
        </div>
    );
};

export default Cards;