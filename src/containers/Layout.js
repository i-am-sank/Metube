import React from 'react';
import {Container, Segment} from "semantic-ui-react";
import {Row, Col} from 'react-bootstrap';
import MTNavbar from '../components/Navbar';

class CustomLayout extends React.Component {

    render(){
        return (
             <div>
                 <MTNavbar/>

                  <div style={{minHeight:"100vh",backgroundColor: "rgb(243,243,243)"}}>
                   {this.props.children}
                  </div>
                  
                  <Segment className="bg-dark p-3">
                     <Container className="text-center text-light">
                        <p>Powered by <i class="bi bi-hexagon-fill"></i> IPFS</p>
                        <p>____________________________________________________________________</p>
                        <Row>
                            <Col xs={3}></Col>
                            <b>Contact Me:</b>
                            <Col><a href=""><i className="bi bi-linkedin"></i></a></Col>
                            <Col><a href=""><i class="bi bi-google"></i></a></Col>
                            <Col><a href=""><i class="bi bi-github"></i></a></Col>
                            <Col><a href=""><i class="bi bi-instagram"></i></a></Col>
                            <Col xs={3}></Col>
                        </Row>
                     </Container>
                  </Segment>

             </div>   

        );
    }
}

export default CustomLayout;