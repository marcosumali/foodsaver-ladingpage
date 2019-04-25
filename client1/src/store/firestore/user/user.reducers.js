let initialState = {
  userName: '',
  userEmail: '',
  registerUserNameError: false,
  registerUserEmailError: false,
  registerLoadingStatus: false,
}

const userDataList = (state = { ...initialState }, action) => {
  switch (action.type) {
    case 'SET_USER_NAME':
      return ({
        ...state,
        userName: action.payload
      })
    case 'SET_USER_EMAIL':
      return ({
        ...state,
        userEmail: action.payload
      })
    case 'SET_REGISTER_USER_NAME_ERROR':
      return ({
        ...state,
        registerUserNameError: action.payload
      })
    case 'SET_REGISTER_USER_EMAIL_ERROR':
      return ({
        ...state,
        registerUserEmailError: action.payload
      })
    case 'SET_REGISTER_USER_LOADING_STATUS':
      return ({
        ...state,
        registerLoadingStatus: action.payload
      })
    default:
      return state;
  }
}

export default userDataList;