import './App.css';
import Home from './Home.js';
import Login from './Login.js';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import { useEffect , useState } from 'react';

function App() {
  const [loggedIn,setloggedIn]=useState(false)
  const [email,setEmail]=useState('')

  return(
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setloggedIn={setloggedIn}/>} />
          <Route path="/login" element={<Login setloggedIn={setloggedIn} setEmail={setEmail}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
