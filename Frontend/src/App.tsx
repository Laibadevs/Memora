import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      {/* Single-page marketing site: every nav link points to a section
          on Home via its hash (e.g. /#features). Add more top-level
          routes here later (e.g. /pricing, /docs) as real pages exist. */}
      <Route path="/" element={<Home />} />

    </Routes>
  )
}

export default App
