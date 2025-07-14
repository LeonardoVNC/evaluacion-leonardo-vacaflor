import Login from './components/auth/login';
import Home from './components/products/home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/login" />} /> 
      </Routes>
    </Router>
  );
};

export default App;
