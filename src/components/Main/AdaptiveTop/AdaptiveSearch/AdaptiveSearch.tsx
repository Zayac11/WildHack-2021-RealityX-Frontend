import React, {FC, useEffect, useState} from 'react';
import s from './AdaptiveSearch.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {getHints} from "../../../../redux/search-reducer";
import {DebounceInput} from "react-debounce-input";
import HintsList from "../../Top/Search/HintsList/HintsList";

const AdaptiveSearch:FC<MyProps> = ({handleSearchVisible}) => {

    const dispatch = useDispatch()
    const hints = useSelector((state:AppStateType) => state.search.hints)
    const [letters, setLetter] = useState('')
    const [array, setArray] = useState<Array<string>>([])
    const [notMatchedArray, setNotMatchedArray] = useState<Array<string>>([]) //Отфильтрованный массив от совпадений
    const [searchList, setSearchList] = useState(array) //Массив совпадений

    useEffect(() => {
        dispatch(getHints('')) //Запрос за начальными данными
    }, [])

    useEffect(() => {
        setArray(hints)
        const matchedList = getMatchedList(letters, hints)
        setSearchList(matchedList)
        const notMatchedList = getNotMatchedList(hints, matchedList)
        setNotMatchedArray(notMatchedList)
    }, [hints])

    const handleSelect = (letters:string) => {
        setLetter(letters)
    }

    const handleChangeValue = (value:string) => {
        setNotMatchedArray([])
        setSearchList([])
        setLetter(value)
        dispatch(getHints(value))
    }

    const getMatchedList = (searchText:string, array:Array<string>) => {
        return array.filter(item => item.toLowerCase().includes(searchText.toLowerCase()));
    };
    const getNotMatchedList = (originalArray:Array<string>, matchedArray:Array<string>) => {
        return originalArray.filter(item => !matchedArray.includes(item));
    };

    return (
        <div className={s.searchWrapper}>
            <div className={s.search}>
                <div className={s.back}></div>
                <div className={s.searchInputContainer}>
                    <div className={s.inputContainer}>
                        <DebounceInput
                            value={letters}
                            autoFocus
                            placeholder='Поиск'
                            minLength={0}
                            className={s.input}
                            type="text"
                            debounceTimeout={500}
                            onChange={(e) => handleChangeValue(e.target.value)} />
                    </div>
                    <button onClick={() => handleSearchVisible(false)} className={s.cancel}>
                        Отмена
                    </button>
                </div>
                <HintsList searchList={searchList} notMatchedArray={notMatchedArray} letters={letters} handleSelect={handleSelect} />
            </div>
        </div>
    );
};

export default AdaptiveSearch;

type MyProps = {
    handleSearchVisible: (value:boolean) => void
}