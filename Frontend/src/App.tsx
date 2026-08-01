import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgetPassowrd";
import ResetPassword from "./pages/ResetPassword";
import PasswordChanges from "./pages/PasswordChanges";
import EmailSent from "./pages/EmailSent";
function App() {
  return (
    <Routes>
      {/* Single-page marketing site: every nav link points to a section
          on Home via its hash (e.g. /#features). Add more top-level
          routes here later (e.g. /pricing, /docs) as real pages exist. */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/password-changes" element={<PasswordChanges />} />
      <Route path="/email-sent" element={<EmailSent />} />
    </Routes>
  )
}

export default App
