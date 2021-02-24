import React from 'react';
import {Container, Segment} from "semantic-ui-react";
import MTNavbar from '../components/Navbar'
import Homepage from './Home';
import Main from './Main'

class CustomLayout extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isHome:true
        }
    }
    
    render(){
        return (
             <div className="App">
                 <MTNavbar account={this.props.account}/>

                 { this.props.loading ? <div id="loader" className="text-center mt-5"><p>Loading...</p></div> 
                        : this.state.isHome ? <Homepage ishome={this.state.isHome} videos={this.props.videos} currentHash={this.props.currentHash} currentTitle={this.props.currentTitle}/>
                             : <Main
                                 videos={this.props.videos}
                                 currentHash = {this.props.currentHash}
                                 currentTitle = {this.props.currentTitle}
                                 />
                        } 
             </div>   

        );
    }
}

export default CustomLayout;