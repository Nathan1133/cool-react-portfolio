import React from 'react';


function Nav() {

  return (
    <header className='header'>

    <h1>Nathan Nitschke</h1>
    <nav className='header'>
        <ul className="flex-row">
            <li className="mx-2">
                <a href="#about">
                    About me
                </a>
            </li>

            <li className="mx-2">
                <a href="#portfolio">
                    Portfolio                   
                </a>
            </li>

            <li className="mx-2">
                <a href="#contact">
                    Contact
                </a>
            </li>

            <li className="mx-2">
                <a href="#resume">
                    Resume
                </a>
            </li>
        </ul>
    </nav>

    </header>
  );

  


}

export default Nav;