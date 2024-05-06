import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import CurrecyConverter from './componets/CurrencyCoverter'
import NavBar from './componets/NavBar'
import FrontPage from './componets/FrontPage'
import Footer from './componets/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <NavBar />
      <FrontPage />
      <Footer />
      <Routes>
          <Route path="/Currency-converter" element={<CurrecyConverter />} />
        {/* <Route path="/signin" element={<SignupForm />} />  */}
      </Routes> 
    </Router>
  )
}

export default App