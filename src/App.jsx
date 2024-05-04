import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes , Route} from 'react-router-dom'
import CurrecyConverter from './componets/CurrencyCoverter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CurrecyConverter />

      {/* <Routes>
      
          <Route path="/currency-converter" element={<CurrecyConverter />} />

          {/* <Route path="/signin" element={<SignupForm />} /> */}
    
        {/* </Routes> */} 
       
    </>
  )
}

export default App