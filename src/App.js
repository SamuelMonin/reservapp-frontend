import * as React from 'react';
import { useState } from 'react';

import Body from './Components/Body';
import Header from './Components/Header';

function App() {

  const [display, setDisplay] = useState("")
  const [connected, setConnected] = useState("")
  const [loginUserName, setLoginUserName] = useState("")
  const [open, setOpen] = React.useState(true)



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


      <Header connected={connected} setDisplay={setDisplay} setConnected={setConnected} loginUserName={loginUserName} setLoginUserName={setLoginUserName} />

      <Body open={open} setOpen={setOpen} display={display} setDisplay={setDisplay} setConnected={setConnected} loginUserName={loginUserName} setLoginUserName={setLoginUserName} />


    </div>
  )
}

export default App;