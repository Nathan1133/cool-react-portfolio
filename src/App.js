import './App.css';

import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume/Index';
function App() {

  return (
    <div>
         <Header></Header>
       <main>
    
       <About></About>
       <Portfolio></Portfolio>
       <Contact></Contact>
       <Resume></Resume>
       </main>

    </div>
  );
}

export default App;
