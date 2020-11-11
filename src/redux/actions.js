import {INCREMENT_ITERATOR, SET_QUESTIONS, GAME_OVER, RESULT, GET_CONFIG} from "./types";

export const setQuestions = (data) => ({
    type: SET_QUESTIONS,
    payload: data
});
export const setIncrement = (data) => {
    return {
        type: INCREMENT_ITERATOR,
        payload: data
    }
};
export const gameOver = data => {
    return {
        type: GAME_OVER,
        payload: data
    }
};
export const result = data => {
    return {
        type: RESULT,
        payload: data
    }
};

export const getConfig = data => {
    return {
        type: GET_CONFIG,
        payload: data
    }
}
