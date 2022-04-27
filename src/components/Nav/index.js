import React from 'react';


function Nav() {

  return (
    <header>

    <nav>
        <ul className="flex-row">
            <li className="mx-2">
                <a href="#about">
                    About me
                </a>
            </li>

            <li className="mx-2">
                <a href="#about">
                    Contact
                </a>
            </li>

            <li className="mx-2">
                <a href="#portfolio">
                    Portfolio
                </a>
            </li>


        </ul>
    </nav>

    </header>
  );

  


}

export default Nav;