import React, { useState, useEffect } from 'react';

import Header from './components/header/Header';
import Main from './components/main/Main';

const App = () => {

  return (
    <div className="font-Poppins bg-gray-700/50 h-[100vh]">
      <Header/>
      <div className="border"></div>
      <Main/>
      
    </div>
  );
};

export default App;
