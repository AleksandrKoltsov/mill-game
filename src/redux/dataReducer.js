import {INCREMENT_ITERATOR, GAME_OVER, SET_QUESTIONS, RESULT, GET_CONFIG, ISMENU} from "./types";
import Data from '../data/gameConfig'

const initialState = {
    data: Data,
    questions: [],
    iterator: 0,
    gameOver: false,
    result: 0,
    isMenu: false
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONFIG:
            return {...state, data: action.payload};
        case SET_QUESTIONS:
            return Object.assign({},state, {
                questions: action.payload,
            });
        case INCREMENT_ITERATOR:
            return {...state, iterator: action.payload};
        case GAME_OVER:
            return {...state, gameOver: action.payload};
        case RESULT:
            return {...state, result: action.payload};
        case ISMENU:
            return {...state, isMenu: action.payload};
        default: return state;
    }
};