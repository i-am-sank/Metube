import React from 'react';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:null
        }
    }

    componentDidMount = async() => {
        let data = this.props.videos.map((video,key)=>{
            return <div className="card mb-4 text-center bg-secondary mx-auto" style={{ width: '175px'}}>
                        <div className="card-title bg-dark">
                        <small className="text-white"><b>{video.title}</b></small>
                        </div>
                        <div>
                            <p onClick={ () => this.changePage(video.hash,video.title)}>
                            <video
                                src={`https://ipfs.infura.io/ipfs/${video.hash}`}
                                style = {{ width: '150px'}}
                            ></video>
                            </p>
                        </div>
                    </div>
        });
        this.setState({data:data});
    }
    
    changePage = (Hash,Title) => {
        console.log(Title);
        //this.props.currentHash = Hash;
        //this.props.currentTitle = Title;
        //this.props.isHome = !(this.props.isHome);
       // console.log(this.props.currentTitle);
    }

    render (){
        return (
            <div >
                <section class="wrapper">
                <div class="container-fostrap text-center">
                    <div>
                        <h1 class="heading">
                            Homepage
                        </h1>
                    </div>
                    <div class="content">
                        <div class="container">
                            <div class="row">
                            {this.state.data}
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            </div>
        );
    }
}

export default Homepage;