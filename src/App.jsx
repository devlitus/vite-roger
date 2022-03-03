import { Route, Routes } from 'react-router-dom'
import './app.css'
import { Navbar } from './components/navbar/Navbar'
import { About } from './pages/about/About'
import { Bissnes } from './pages/bissnes/Bissnes'
import { Contact } from './pages/contact/Contact'
import { Family } from './pages/family/Family'
import { Home } from './pages/home/Home'
import { Training } from './pages/training/Training'

function App () {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/family' element={<Family />} />
        <Route path='/bissnes' element={<Bissnes />} />
        <Route path='/training' element={<Training />} />
      </Routes>
    </div>
  )
}

export default App
