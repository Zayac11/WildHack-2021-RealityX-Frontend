import React, {FC} from 'react';
import s from "./LabelLoup.module.scss";
import search from "../../../../../assets/images/search.svg";

const LabelLoup:FC<MyProps> = ({letters, handleSubmit}) => {
    return (
        <>
            {
                letters.length > 0 ?
                    <div onClick={() => handleSubmit()} className={s.searchLabel}>
                        <img className={s.searchImg} src={search} alt='search' />
                    </div>
                    :
                    <div className={s.searchLabel}>
                        <img className={s.searchImg} src={search} alt='search' />
                    </div>

            }
        </>
    );
};

export default LabelLoup;

type MyProps = {
    letters: string,
    handleSubmit: () => void,
}