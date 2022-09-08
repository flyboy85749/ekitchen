import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Blog from "./Blog";

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
                  isActive ? { fontWeight: "bold" } : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) =>
                  isActive ? { fontWeight: "bold" } : undefined
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                style={({ isActive }) =>
                  isActive ? { fontWeight: "bold", color: "blue" } : undefined
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                style={({ isActive }) =>
                  isActive ? { fontWeight: "bold", color: "blue" } : undefined
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
