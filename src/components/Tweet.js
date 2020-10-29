import React  from 'react';
import Navbar from './Navbar';
import { Component } from 'react';


export default class Tweet extends Component {

  constructor (props) {
    super(props);
    this.state = {
        tweets: [
            'tweet1',
            'tweet2',
            'tweet3',
            'tweet4',
            'tweet5',
        ],
        numberOfTweets: 0,
    };

 
}

onAnswer = () => {
  this.setState({ numberOfTweets: this.state.numberOfTweets + 1 });
}
   
  render() {
  return (
    <>  
  <div> 
    <Navbar/>
    <header className="text-white text-center" style={{height: "409px"}}>
        <div className="container text-center" >
            <h1 className="font-weight-bold" style={{textAlign: "center",margin:"5%"}}>{ this.state.tweets[this.state.numberOfTweets] }</h1>
            <hr className="star-light"/>
             
        </div>
    </header>
    <div className="container" style={{paddingTop: "14px"}}>
        <div style={{paddingBottom: "5px"}}>
            <h3 className="text-dark mb-0 d-inline-block">Vote</h3>
        </div>
        <div className="row" style={{paddingTop: "13px"}} >
            <div onClick={ this.onAnswer } class="col-md-4"><button class="color-button" type="button">Misogino</button></div>
            <div onClick={ this.onAnswer } class="col-md-4"><button class="middle-button" type="button">Otro Tweet</button></div>
            <div onClick={ this.onAnswer } class="col-md-4"><button class="last-button" type="button">No Misognio</button></div>
        </div>
    </div>
    
    
</div> 
</>
)
}

}