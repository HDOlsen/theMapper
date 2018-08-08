import * as actionTypes from './actionTypes'

export const addCountryUsingThunk = (term) => {
  return (dispatch) => {

    fetch(`https://restcountries.eu/rest/v2/name/${term}`)
    .then(response => response.json())
    .then((json) => {
      dispatch({type : actionTypes.POST_COUNTRY, country : json}),
      dispatch({type : actionTypes.POST_SEARCH, search : json})
    })
  }
}

export const addCountry = (country) => {
  return {
    type : actionTypes.POST_COUNTRY,
    country : country
  }
}

export const deleteCountry = (country) => {
  return {
    type : actionTypes.DELETE_COUNTRY,
    country : country
  }
}

export const addHistory = (search) => {
  return {
    type : actionTypes.POST_SEARCH,
    search : search
  }
}

export const deleteHistory = (search) => {
  return {
    type : actionTypes.POST_SEARCH,
    search : search
  }
}
