import { validateEmail, validatePhone } from '../../../helpers/form';
import swal from 'sweetalert';
import ReactGA from 'react-ga';

export const emptyError = 'Bagian ini harus diisi.'
export const emailInvalidError = 'Format email tidak benar.'
export const phoneInvalidError = 'Format nomor Whatsapp tidak benar.'

// To handle customer input changes
export const handleCustomerInputChanges = (e) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // e.preventDefault()
    let target = e.target
    let inputId = target.id
    let value = target.value

    if (inputId === 'name') {
      dispatch(setCustomerName(value))
    } else if (inputId === 'email') {
      dispatch(setCustomerEmail(value))
    } else if (inputId === 'businessName') {
      dispatch(setBusinessName(value))
    } else if (inputId === 'whatsapp') {
      dispatch(setWhatsapp(value))
    } else if (inputId === 'website') {
      dispatch(setWebsite(value))
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

const setWhatsapp = (data) => {
  return {
    type: 'SET_CUST_WHATSAPP',
    payload: data
  }
}

const setWebsite = (data) => {
  return {
    type: 'SET_CUST_WEBSITE',
    payload: data
  }
}

// To validate input form of inputting customer information
export const customerRegisterInputValidation = (props, window) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    let name = props.customerName.toLowerCase()
    let businessName = props.businessName.toLowerCase()
    let email = props.customerEmail
    let whatsapp = props.customerWhatsapp
    let website = props.customerWebsite
    
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

    if (whatsapp.length <= 0) {
      await dispatch(setCustomerWhatsappInputError(emptyError))
    }

    let phoneResult = validatePhone(whatsapp)
    if (whatsapp.length > 0 && phoneResult.status === false) {
      await dispatch(setCustomerWhatsappInputError(phoneInvalidError))
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

    if (whatsapp.length > 0 && phoneResult.status === true) {
      await dispatch(setCustomerWhatsappInputError(false))
    }

    if (name.length > 0 && businessName.length > 0 && email.length > 0 && validateEmail(email) === true && whatsapp.length > 0 && phoneResult.status === true) {
      await dispatch(setLoadingStatus(true))
      await dispatch(createNewCustomer(name, businessName, email, whatsapp, website, window))
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

const setCustomerWhatsappInputError = (data) => {
  return {
    type: 'SET_REGISTER_CUST_WHATSAPP_ERROR',
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
export const createNewCustomer = (name, businessName, email, whatsapp, website, window) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    let createdDate = new Date(Date.now())
    let newCustomer = {
      name, businessName, email, whatsapp, website, createdDate
    }
    let firestore = getFirestore()
    let customerRef = firestore.collection('customer')

    customerRef.add(newCustomer)
      .then(async () => {
        await ReactGA.ga('send', {
          hitType: 'event',
          eventCategory: 'Register',
          eventAction: 'Customer Registration Successful',
          eventLabel: 'Goal'
        })
        await dispatch(setCustomerName(''))
        await dispatch(setCustomerNameInputError(false))
        await dispatch(setBusinessName(''))
        await dispatch(setBusinessNameInputError(false))
        await dispatch(setCustomerEmail(''))
        await dispatch(setCustomerEmailInputError(false))
        await dispatch(setWhatsapp(''))
        await dispatch(setCustomerWhatsappInputError(false))
        await dispatch(setWebsite(''))
        await dispatch(setLoadingStatus(false))
        await window.location.assign(`/register-customer-success`)
        // swal("Registrasi Berhasil !", "Kami akan menyampaikan perkembangan aplikasi kami melalui email. Stay tune !", "success");
      })
      .catch(async err => {
        await ReactGA.ga('send', {
          hitType: 'event',
          eventCategory: 'Register',
          eventAction: 'Customer Registration Error',
          eventLabel: err
        })
        await swal("ERROR !", "Silahkan hubungi tim support kami", "error");
        await dispatch(setLoadingStatus(false))
      })
  }
}
