import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignUp from './pages/Sign-up/signup'; // Import the Sign-up component
import SignIn from './pages/Sign-in/signin'; // Import the Sign-in component
import news from './pages/News/news'; // Import the Home component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Home" element={<news />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;