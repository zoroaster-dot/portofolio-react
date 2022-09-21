import React from 'react';
import { Button } from 'react-bootstrap';
import Utama from './Components/utama';
import {Link} from "react-router-dom";
import './App.css';

class App extends React.Component{
  render(){
    return (
      <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Button className="navbar-toggler" type="button" data-toggle="collapse" 
          data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </Button>
        
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Beranda</Link>
              </li>
              <li className="nav-item">
                <Link to="/Tentangsaya" className="nav-link">Tentang Saya</Link>
              </li>
              <li className="nav-item">
                <Link to="/Kontak" className="nav-link">Kontak</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Utama/>
     </div>
    );
  }
}  

export default App;