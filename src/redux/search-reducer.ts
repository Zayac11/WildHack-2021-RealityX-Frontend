import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {searchAPI} from "../api/search-api";
import {StatusCodesEnum} from "../api/api";

export type InitialStateType = typeof initialState
let initialState = {
    hints: [] as Array<string>,

}

const searchReducer = (state = initialState, action: SearchActionsType):InitialStateType  => {
    switch (action.type) {
        case 'WB/SEARCH/HINTS_RECEIVED':
            return {
                ...state,
                hints: action.payload.hints,
            }

        default:
            return state;
    }
}

export type SearchActionsType = InferActionsTypes<typeof searchActions>

export const searchActions = {
    hintsReceived: (hints: Array<string>) =>
        ({type: 'WB/SEARCH/HINTS_RECEIVED', payload: {hints}} as const),

}

type ThunkType = BaseThunkType<SearchActionsType>

export const getHints = (letters: string): ThunkType => {
    return async (dispatch) => {
        try {
            let data = await searchAPI.getHints(letters)
            console.log('getHints', data)
            if(data.status === StatusCodesEnum.Success) {
                dispatch(searchActions.hintsReceived(data.hints))
            }
        }
        catch (e:any) {
            console.error('getHints Error', e.config)
        }
    }
}

export default searchReducer;