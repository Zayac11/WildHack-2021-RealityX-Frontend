import React, {FC} from 'react';
import s from './SearchInput.module.scss'
import LabelLoup from "../LabelLoup/LabelLoup";
import {DebounceInput} from "react-debounce-input";
import HintsList from "../HintsList/HintsList";

const SearchInput:FC<MyProps> = ({letters, handleSubmit, handleBlur, handleSelect,
                                     searchList, notMatchedArray,
                                     handleChangeValue, isDisplayingLoup}) => {
    return (
        <div className={s.inputContainer}>
            {
                isDisplayingLoup &&
                <LabelLoup letters={letters} handleSubmit={handleSubmit} />
            }
            <DebounceInput
                value={letters}
                autoFocus
                placeholder='Введите поисковый запрос'
                minLength={0}
                className={s.input}
                onBlur={() => handleBlur(false)}
                type="text"
                debounceTimeout={500}
                onChange={(e) => handleChangeValue(e.target.value)} />

            <HintsList searchList={searchList} letters={letters} handleSelect={handleSelect}
                       notMatchedArray={notMatchedArray}
            />
        </div>
    );
};

export default SearchInput;

type MyProps = {
    isDisplayingLoup: boolean,
    letters:string,
    handleSubmit: () => void,
    handleBlur: (value: boolean) => void,
    handleChangeValue: (value: string) => void,
    searchList: Array<string>,
    notMatchedArray: Array<string>,
    handleSelect: (item: string) => void
}