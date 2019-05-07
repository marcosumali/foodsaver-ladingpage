import ReactGA from 'react-ga';
import swal from 'sweetalert';

import { validateEmail, validatePhone, formatPhone } from '../../../helpers/form';

export const emptyError = 'Bagian ini harus diisi.'
export const emptyDateError = 'Bagian tanggal, bulan dan tahun harus diisi.'
export const emailInvalidError = 'Format email tidak benar.'
export const phoneInvalidError = 'Format nomor Whatsapp tidak benar.'

// To handle user input changes
export const handleUserInputChanges = (e) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // e.preventDefault()
    let target = e.target
    let inputId = target.id
    let value = target.value

    if (inputId === 'name') {
      dispatch(setAvengerName(value))
    } else if (inputId === 'email') {
      dispatch(setAvengerEmail(value))
    } else if (inputId === 'gender') {
      dispatch(setAvengerGender(value))
    } else if (inputId === 'date') {
      dispatch(setAvengerDOBDate(value))
    } else if (inputId === 'month') {
      dispatch(setAvengerDOBMonth(value))
    } else if (inputId === 'year') {
      dispatch(setAvengerDOBYear(value))
    } else if (inputId === 'city') {
      dispatch(setAvengerCity(value))
    } else if (inputId === 'whatsapp') {
      dispatch(setAvengerWhatsappNo(value))
    }
  }
}

export const setAvengerName = (data) => {
  return {
    type: 'SET_AVENGER_NAME',
    payload: data
  }
}

export const setAvengerEmail = (data) => {
  return {
    type: 'SET_AVENGER_EMAIL',
    payload: data
  }
}

export const setAvengerGender = (data) => {
  return {
    type: 'SET_AVENGER_GENDER',
    payload: data
  }
}

export const setAvengerDOBDate = (data) => {
  return {
    type: 'SET_AVENGER_DOB_DATE',
    payload: data
  }
}

export const setAvengerDOBMonth = (data) => {
  return {
    type: 'SET_AVENGER_DOB_MONTH',
    payload: data
  }
}

export const setAvengerDOBYear = (data) => {
  return {
    type: 'SET_AVENGER_DOB_YEAR',
    payload: data
  }
}

export const setAvengerCity = (data) => {
  return {
    type: 'SET_AVENGER_CITY',
    payload: data
  }
}

export const setAvengerWhatsappNo = (data) => {
  return {
    type: 'SET_AVENGER_WHATSAPP_NO',
    payload: data
  }
}

// To validate input form of inputting user information
export const avengerRegisterInputValidation = (props, window, id) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    let name = props.avgName.toLowerCase()
    let email = props.avgEmail
    let gender = props.avgGender.toLowerCase()
    let dobDate = props.avgDOBDate.toLowerCase()
    let dobMonth = props.avgDOBMonth.toLowerCase()
    let dobYear = props.avgDOBYear.toLowerCase()
    let city = props.avgCity.toLowerCase()
    let whatsapp =  props.avgWhatsapp
    
    // Input is ERROR
    if (name.length <= 0) {
      await dispatch(setAvgNameInputError(emptyError))
    } 
    
    if (email.length <= 0) {
      await dispatch(setAvgEmailInputError(emptyError))
    } 

    if (email.length > 0 && validateEmail(email) === false) {
      await dispatch(setAvgEmailInputError(emailInvalidError))
    }

    if (gender.length <= 0 || gender === 'jenis kelamin') {
      await dispatch(setAvgGenderInputError(emptyError))
    }

    if (dobDate.length <= 0 || dobDate === 'tanggal' || dobMonth.length <= 0 || dobMonth === 'bulan' || dobYear.length <= 0 || dobYear === 'tahun') {
      await dispatch(setAvgDOBInputError(emptyDateError))
    }

    if (city.length <= 0 || city === 'nama kota tempat tinggal anda') {
      await dispatch(setAvgCityInputError(emptyError))
    }
    
    if (whatsapp.length <= 0) {
      await dispatch(setAvgWhatsappInputError(emptyError))
    }

    let phoneResult = validatePhone(whatsapp)
    if (whatsapp.length > 0 && phoneResult.status === false) {
      await dispatch(setAvgWhatsappInputError(phoneInvalidError))
    }

    // Input is OK
    if (name.length > 0) {
      await dispatch(setAvgNameInputError(false))
    } 
    
    if (email.length > 0 && validateEmail(email)) {
      await dispatch(setAvgEmailInputError(false))
    }

    if (gender.length > 0 && gender !== 'jenis kelamin') {
      await dispatch(setAvgGenderInputError(false))
    }

    if (dobDate.length > 0 && dobDate !== 'tanggal' && dobMonth.length > 0 && dobMonth !== 'bulan' && dobYear.length > 0 && dobYear !== 'tahun') {
      await dispatch(setAvgDOBInputError(false))
    }

    if (city.length > 0 && city !== 'nama kota tempat tinggal anda') {
      await dispatch(setAvgCityInputError(false))
    }

    if (whatsapp.length > 0 && phoneResult.status === true) {
      await dispatch(setAvgWhatsappInputError(false))
    }

    if (name.length > 0 && 
      email.length > 0 && validateEmail(email) === true &&
      gender.length > 0 && gender !== 'jenis kelamin' && 
      dobDate.length > 0 && dobDate !== 'tanggal' && dobMonth.length > 0 && dobMonth !== 'bulan' && dobYear.length > 0 && dobYear !== 'tahun' && 
      whatsapp.length > 0 && phoneResult.status === true) {
      await dispatch(setLoadingStatus(true))
      await dispatch(createNewAvenger(id, name, email, gender, dobDate, dobMonth, dobYear, city, whatsapp, window))
    }
  }
}


