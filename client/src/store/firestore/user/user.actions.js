import { validateEmail } from '../../../helpers/form';
import swal from 'sweetalert';
import ReactGA from 'react-ga';

export const emptyError = 'Bagian ini harus diisi.'
export const emailInvalidError = 'Format email tidak benar.'

// To handle user input changes
export const handleUserInputChanges = (e) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // e.preventDefault()
    let target = e.target
    let inputId = target.id
    let value = target.value

    if (inputId === 'name') {
      dispatch(setUserName(value))
    } else if (inputId === 'email') {
      dispatch(setUserEmail(value))
    }
  }
}

const setUserName = (data) => {
  return {
    type: 'SET_USER_NAME',
    payload: data
  }
}

const setUserEmail = (data) => {
  return {
    type: 'SET_USER_EMAIL',
    payload: data
  }
}

// To validate input form of inputting user information
export const userRegisterInputValidation = (props, window) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    let name = props.userName.toLowerCase()
    let email = props.userEmail
    
    // Input is ERROR
    if (name.length <= 0) {
      await dispatch(setUserNameInputError(emptyError))
    } 
    
    if (email.length <= 0) {
      await dispatch(setUserEmailInputError(emptyError))
    } 

    if (email.length > 0 && validateEmail(email) === false) {
      await dispatch(setUserEmailInputError(emailInvalidError))
    }


    // Input is OK
    if (name.length > 0) {
      await dispatch(setUserNameInputError(false))
    } 
    
    if (email.length > 0 && validateEmail(email)) {
      await dispatch(setUserEmailInputError(false))
    }

    if (name.length > 0 && email.length > 0 && validateEmail(email) === true ) {
      await dispatch(setLoadingStatus(true))
      await dispatch(createNewUser(name, email, window))
    }
  }
}

// To handle changes from input text if error
const setUserNameInputError = (data) => {
  return {
    type: 'SET_REGISTER_USER_NAME_ERROR',
    payload: data
  }
}

const setUserEmailInputError = (data) => {
  return {
    type: 'SET_REGISTER_USER_EMAIL_ERROR',
    payload: data
  }
}

const setLoadingStatus = (data) => {
  return {
    type: 'SET_REGISTER_USER_LOADING_STATUS',
    payload: data
  }
}

// To validate input form of inputting user information
export const createNewUser = (name, email, window) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    let createdDate = new Date(Date.now())
    let newUser = {
      name, email, createdDate
    }
    let firestore = getFirestore()
    let userRef = firestore.collection('user')

    userRef.add(newUser)
      .then(async () => {
        await ReactGA.ga('send', {
          hitType: 'event',
          eventCategory: 'Register',
          eventAction: 'User Registration Successful',
          eventLabel: 'Goal'
        })
        await dispatch(setUserName(''))
        await dispatch(setUserNameInputError(false))
        await dispatch(setUserEmail(''))
        await dispatch(setUserEmailInputError(false))
        await dispatch(setLoadingStatus(false))
        await window.location.assign(`/register-user-success`)
        // await swal("Registrasi Berhasil !", "Kami akan menyampaikan perkembangan aplikasi kami melalui email. Stay tune !", "success");
      })
      .catch(async err => {
        await ReactGA.ga('send', {
          hitType: 'event',
          eventCategory: 'Register',
          eventAction: 'User Registration Error',
          eventLabel: err
        })
        await swal("ERROR !", "Silahkan hubungi tim support kami", "error");
        await dispatch(setLoadingStatus(false))
      })
  }
}
