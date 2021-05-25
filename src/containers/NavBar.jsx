import React from 'react';
import { Link } from 'react-router-dom'

function NavBar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
               <Link to='welcome'> <button className="btn btn-success"> Welcome</button> </Link>
              <Link to='main'>  <button class="btn btn-success"> Rates</button></Link>
                </div>
            </nav>
        </div>

    );
}

export default NavBar;