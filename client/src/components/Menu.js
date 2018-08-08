import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hide: false
    }
  }

  toggleHeader = () => {
    const { hide } = this.state
    this.setState({ hide: !hide  })
  }

  render() {
    return( 
    <div>
        <ul className="menu">
          <li><Link to='/'><i class="fas fa-home"></i></Link></li>
          <li><Link to='/country'><i class="fas fa-atlas"></i></Link></li>
          <li><Link to='/map'><i class="fas fa-map-marked-alt"></i></Link></li>
          <li><Link to='/history'><i class="fas fa-history"></i></Link></li>
        </ul>
    </div>
  )}
}

export default Menu;
