import * as actionTypes from '../actionTypes'

const initialState = {
  country : [],
  search: []
}

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case actionTypes.POST_COUNTRY:
      return {
        ...state,
        country : state.country.concat(action.country) 
    }

    case actionTypes.DELETE_COUNTRY:
      return {
        ...state,
        country : state.country.filter(country => country !== action.country),
    }

    case actionTypes.POST_SEARCH:
      return {
        ...state,
        search : state.search.concat(action.search) 
    }
}
  return state
}   

export default reducer