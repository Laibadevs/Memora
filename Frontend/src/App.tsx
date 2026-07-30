import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      {/* Single-page marketing site: every nav link points to a section
          on Home via its hash (e.g. /#features). Add more top-level
          routes here later (e.g. /pricing, /docs) as real pages exist. */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
