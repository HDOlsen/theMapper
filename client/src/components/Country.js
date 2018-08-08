import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../store/actionCreators'

class Country extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
         
          country: {},
          search: [],
          term: ""
  }
}

    handleTextChange = (e) => {

      console.log(e.target.value)
    
      this.setState({
        term : e.target.value
  })
}

    render() {
    return (
      <div class="bg-img">
          <div class="container">
            <input type="text" onChange={this.handleTextChange} placeholder="Enter country name..." name="country"></input>
            <button className="btn" onClick={() => this.props.onSearchCoun(this.state.term)}><i className=" fa fa-search"></i></button>
          </div>
      </div>
  )}
}

  const mapStateToProps = (state) => {
    return {
      country : state.country,
      search: state.search,
      term: state.term
  }
}

  const  mapDispatchToProps = (dispatch) => {
    return {
      onSearchCoun: (country, search) => dispatch(actionCreators.addCountryUsingThunk(country, search))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Country)
