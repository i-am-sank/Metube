import React from 'react';
import {Container, Segment} from "semantic-ui-react";
import {Row, Col} from 'react-bootstrap';
import MTNavbar from '../components/Navbar';
import bgImg from '../img/dark.jpg'

class CustomLayout extends React.Component {

    render(){
        return (
             <div>
                 <MTNavbar/>

                  <div style={{minHeight:"100vh",backgroundColor: "rgb(243,243,243)"}}>
                   {this.props.children}
                  </div>
                  
                  <Segment className="bg-dark p-5" style={{backgroundImage: `url(${bgImg})`}}>
                     <Container className="text-center text-light">
                        <p>Powered  by  <i className="bi bi-hexagon-fill"></i> IPFS</p>
                        <p>_____________________________________________________</p>
                        <Row>
                            <Col xs={4}></Col>
                            <Col><a href="https://www.linkedin.com/in/sankalp-gupta-42b84118a/"><i className="bi bi-linkedin"></i></a></Col>
                            <Col><a href="https://github.com/i-am-sank"><i className="bi bi-github"></i></a></Col>
                            <Col><a href="https://www.instagram.com/_the.lone.wolf__/"><i className="bi bi-instagram"></i></a></Col>
                            <Col xs={4}></Col>
                        </Row>
                     </Container>
                  </Segment>

             </div>   

        );
    }
}

export default CustomLayout;