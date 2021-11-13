import React, {FC} from 'react';
import Cards from './Cards/Cards';
import Top from './Top/Top';

const Main:FC = () => {
    return (
        <div className={'outer'}>
            <Top />
            {/*<Cards />*/}
        </div>
    );
};

export default Main;