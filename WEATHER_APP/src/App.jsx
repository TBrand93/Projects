
import './App.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './component/AppHeader';
import Main from './component/AppMain';
import { Container } from 'react-bootstrap';
import React, { useState } from 'react'

function App() {
  const [data, setData] = useState({ city: { name: "" }, list: [] });

  const updateData = (newData) => {
    setData(newData);
    
  };
  return (
    <><div className='responsive'>
     <AppHeader updateData={updateData} />
    <Container fluid className=' mainBox'>
      <Main data={data} />
    </Container>
    </div>
    </>
  )
}

export default App