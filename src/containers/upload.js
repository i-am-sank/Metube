import React from 'react';
import { connect } from 'react-redux';
import {Form, Button, Row, Col, Spinner} from 'react-bootstrap';

const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }); 

class VUpload extends React.Component {
    constructor(props){
       super(props);
       this.state = {
        buffer:null,
        loading:false
       }
    }

    //Get video
    captureFile = event => {
        event.preventDefault()
        const file  = event.target.files[0]
        const reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
   
        reader.onloadend = () => {
          this.setState({buffer: Buffer(reader.result)});
        }
        
     }

    // upload video 
    uploadvideo = async(title) => {
        console.log('The file will be Submitted!');
        let data = this.state.buffer;
        console.log('Submit this: ',data);
        if(data){
          try{
            this.setState({loading: true}); 
            const postResp = await ipfs.add(data);
             console.log('response: ',postResp); 
              this.props.dvideo.methods.uploadVideo(postResp[0].hash, title).send({ from: this.props.account }).on('transactionHash', (hash) => {
                this.setState({loading:false});
                alert('Video File uploaded SuccessFully!');
                window.location.reload();
              })
          
          }catch(e){
            console.log("error: ",e);
          }
        }
        else{
          alert('No file submitted. Please try again.');
        }
      }

    render(){
        return (
            <div className="container text-center p-5">
                <Row>
                    <Col></Col>
                    <Col xs={6} className="card p-3">
                        <h5 className="card-title"><b>Share Video</b></h5>
                        <Form onSubmit={(event) => {
                        event.preventDefault()
                        const title  = this.videoTitle.value
                        this.uploadvideo(title)
                        }}>
                        <Form.Group>
                            <Form.File accept=".mp4, .mkv, .ogg, .wmv" onChange={this.captureFile} label="Choose Video File to Upload"/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label><b>Video Title</b></Form.Label>
                            <Form.Control type="text" placeholder="Title..." ref={(input) => {this.videoTitle = input}} required/>
                        </Form.Group>
                        <Button variant="danger" type="submit" disabled={this.state.loading}>
                        {this.state.loading?<div><Spinner size="sm" animation="border" role="status"/><b> Uploading...</b></div>:<span>Upload!</span>}</Button> 
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dvideo: state.dvideo,
        account: state.account
    }
  }

export default connect(mapStateToProps)(VUpload);