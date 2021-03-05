import React from 'react';
import {Container, Segment} from "semantic-ui-react";
import MTNavbar from '../components/Navbar'
import Homepage from './Home';
import Main from './Main'

class CustomLayout extends React.Component {

    render(){
        return (
             <div>
                 <MTNavbar/>

                  <div style={{minHeight:"100vh"}}>
                   {this.props.children}
                  </div>
             </div>   

        );
    }
}

export default CustomLayout;