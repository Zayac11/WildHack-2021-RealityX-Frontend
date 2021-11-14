import React, {FC} from 'react';
import fetchingLoader from './loader.svg';
import s from './Preloader.module.scss'

let Preloader:FC = () => {
    return (
        <div className={s.preloaderContainer} >
            <img src={fetchingLoader} alt='preloader' />
        </div>
    );
}

export default Preloader;
