import React, { Component } from 'react';
import JokeCard from './JokeCard';
import Axios from 'axios';

export default class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             jokes:[],
             loading:false,
        }
    }

    componentDidMount(){
       this.funGetJokes();
    }

    funGetJokes = () => {
        this.setState({loading:true});
        Axios.get('https://official-joke-api.appspot.com/jokes/ten')
        .then((res)=>{
            if(res.data){
                this.setState({jokes:res.data});
                this.setState({loading:false});
            }
        })
        .catch((err)=>{
            console.log(err);
            this.setState({loading:false});
        })
    }

    funLoadMore=()=>{
        window.scrollTo(0,0);
        this.funGetJokes();
    }



    render() {
        console.log(this.state);
        return (
            <div className="container col-md-5">
                <div className="display-4 mt-5 mb-2 text-primary text-center">Jokes</div>
                <div className="py-4">

                    {
                        this.state.loading ? (
                            <div className="display-4 text-center mt-5">
                                <i className="fa fa-cog fa-spin"></i>
                            </div> 
                        ) : null
                    }
                    {
                        this.state.jokes && this.state.jokes.map((joke,i)=>(
                            <JokeCard key={i} joke={joke} />
                        ))
                    }
                </div>
                <div className="mb-5 mt-2 text-center">
                    <button className="btn btn-lg btn-primary shadow" onClick={this.funLoadMore}>Load More</button>
                </div>
                
            </div>
        )
    }
}
