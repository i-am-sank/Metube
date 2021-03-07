import React from 'react';
import {connect} from 'react-redux';
import {Jumbotron} from 'react-bootstrap';

class Homepage extends React.Component {
    
    changePage = (Hash,Title) => {
        window.location.href = `http://localhost:3000/Main/${Hash}/${Title}`;
    }

    render (){
        return (
            <div>
                <section className="wrapper">
                <div className="container-fostrap text-center">
                    <Jumbotron>
                    <h4 className="text-primary">Welcome To MeTube !!</h4>
                    <h6 className="text-dark"> Binge watch your favourites videos, Happy watching :)</h6> 
                    </Jumbotron>
                    <div className="content">
                        <div className="container">
                            <div className="row">
                            {this.props.videos.map((video,key)=>{
                             return (<div className="card mb-4 text-center bg-secondary mx-auto" style={{ width: '200px'}}>
                            <div className="card-title bg-dark">
                            <small className="text-white"><b>{video.title}</b></small>
                            </div>
                            <div>
                                <p onClick={ () => this.changePage(video.hash,video.title)}>
                                <video
                                    className="bg-dark"
                                    src={`https://ipfs.infura.io/ipfs/${video.hash}`}
                                    style = {{ width: '175px', height: '100px'}}
                                ></video>
                                </p>
                            </div>
                        </div>
                        )}) }
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        videos: state.videos
    }
}

export default connect(mapStateToProps)(Homepage);