import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {searchAPI} from "../api/search-api";
import {StatusCodesEnum} from "../api/api";

export type InitialStateType = typeof initialState
let initialState = {
    hints: [] as Array<string>,
    isFetch: false as boolean,
}

const searchReducer = (state = initialState, action: SearchActionsType):InitialStateType  => {
    switch (action.type) {
        case 'WB/SEARCH/HINTS_RECEIVED':
            return {
                ...state,
                hints: action.payload.hints,
            }
        case 'WB/SEARCH/TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetch: action.payload.isFetch,
            }

        default:
            return state;
    }
}

export type SearchActionsType = InferActionsTypes<typeof searchActions>

export const searchActions = {
    hintsReceived: (hints: Array<string>) =>
        ({type: 'WB/SEARCH/HINTS_RECEIVED', payload: {hints}} as const),
    toggleIsFetching: (isFetch: boolean) =>
        ({type: 'WB/SEARCH/TOGGLE_IS_FETCHING', payload: {isFetch}} as const),

}

type ThunkType = BaseThunkType<SearchActionsType>

export const getHints = (letters: string): ThunkType => {
    return async (dispatch) => {
        dispatch(searchActions.toggleIsFetching(true))
        try {
            let data = await searchAPI.getHints(letters)
            console.log('getHints', data)
            if(data.status === StatusCodesEnum.Success) {
                dispatch(searchActions.hintsReceived(data.hints))
            }
            else {
                throw Error()
            }
            dispatch(searchActions.toggleIsFetching(false))
        }
        catch (e:any) {
            console.error('getHints Error', e.config)
            dispatch(searchActions.toggleIsFetching(false))
        }
    }
}

export default searchReducer;