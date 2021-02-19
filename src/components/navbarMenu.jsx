import { Button } from 'bootstrap';
import {React , Component } from 'react';
import {Col , Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './App.css';

export default class NavbarMenu extends Component {
    render(){
        const {isopen} = this.props;

        return (
           <div classname={'navbar-menu'} style={{top:(isopen? 0:'-100%')}}>
              <div style={{height: '100%'}}>
                 <Container style={{flexDirection: 'column'}}>
                        <Row className={'navbar-menu-row'}>
                            <Col lg={4} className={'navbar-link'} style={{
                                top: (isopen ? 0 : 80),
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