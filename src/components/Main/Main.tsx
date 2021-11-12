import React, {FC} from 'react';
import s from './Main.module.scss'
import Top from './Top/Top';

const Main:FC = () => {
    return (
        <div className={'outer'}>
            <Top />
        </div>
    );
};

export default Main;