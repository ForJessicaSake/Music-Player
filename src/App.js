import Navbar from './Navbar';
import Hero from './Hero'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <section className="components">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero/>} />
        </Routes>
      </Router>
    </section>
  )
}

export default App;
