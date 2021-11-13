import React, {FC} from 'react';
import s from './AdaptiveSearch.module.scss'

const AdaptiveSearch:FC<MyProps> = ({handleSearchVisible}) => {
    return (
        <div>

        </div>
    );
};

export default AdaptiveSearch;

type MyProps = {
    handleSearchVisible: (value:boolean) => void
}