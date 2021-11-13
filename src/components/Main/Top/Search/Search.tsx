import React, {FC, useEffect, useState} from 'react';
import s from './Search.module.scss'
import LabelLoup from './LabelLoup/LabelLoup';
import {getHints} from "../../../../redux/search-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import SearchInput from "./SearchInput/SearchInput";

const Search:FC = () => {
    const dispatch = useDispatch()
    const hints = useSelector((state:AppStateType) => state.search.hints)

    const [showInput, setShopInput] = useState(false)
    const [letters, setLetter] = useState('')
    const [array, setArray] = useState<Array<string>>([])
    const [notMatchedArray, setNotMatchedArray] = useState<Array<string>>([]) //Отфильтрованный массив от совпадений
    const [searchList, setSearchList] = useState(array) //Массив совпадений

    useEffect(() => {
        setArray(hints)
        const matchedList = getMatchedList(letters, hints)
        setSearchList(matchedList)
        const notMatchedList = getNotMatchedList(hints, matchedList)
        setNotMatchedArray(notMatchedList)
    }, [hints])

    const handleBlur = (showInput:boolean) => {
        setShopInput(showInput)
    }

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

    let textHighlighter:any;

    const handleSubmit = () => {
        dispatch(getHints(letters))
    }

    return (
        <div className={s.search}>
            {
                showInput ?
                    <SearchInput searchList={searchList} letters={letters} handleSelect={handleSelect} notMatchedArray={notMatchedArray}
                                 textHighlighter={textHighlighter} handleBlur={handleBlur} handleChangeValue={handleChangeValue}
                                 handleSubmit={handleSubmit} isDisplayingLoup={true}
                    />

                    :
                    <>
                        <div onClick={() => setShopInput(true)} className={s.container}>
                            <LabelLoup letters={letters} handleSubmit={handleSubmit} />
                            {
                                letters !== '' ?
                                    <span className={s.closedPlaceholder}>{letters}</span>
                                    : <span className={s.closedPlaceholder}>Введите поисковый запрос</span>
                            }
                        </div>
                    </>
            }
        </div>
    );
};

export default Search;