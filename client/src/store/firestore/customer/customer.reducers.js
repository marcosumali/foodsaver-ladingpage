let initialState = {
  customerName: '',
  businessName: '',
  customerEmail: '',
  registerCustomerNameError: false,
  registerBusinessNameError: false,
  registerCustomerEmailError: false,
  registerLoadingStatus: false,
}

const customerDataList = (state = { ...initialState }, action) => {
  switch (action.type) {
    case 'SET_CUST_NAME':
      return ({
        ...state,
        customerName: action.payload
      })
    case 'SET_CUST_BUSINESS_NAME':
      return ({
        ...state,
        businessName: action.payload
      })
    case 'SET_CUST_EMAIL':
      return ({
        ...state,
        customerEmail: action.payload
      })
    case 'SET_REGISTER_CUST_NAME_ERROR':
      return ({
        ...state,
        registerCustomerNameError: action.payload
      })
    case 'SET_REGISTER_BUSINESS_NAME_ERROR':
      return ({
        ...state,
        registerBusinessNameError: action.payload
      })
    case 'SET_REGISTER_CUST_EMAIL_ERROR':
      return ({
        ...state,
        registerCustomerEmailError: action.payload
      })
    case 'SET_REGISTER_CUST_LOADING_STATUS':
      return ({
        ...state,
        registerLoadingStatus: action.payload
      })
    default:
      return state;
  }
}

export default customerDataList;