// To handle changes from input text if error
const setAvgNameInputError = (data) => {
  return {
    type: 'SET_REGISTER_AVENGER_NAME_ERROR',
    payload: data
  }
}

const setAvgEmailInputError = (data) => {
  return {
    type: 'SET_REGISTER_AVENGER_EMAIL_ERROR',
    payload: data
  }
}

const setAvgGenderInputError = (data) => {
  return {
    type: 'SET_REGISTER_AVENGER_GENDER_ERROR',
    payload: data
  }
}

const setAvgDOBInputError = (data) => {
  return {
    type: 'SET_REGISTER_AVENGER_DOB_ERROR',
    payload: data
  }
}

const setAvgCityInputError = (data) => {
  return {
    type: 'SET_REGISTER_AVENGER_CITY_ERROR',
    payload: data
  }
}

const setAvgWhatsappInputError = (data) => {
  return {
    type: 'SET_REGISTER_AVENGER_WHATSAPP_NO_ERROR',
    payload: data
  }
}

const setLoadingStatus = (data) => {
  return {
    type: 'SET_REGISTER_AVENGER_LOADING_STATUS',
    payload: data
  }
}

// To validate input form of inputting user information
export const createNewAvenger = (id, name, email, gender, dobDate, dobMonth, dobYear, city, whatsapp, window) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    let createdDate = new Date(Date.now())
    let newAvenger = {
      name, email, gender, dobDate, dobMonth, dobYear, city, whatsapp: formatPhone(whatsapp, 'E.164'), createdDate
    }
    let firestore = getFirestore()
    let avengerRef = firestore.collection('avenger').doc(id)

    avengerRef.set(newAvenger)
    .then(async () => {
      await ReactGA.ga('send', {
        hitType: 'event',
        eventCategory: 'Register',
        eventAction: 'Avenger Registration Successful',
        eventLabel: 'Goal'
      })

      await dispatch(setAvengerName(''))
      await dispatch(setAvgNameInputError(false))
      
      await dispatch(setAvengerEmail(''))
      await dispatch(setAvgEmailInputError(false))

      await dispatch(setAvengerGender(''))
      await dispatch(setAvgGenderInputError(false))
      
      await dispatch(setAvengerDOBDate(''))
      await dispatch(setAvengerDOBMonth(''))
      await dispatch(setAvengerDOBYear(''))
      await dispatch(setAvgDOBInputError(false))
      
      await dispatch(setAvengerCity(''))
      await dispatch(setAvgCityInputError(false))

      await dispatch(setAvengerWhatsappNo(''))
      await dispatch(setAvgWhatsappInputError(false))

      await dispatch(setLoadingStatus(false))
      await window.location.assign(`/avengers-assemble-success/${id}`)
    })
    .catch(async err => {
      await ReactGA.ga('send', {
        hitType: 'event',
        eventCategory: 'Register',
        eventAction: 'Avenger Registration Error',
        eventLabel: err
      })
      await swal("ERROR !", "Silahkan hubungi tim support kami", "error");
      await dispatch(setLoadingStatus(false))
    })
  }
}

// To extract user data
export const getAvenger = (id, page) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    let firestore = getFirestore()
    let avengerRef = firestore.collection('avenger').doc(id)

    avengerRef
    .get()
    .then(doc => {
      if (!doc.exists) {
        // console.log('No such document!')
        dispatch(setUserExistError(false))
      } else {
        let data = doc.data()
        dispatch(setAvengerName(data.name))
        dispatch(setAvengerEmail(data.email))
        if (page === 'register') {
          dispatch(setRegisteredStatus(true))
        }
      }
    })
    .catch(err => {
      console.log('ERROR: get user')
    });
  }
}


const setUserExistError = (data) => {
  return {
    type: 'SET_AVENGER_EXIST_ERROR',
    payload: data
  }
}

const setRegisteredStatus = (data) => {
  return {
    type: 'SET_REGISTER_AVENGER_STATUS',
    payload: data
  }
}