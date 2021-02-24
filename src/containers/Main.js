import React, { Component } from 'react';

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) 

class Main extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      buffer: null,
      loading : false,
      currentHash: this.props.currentHash,
      currentTitle: this.props.currentTitle
    }
   } 

    //Get video
    captureFile = event => {
      event.preventDefault()
      const file  = event.target.files[0]
      const reader = new window.FileReader()
      reader.readAsArrayBuffer(file)
 
      reader.onloadend = () => {
        this.setState({buffer: Buffer(reader.result)})
      }
   }
 
   //Upload video
   uploadVideo = title => {
      ipfs.add(this.state.buffer, (error, result) => {
         if(error){
           console.log(error);
           return
 
         }
         this.setState({loading: true})
         this.state.dvideo.methods.uploadVideo(result[0].hash, title).send({ from: this.state.account }).on('transactionHash', (hash) => {
           this.setState({loading:false})
         })
      })
   }
 
   //Change Video
   changeVideo = (hash, title) => {
      console.log(title,hash);
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
                 src={`https://ipfs.infura.io/ipfs/${this.state.currentHash}`}
                 controls
              ></video>  
            </div>
            <h3>{this.state.currentTitle}</h3>
          </div>
          <div className="col-md-2 overflow-auto text-center" style={{ maxHeight: '768px', minWidth: '175px' }}>
            <h5><b>Share Video</b></h5>
            <form onSubmit={(event) => {
              event.preventDefault()
              const title  = this.videoTitle.value
              this.uploadVideo(title)
             }} >
              &nbsp;
              <input type='file' accept=".mp4, .mkv, .ogg, .wmv" onChange={this.captureFile} style={{width: '250px'}} />
              <div className="form-group mr-sm-2">
                <input 
                id="videoTitle"
                type="text"
                className="form-control-sm"
                placeholder="Title.."
                ref={(input) => {this.videoTitle = input}}
                required />
              </div>
              <button type="submit" className="btn btn-danger btn-block btn-sm">Upload!</button>
              &nbsp;
            </form>
              {this.props.videos.map((video, key) => {
                return (
                <div className="card mb-4 text-center bg-secondary mx-auto" style={{ width: '175px'}}>
                <div className="card-title bg-dark">
                  <small className="text-white"><b>{video.title}</b></small>
                </div>
                  <div>
                     <p onClick={ () => this.changeVideo(video.hash, video.title)}>
                       <video
                          src={`https://ipfs.infura.io/ipfs/${video.hash}`}
                          style = {{ width: '150px'}}
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

export default Main;