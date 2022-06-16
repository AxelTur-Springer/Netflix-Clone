import { createSlice } from '@reduxjs/toolkit'

const valueSearch = createSlice({
    name: 'value',
    initialState: {
        value:""
    },
    reducers: {
      valueChange: (state, action) => {
       state.value = action.payload
      }
    },
  });
  export default valueSearch.reducer
  
  // Actions
  
  export const { valueChange } = valueSearch.actions
  export const setValue = (value) => dispatch => {
    try {
      dispatch(valueChange(value));
    } catch (e) {
      return console.error(e.message);
    }
  }
 