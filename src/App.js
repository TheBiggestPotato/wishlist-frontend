import './App.css';
import Footer from './components/Footer/Footer';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
 
function App() {
  return (
    <Router>
    <div className='App'>
      <div className='content'>
        <Routes>
          <Route path="/login" element= { <Login /> }/>
        </Routes>
      </div>
      <div className="footer"> <Footer /> </div>
    </div>
    </Router>
  );
}

export default App;
