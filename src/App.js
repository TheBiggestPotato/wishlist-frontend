import './App.css';
import Footer from './components/Footer/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/Landing'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
 
function App() {
  return (
    <Router>
    <div className='App'>
      <div className='content'>
        <Routes>
          <Route path="/" element= { <Landing /> }/>
          <Route path="/home" element = { <Home /> }/>
          <Route path="/login" element= { <Login /> }/>
          <Route path="/register" element= { <Register /> }/>
          <Route path="/profile" element= { <Profile />} />
        </Routes>
      </div>
      <div className="footer"> <Footer /> </div>
    </div>
    </Router>
  );
}

export default App;
