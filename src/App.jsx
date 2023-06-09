import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import RegistrationPage from './RegistrationPage';
import ProfilePage from './ProfilePage';


function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route exact path="/" element={<RegistrationPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
