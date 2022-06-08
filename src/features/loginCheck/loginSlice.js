import { createSlice } from '@reduxjs/toolkit'
const LogedIn = createSlice({
  name: 'user',
  initialState: {
    userLogIn: undefined,
    userName: undefined
  },
  reducers: {
    loginSuccess: (state, action) => {
     state.userLogIn = action.payload
    },
    logoutSuccess: (state, action) =>  {
      state.userLogIn = false;
    },
    UserLoginName: (state, action) => {
      state.userName = action.payload
     },
    UserLogOutName: (state, action) => {
      state.userName = action.payload
     }
  },
});
export default LogedIn.reducer

// Actions

export const { loginSuccess, logoutSuccess,UserLoginName } = LogedIn.actions
export const login = ({ username, password }) => async dispatch => {
  try {
    // const res = await api.post('/api/auth/login/', { username, password })
    dispatch(loginSuccess({username}));
  } catch (e) {
    return console.error(e.message);
  }
}
export const logout = () => async dispatch => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(logoutSuccess())
  } catch (e) {
    return console.error(e.message);
  }
}
export const UserLoginNameAction = ({usernameAc}) => async dispatch => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(UserLoginName({usernameAc}))
  } catch (e) {
    return console.error(e.message);
  }
}