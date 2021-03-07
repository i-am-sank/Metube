import React, { Component } from 'react';
import Identicon from 'identicon.js';
import metube from './metube.png';
import {Navbar, Button, Nav, Form, FormControl, Container, Row} from "react-bootstrap";
import {connect} from 'react-redux';

class MTNavbar extends Component {
  
  render() {

    return (
      <div style = {{marginBottom:"4em"}}>
          <Navbar bg="light" variant="light" expand="lg" fixed="top">
             <img src={metube} width="85" height="55" className="d-inline-block align-top" alt="Metube" />
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">
                 <Nav.Link href="/">Home</Nav.Link>
                 <Nav.Link href={`/Main/${this.props.latestHash}/${this.props.latestTitle}`}>Latest</Nav.Link>
                 <Nav.Link href="/Main/upload">Upload</Nav.Link>
                 <Nav.Link href="#About">About</Nav.Link>   
               </Nav>
               <Form inline>
                 <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                 <Button variant="outline-primary">Search</Button>
               </Form>
               <div className="justify-content-end navbar-logo">
                 <ul className="navbar-nav px-3">
                   <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
                     <Container fluid>
                       <Row>
                       <h5><small className="text-secondary text-center">
                       <small id="account">{this.props.account}</small>
                     </small></h5>
                      { this.props.account ? <img className='ml-2' width='35' height='35' src = {`data:image/png;base64,${new Identicon(this.props.account,30).toString()}`}/> : <span></span>}
                       </Row>
                     </Container>
                   </li>
                 </ul>
             </div>
             </Navbar.Collapse>
         </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.account,
    latestHash: state.latestHash,
    latestTitle: state.latestTitle
  }
}

export default connect(mapStateToProps)(MTNavbar);

