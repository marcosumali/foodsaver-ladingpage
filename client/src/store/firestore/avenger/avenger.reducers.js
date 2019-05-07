let initialState = {
  name: '',
  email: '',
  gender: '',
  dobDate: '',
  dobMonth: '',
  dobYear: '',
  city: '',
  whatsappNo: '',
  registerNameError: false,
  registerEmailError: false,
  registerGenderError: false,
  registerDOBError: false,
  registerCityError: false,
  registerWANoError: false,
  registerLoadingStatus: false,
  dataLoadingStatus: true,
  registeredStatus: false,
  existanceStatus: true,
}

const avengerDataList = (state = { ...initialState }, action) => {
  switch (action.type) {
    case 'SET_AVENGER_NAME':
      return ({
        ...state,
        name: action.payload,
        dataLoadingStatus: false,
      })
    case 'SET_AVENGER_EMAIL':
      return ({
        ...state,
        email: action.payload
      })
    case 'SET_AVENGER_GENDER':
      return ({
        ...state,
        gender: action.payload
      })
    case 'SET_AVENGER_DOB_DATE':
      return ({
        ...state,
        dobDate: action.payload
      })
    case 'SET_AVENGER_DOB_MONTH':
      return ({
        ...state,
        dobMonth: action.payload
      })
    case 'SET_AVENGER_DOB_YEAR':
      return ({
        ...state,
        dobYear: action.payload
      })
    case 'SET_AVENGER_CITY':
      return ({
        ...state,
        city: action.payload
      })
    case 'SET_AVENGER_WHATSAPP_NO':
      return ({
        ...state,
        whatsappNo: action.payload
      })
    case 'SET_REGISTER_AVENGER_NAME_ERROR':
      return ({
        ...state,
        registerNameError: action.payload
      })
    case 'SET_REGISTER_AVENGER_EMAIL_ERROR':
      return ({
        ...state,
        registerEmailError: action.payload
      })
    case 'SET_REGISTER_AVENGER_GENDER_ERROR':
      return ({
        ...state,
        registerGenderError: action.payload
      })
    case 'SET_REGISTER_AVENGER_DOB_ERROR':
      return ({
        ...state,
        registerDOBError: action.payload
      })
    case 'SET_REGISTER_AVENGER_CITY_ERROR':
      return ({
        ...state,
        registerCityError: action.payload
      })
    case 'SET_REGISTER_AVENGER_WHATSAPP_NO_ERROR':
      return ({
        ...state,
        registerWANoError: action.payload
      })
    case 'SET_REGISTER_AVENGER_LOADING_STATUS':
      return ({
        ...state,
        registerLoadingStatus: action.payload
      })
    case 'SET_REGISTER_AVENGER_STATUS':
      return ({
        ...state,
        registeredStatus: action.payload
      })
    case 'SET_AVENGER_EXIST_ERROR':
      return ({
        ...state,
        existanceStatus: action.payload
      })
    default:
      return state;
  }
}

export default avengerDataList;