import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import DVideo from './abis/DVideo.json';
import CustomLayout from './containers/Layout';
import Web3 from 'web3';
import {connect} from 'react-redux';


class App extends Component {

  async componentDidMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
    this.props.AddData(this.state.dvideo, this.state.videos, this.state.account, this.state.currentHash, this.state.currentTitle);
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    //Load accounts
    //Add first account the the state
    const accounts = await web3.eth.getAccounts();
    this.setState({account: accounts[0]});
    //Get network ID
    const networkId = await web3.eth.net.getId()
    //Get network data
    const networkData = DVideo.networks[networkId]
    if(networkData){
      const dvideo = new web3.eth.Contract(DVideo.abi, networkData.address)
      this.setState({dvideo})

      const videoCount = await dvideo.methods.videoCount().call()

      for( var i=videoCount; i>=1;i--){
        const video = await dvideo.methods.videos(i).call()
        this.setState({
          videos: [...this.state.videos, video]
        })
      }
      
       const latest = await dvideo.methods.videos(videoCount).call()
       this.setState({
         currentHash: latest.hash,
         currentTitle: latest.title
       })
      this.setState({
        loading: false
      })
    }
    else {
      window.alert('DVideo contract not deployed to detected network.')
    }

  }
  
  constructor(props){
    super(props);
    this.state = {
      account:'',
      loading:true,
      dvideo:null,
      videos:[],
      currentHash:null,
      currentTitle:null
    }
  }

  render() {
    return (
          <> 
            <Router>
               <CustomLayout  {...this.props}>
                <BaseRouter/>
              </CustomLayout>
            </Router>
          </>         
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    AddData: (dvideo,videos,account,hash,title) => { dispatch({type:'ADD_DATA', dvideo:dvideo, videos:videos, account: account, latestHash:hash, latestTitle:title}) }
  } 
}

export default connect(null, mapDispatchToProps)(App);