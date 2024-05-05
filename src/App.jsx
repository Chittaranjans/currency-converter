import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Routes , Route} from 'react-router-dom'
import CurrecyConverter from './componets/CurrencyCoverter'
import NavBar from './componets/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <NavBar />
      <CurrecyConverter />

      {/* <Routes>
      
          <Route path="/Currency-converter" element={<CurrecyConverter />} />
{/* 
           <Route path="/signin" element={<SignupForm />} /> */}
    
         {/* </Routes>  */}
        {/* */} 
    </>
  )
}

export default App