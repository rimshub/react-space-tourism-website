import SharedLayout from './components/SharedLayout';
import Home from './components/Home' 
import Destination from './components/Destination'
import Crew from './components/Crew'
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from "react-router-dom";
import Technology from './components/Technology';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />}/>
          <Route path='destination' element={<Destination />} />
          <Route path='crew' element={<Crew />} />
          <Route path='technology' element={<Technology />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App