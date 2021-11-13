import React, {FC, useEffect, useState} from 'react';
import s from './Search.module.scss'
import {DebounceInput} from 'react-debounce-input'
import LabelLoup from './LabelLoup/LabelLoup';
import {getHints} from "../../../../redux/search-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";

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
                    <div className={s.inputContainer}>
                        <LabelLoup letters={letters} handleSubmit={handleSubmit} />
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

                        {
                            (searchList.length > 0 || notMatchedArray.length > 0) &&
                            <div className={s.list}>
                                {
                                    searchList.length > 0 &&
                                    <div className={s.listContainer}>
                                        {
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
                                                    <div key={search} className={s.item}>
                                                        <span>{textHighlighter}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                }
                                {
                                    notMatchedArray.length > 0 &&
                                    notMatchedArray.map((item:string) => {
                                        return (
                                            <div key={item} className={s.item}>
                                                <span>{item}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
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