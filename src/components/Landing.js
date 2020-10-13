import React from 'react';

import Overview from '../components/Overview'


const Landing = () => {
  return (
  <div> 
    <nav className="navbar navbar-light navbar-expand-md" style={{background: "rgb(23,32,42)"}}>
    <div className="container-fluid"><a className="navbar-brand font-weight-bold" href="#" style={{color: "#ffffff"}}>NiceBot</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only colorinside"></span><span className="navbar-toggler-icon spancolor"></span></button>
        <div
            className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav ml-auto">
                <li className="nav-item"><a className="nav-link active" href="#" style={{color: "#ffffff"}}>Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#" style={{color: "#ffffff"}}>Statistics</a></li>
                <li className="nav-item"><a className="nav-link" href="#" style={{background: "#ffffff"}}>Analyze Tweet</a></li>
            </ul>
    </div>
    </div>
</nav>

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