import React, { Component } from 'react';
import DVideo from './abis/DVideo.json';
import CustomLayout from './containers/Layout';
import Web3 from 'web3';

//Declare IPFS
const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) 

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
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
      this.setState({ videoCount })

      for( var i=videoCount; i>=1;i--){
        const video = await dvideo.methods.videos(i).call()
        this.setState({
          videos: [...this.state.videos, video]
        })
      }
      
      // const latest = await dvideo.methods.videos(videoCount).call()
      // this.setState({
      //   currentHash: latest.hash,
      //   currentTitle: latest.title
      // })
      this.setState({
        loading: false
      })
    }
    else {
      window.alert('DVideo contract not deployed to detected network.')
    }

  }

  constructor(props) {
   super(props)
   this.state = {
     account: '',
     dvideo: null,
     videos: [],
     loading : true,
     Hash: null,
     Title: null
   }
  }
  
  render() {
    return (
          <CustomLayout  
          account={this.state.account}
          videos={this.state.videos}
          loading={this.state.loading}
          currentHash={this.state.Hash}
          currentTitle={this.state.Title}
          />          
    );
  }
}

export default App;