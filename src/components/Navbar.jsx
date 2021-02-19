import React, { Component } from 'react';
import Identicon from 'identicon.js';
import metube from '../metube.png';
import {Navbar, Button } from "react-bootstrap";
import NavbarMenu from "./navbarMenu";
import './App.css';

class MTNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavopen: false
    };
  }

  toggleNav = () => {
    console.log('yes');
     this.setState({
       isNavopen: !(this.state.isNavopen)
     });
  }

  render() {
    const {isNavopen} = this.state;

    return (
      <div style = {{marginBottom:"1em"}}>
          <Navbar className={'cp-navbar'} fixed="top">
              <Button
                  className={`hamburger hamburger--spin ${isNavopen ? 'is-active' : ''}`}
                  type="button"
                  onClick={this.toggleNav}
                >
                <span className="hamburger-box">
                    <span className="hamburger-inner"/>
                </span>
              </Button>
              <Navbar.Toggle/>
              <img src={metube} width="60" height="50" className="d-inline-block align-top" alt="Metube" />
              <Navbar.Collapse className="justify-content-end navbar-logo">
                  <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
                      <small className="text-secondary">
                        <small id="account">{this.props.account}</small>
                      </small>
                        { this.props.account ? <img className='ml-2' width='30' height='30' src = {`data:image/png;base64,${new Identicon(this.props.account,30).toString()}`}/> : <span></span>} 
                    </li>
                  </ul>
              </Navbar.Collapse>
          </Navbar>
          <NavbarMenu toggleNav = {this.toggleNav} isopen = {this.isNavopen}/>
      </div>
    );
  }
}

export default MTNavbar;