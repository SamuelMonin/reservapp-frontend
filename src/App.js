import * as React from 'react';
import { useState } from 'react';

import Body from './Components/Body';
import Header from './Components/Header';

function App() {

  const [display, setDisplay] = useState("")




  return (
    <div style={{
      position: 'absolute',
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>


      <Header setDisplay={setDisplay} />

      <Body display={display} setDisplay={setDisplay} />


    </div>
  )
}

export default App;