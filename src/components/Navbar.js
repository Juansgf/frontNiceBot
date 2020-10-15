import React from 'react';
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
  <div> 
    <nav className="navbar navbar-light navbar-expand-md" style={{background: "rgb(23,32,42)"}}>
    <div className="container-fluid"><Link to="/"><a className="navbar-brand font-weight-bold" style={{color: "#ffffff"}}>NiceBot</a></Link><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only colorinside"></span><span className="navbar-toggler-icon spancolor"></span></button>
        <div
            className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav ml-auto">
                <li className="nav-item"><Link to="/"><a className="nav-link active" style={{color: "#ffffff"}}>Home</a></Link></li>
                <li className="nav-item"><a className="nav-link" style={{color: "#ffffff"}}>Statistics</a></li>
                <li className="nav-item"><Link to="/tweet"><a className="nav-link" href="#" style={{background: "#ffffff"}}>Analyze Tweet</a></Link></li>
            </ul>
    </div>
    </div>
</nav>

</div>
    )
}

export default Navbar; 