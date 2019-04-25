import { validateEmail } from '../../../helpers/form';
import swal from 'sweetalert';

export const emptyError = 'Bagian ini harus diisi.'
export const emailInvalidError = 'Format email tidak benar.'

// To handle user input changes
export const handleUserInputChanges = (e) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
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
export const userRegisterInputValidation = (props) => {
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
      await dispatch(createNewUser(name, email))
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
export const createNewUser = (name, email) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    let newUser = {
      name, email
    }
    let firestore = getFirestore()
    let userRef = firestore.collection('user')

    userRef.add(newUser)
      .then(() => {
        dispatch(setLoadingStatus(false))
        dispatch(setUserName(''))
        dispatch(setUserNameInputError(false))
        dispatch(setUserEmail(''))
        dispatch(setUserEmailInputError(false))
        swal("Registrasi Berhasil !", "Kami akan menyampaikan perkembangan aplikasi kami melalui email. Stay tune !", "success");
      })
      .catch(err => {
        dispatch(setLoadingStatus(false))
        swal("ERROR !", "Silahkan hubungi tim support kami", "error");
      })
  }
}
