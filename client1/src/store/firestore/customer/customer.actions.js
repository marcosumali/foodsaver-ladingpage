import { validateEmail } from '../../../helpers/form';
import swal from 'sweetalert';

export const emptyError = 'Bagian ini harus diisi.'
export const emailInvalidError = 'Format email tidak benar.'

// To handle customer input changes
export const handleCustomerInputChanges = (e) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    let target = e.target
    let inputId = target.id
    let value = target.value

    if (inputId === 'name') {
      dispatch(setCustomerName(value))
    } else if (inputId === 'email') {
      dispatch(setCustomerEmail(value))
    } else if (inputId === 'businessName') {
      dispatch(setBusinessName(value))
    }
  }
}

const setCustomerName = (data) => {
  return {
    type: 'SET_CUST_NAME',
    payload: data
  }
}

const setCustomerEmail = (data) => {
  return {
    type: 'SET_CUST_EMAIL',
    payload: data
  }
}

const setBusinessName = (data) => {
  return {
    type: 'SET_CUST_BUSINESS_NAME',
    payload: data
  }
}

// To validate input form of inputting customer information
export const customerRegisterInputValidation = (props) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    let name = props.customerName.toLowerCase()
    let businessName = props.businessName.toLowerCase()
    let email = props.customerEmail
    
    // Input is ERROR
    if (name.length <= 0) {
      await dispatch(setCustomerNameInputError(emptyError))
    }

    if (businessName.length <= 0) {
      await dispatch(setBusinessNameInputError(emptyError))
    } 
    
    if (email.length <= 0) {
      await dispatch(setCustomerEmailInputError(emptyError))
    } 

    if (email.length > 0 && validateEmail(email) === false) {
      await dispatch(setCustomerEmailInputError(emailInvalidError))
    }


    // Input is OK
    if (name.length > 0) {
      await dispatch(setCustomerNameInputError(false))
    } 

    if (businessName.length > 0) {
      await dispatch(setBusinessNameInputError(false))
    } 
    
    if (email.length > 0 && validateEmail(email)) {
      await dispatch(setCustomerEmailInputError(false))
    }

    if (name.length > 0 && businessName.length > 0 && email.length > 0 && validateEmail(email) === true ) {
      await dispatch(setLoadingStatus(true))
      await dispatch(createNewCustomer(name, businessName, email))
    }
  }
}

// To handle changes from input text if error
const setCustomerNameInputError = (data) => {
  return {
    type: 'SET_REGISTER_CUST_NAME_ERROR',
    payload: data
  }
}

const setBusinessNameInputError = (data) => {
  return {
    type: 'SET_REGISTER_BUSINESS_NAME_ERROR',
    payload: data
  }
}

const setCustomerEmailInputError = (data) => {
  return {
    type: 'SET_REGISTER_CUST_EMAIL_ERROR',
    payload: data
  }
}

const setLoadingStatus = (data) => {
  return {
    type: 'SET_REGISTER_CUST_LOADING_STATUS',
    payload: data
  }
}

// To validate input form of inputting customer information
export const createNewCustomer = (name, businessName, email) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    let newCustomer = {
      name, businessName, email
    }
    let firestore = getFirestore()
    let customerRef = firestore.collection('customer')

    customerRef.add(newCustomer)
      .then(() => {
        dispatch(setLoadingStatus(false))
        dispatch(setCustomerName(''))
        dispatch(setCustomerNameInputError(false))
        dispatch(setBusinessName(''))
        dispatch(setBusinessNameInputError(false))
        dispatch(setCustomerEmail(''))
        dispatch(setCustomerEmailInputError(false))
        swal("Registrasi Berhasil !", "Kami akan menyampaikan perkembangan aplikasi kami melalui email. Stay tune !", "success");
      })
      .catch(err => {
        dispatch(setLoadingStatus(false))
        swal("ERROR !", "Silahkan hubungi tim support kami", "error");
      })
  }
}