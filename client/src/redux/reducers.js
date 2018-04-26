import * as types from './types';

export const initialState = {
    values:{
        name: '',
        email: '',
        text: '',
        verification: ''
    },
    placeholders:{
        name: 'Your Name',
        email: 'Your Email',
        text: 'Your message',
        verification: '1 + 1 = ?   Enter the result here'
    }
    
  };


export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SUBMIT_FORM:
            verifyInput(state.values)
        case types.UPDATE_VALUE:
            return Object.assign({}, state, {
                values:{
                    name: action.value,
                    email: action.value,
                    text: action.value,
                    verification: action.value
                }
            })
        default:
            return state;
    }
};


function verifyInput(e){
    // if (e==='2'){
    //     alert('cool');
    // }else{
    //     alert(`${e} is not equal to 2 `)
    // }

    alert(
        `name is ${e.name}
        email is ${e.email}
        text is ${e.text}
        and ver is ${e.verification}`
    );
}
