import * as types from './types';

export const initialState = {
  values: {},
  placeholders: {
    name: 'Your Name',
    email: 'Your Email',
    text: 'Your message',
    verification: '1 + 1 = ?   Enter the result here',
  },
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUBMIT_FORM:
      sendEmailToServer();
      return Object.assign({}, state, {
        values: {},
      });
    default:
      return state;
  }
};


function sendEmailToServer() {
  alert('Sending email to the server for processing...');
}
