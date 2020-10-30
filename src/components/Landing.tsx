import React from 'react';

import Overview from '../components/Overview'
import Navbar from '../components/Navbar'


const Landing = () => {
  
  return (
  <div>
<Navbar/>
<header className="text-white text-center">
<div className="container text-center"><img className="img-fluid d-block mx-auto mb-4 size" src={require('../img/logo.jpg')}/>
    <h1 className="font-weight-bold" style={{textAlign: "center"}}>NiceBot</h1>
    <hr className="star-light"/>
    <h1 className="font-weight-light mb-0 font-weight-bold" style={{fontSize: "17px"}} >Help us make it better!</h1>
</div>
</header>
<Overview/>
</div>

  )
}

export default Landing;
