// import { useState, useEffect } from 'react';
import './App.css';
import * as React from 'react';
import FixedFooter from './FixedFooter';
import Header from './Header';
import SignUp from './Signup';
function App() {

  return (
    <><Header></Header><SignUp></SignUp><FixedFooter></FixedFooter></>
  );
}

export default App;
