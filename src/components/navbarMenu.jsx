import { Button } from 'bootstrap';
import {React , Component } from 'react';
import {Col , Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './App.css';

export default class NavbarMenu extends Component {
    render(){
        const {isopen} = this.props;

        return (
           <div>
              <div>
                 <Container style={{flexDirection: 'column'}}>
                        <Row>
                            <Col lg={4} style={{
                                opacity: (isopen ? 1 : 0),
                                transitionDelay: '0.5s'
                            }}>Home</Col>
                        </Row>
                 </Container>
              </div>
           </div>
        );
    }
}