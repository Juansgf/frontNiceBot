import React from 'react';
import Navbar from './Navbar';


const Tweet = () => {
  return (
  <div> 
    <Navbar/>
    <header className="text-white text-center" style={{height: "409px"}}>
        <div className="container text-center" >
            <h1 className="font-weight-bold" style={{textAlign: "center"}}>Tweet Example</h1>
            <hr className="star-light"/>
             
        </div>
    </header>
    <div className="container" style={{paddingTop: "14px"}}>
        <div style={{paddingBottom: "5px"}}>
            <h3 className="text-dark mb-0 d-inline-block">Vote</h3>
        </div>
        <div className="row">
            <div class="col-md-4"><button class="color-button" type="button">Button</button></div>
            <div class="col-md-4"><button class="middle-button" type="button">Button</button></div>
            <div class="col-md-4"><button class="last-button" type="button">Button</button></div>
        </div>
    </div>
    
    
</div> 

)
}

export default Tweet; 