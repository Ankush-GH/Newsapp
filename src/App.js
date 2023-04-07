import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/signup/Signup';
import Home from "./pages/home/Home"
import Login from './pages/login/Login';
import NewsState from './context/NewsState';

function App() {
  return (
    <div className="App">
      <NewsState>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </NewsState>
    </div>
  );
}

export default App;
