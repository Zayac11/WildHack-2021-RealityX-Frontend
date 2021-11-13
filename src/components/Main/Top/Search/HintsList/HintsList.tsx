import React, {FC} from 'react';
import s from "./HintsList.module.scss";
import {motion} from 'framer-motion'

const HintsList:FC<MyProps> = ({searchList, notMatchedArray, letters, handleSelect}) => {
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
    let textHighlighter:any;
    return (
        <motion.div variants={animationContainer}
                    animate='visible'
                    initial='hidden'
        >
            {
                (searchList.length > 0 || notMatchedArray.length > 0) &&
                <motion.ul className={s.list}
                           variants={animationItem}
                >
                    {
                        searchList.length > 0 &&
                        searchList.map((search) => {
                            //Выделение символов
                            let searchKeywordIdx = search.indexOf(letters.toLowerCase());
                            if (searchKeywordIdx > -1) {
                                textHighlighter = [
                                    search.substring(0, searchKeywordIdx),
                                    <span style={{fontWeight: 600, color: 'black'}} key={search}>
                                                            {search.substring(searchKeywordIdx, searchKeywordIdx + letters.length)}
                                                        </span>,
                                    search.substring(searchKeywordIdx + letters.length)
                                ];
                            }
                            return (
                                <li key={search} className={s.item} onClick={() => handleSelect(textHighlighter)}>
                                    <span>{textHighlighter}</span>
                                </li>
                            )
                        })
                    }
                    {
                        notMatchedArray.length > 0 &&
                        notMatchedArray.map((item:string) => {
                            return (
                                <li key={item} className={s.item} onClick={() => handleSelect(item)}>
                                    <span>{item}</span>
                                </li>
                            )
                        })
                    }
                </motion.ul>
            }
        </motion.div>
    );
};

export default HintsList;

type MyProps = {
    searchList: Array<string>,
    notMatchedArray: Array<string>,
    letters: string
    handleSelect: (item: string) => void
}