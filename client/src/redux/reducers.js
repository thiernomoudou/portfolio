import * as types from './types';

export const initialState = {
    name: 'Your Name',
    email: 'Your Email',
    text: 'Your message',
    verification: '1 + 1 = ?   Enter the result here'
  };


export const rootReducer = (state = initialState, action) => {
switch(action.type) {
    case types.FILL_FORM:
    return { ...state, }
    case types.SUBMIT_FORM:
    return { ...state, }
    default:
    return state;
}
}

export default rootReducer