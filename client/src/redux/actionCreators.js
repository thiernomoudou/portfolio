import * as types from './types';

export const formSubmit = () => ({
  type: types.SUBMIT_FORM
});

export function update(name, value) {
    return {
      type: types.UPDATE_VALUE,
      name, value
    };
  }