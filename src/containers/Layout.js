import React from 'react';
import {Container, Segment} from "semantic-ui-react";
import MTNavbar from '../components/Navbar'

class CustomLayout extends React.Component {
    render(){
        return (
            <div>
                <MTNavbar/>

                <div style={{minHeight:"100vh"}}>
                    {this.props.children}
                </div>
                
                <Segment
                    inverted
                    vertical
                    style={{ margin: "3em 0em 0em", padding: "1em 0em", zIndex:"100000" }}
                >
                    <Container textAlign="center">
                    Powered by IPFS
                    </Container>
                </Segment>

            </div>
        );
    }
}

export default CustomLayout;