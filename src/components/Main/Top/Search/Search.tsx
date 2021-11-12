import React, {useState} from 'react';
import s from './Search.module.scss'
import {DebounceInput} from 'react-debounce-input'

const Search = () => {
    const initialArray = ['cinema',
        'music',
        'games',
        'tv',
        'art',
        'images',
        'programming',
        'portal',
        'documents',
        'folders',
        'repositories',
        'react',]

    const [showInput, setShopInput] = useState(false)
    const [letters, setLetter] = useState('')
    const [array, setArray] = useState<Array<string>>(initialArray.sort())
    const [tags, setTags] = useState<Array<string>>([]) //Массив тегов

    const handleBlur = (showInput:boolean) => {
        setShopInput(showInput)
    }

    const handleDeleteItem = (value:string, array: Array<string>) => {
        let filteredArray = array.filter(arr => arr !== value)
        let newList = getMatchedList(letters, filteredArray)
        setArray(filteredArray)
        setSearchList(newList)
        setTags([
            ...tags, value
        ])
    }

    const handleChangeValue = (value:string) => {
        setSearchList(getMatchedList(value, array))
        setLetter(value)
    }

    const getMatchedList = (searchText:string, array:Array<string>) => {
        return array.filter(item => item.toLowerCase().includes(searchText.toLowerCase()));
    };

    const [searchList, setSearchList] = useState(array) //Массив совпадений
    let textHighlighter:any;


    return (
        <div className={s.search}>
            {
                showInput ?
                    <div className={s.inputContainer}>
                        <DebounceInput
                            value={letters}
                            autoFocus
                            placeholder='Введите поисковый запрос'
                            minLength={0}
                            className={s.input}
                            onBlur={() => handleBlur(false)}
                            type="text"
                            debounceTimeout={300}
                            onChange={(e) => handleChangeValue(e.target.value)} />

                        {
                            searchList.length > 0 &&
                            <div className={s.list}>
                                    <div className={s.listContainer}>
                                        {
                                            searchList.map((search, index) => {
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
                                                    <div key={search} className={s.item} onClick={() => handleDeleteItem(search, array)}>
                                                        <span>{textHighlighter}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                            </div>
                        }
                    </div>
                    :
                    <>
                        <div onClick={() => setShopInput(true)} className={s.container}>
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