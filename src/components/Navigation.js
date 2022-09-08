import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import About from './About'

function Navigation() {
  return (
    <BrowserRouter>
    <header>
        <nav>
            <ul>
                <li>
                    <NavLink
                    to="/"
                    style={({ isActive }) => 
                isActive ? { fontWeight: 'bold' } : undefined
            }
            >
                Home
            </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/about"
                    style={({ isActive }) => 
                isActive ? { fontWeight: 'bold' } : undefined
            }
            >
                About
            </NavLink>
                </li>
            </ul>
        </nav>
    </header>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation