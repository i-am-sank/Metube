import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Jumbotron} from 'react-bootstrap';


class Main extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      buffer: null,
      loading : false,
      currentHash: this.props.hash,
      currentTitle: this.props.title
    }
   } 
  
   //Change Video
   changeVideo = (hash, title) => {
        this.setState({
         'currentHash': hash,
         'currentTitle': title
       });
   }
  

  render() {
    return (
      <div className="container-fluid text-monospace bg-light">
      <br></br>
      &nbsp;
      <br></br>
        <div className="row">
          <div className="col-md-10">
            <div className="embed-responsive embed-responsive-16by9" style={{ maxHeight: '768px'}}>
              <video
                 className="bg-dark"
                 src={`https://ipfs.infura.io/ipfs/${this.state.currentHash}`}
                 controls
              ></video>  
            </div>
            <Jumbotron><h4>{this.state.currentTitle}</h4></Jumbotron>
          </div>
          <div className="col-md-2 overflow-auto text-center" style={{ maxHeight: '768px', minWidth: '175px' }}>
              {this.props.videos.map((video) => {
                return (
                <div className="card mb-4 text-center bg-secondary mx-auto" style={{ width: '200px'}}>
                <div className="card-title bg-dark">
                  <small className="text-white"><b>{video.title}</b></small>
                </div>
                  <div>
                     <p onClick={ () => this.changeVideo(video.hash, video.title)}>
                       <video
                          className="bg-dark"
                          src={`https://ipfs.infura.io/ipfs/${video.hash}`}
                          style = {{ width: '175px', height: '100px'}}
                       ></video>
                     </p>
                  </div>
              </div>
                )
              })}
              
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      videos: state.videos
  }
}

export default connect(mapStateToProps)(Main);