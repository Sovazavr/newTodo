import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Alert } from './components/Alert';
import { Navbar } from './components/Navbar';
import { AlertState } from './context/alert/AlertState';
import { FirebaseState } from './context/firebase/FirebaseState';
import { About } from './pages/About';
import { Home } from './pages/Home';

function App() {

  return (
    <FirebaseState>
      <AlertState>
        <Router>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Routes>
              <Route path={'/'} exact element={<Home />} />
              <Route path={'/about'} exact element={<About />} />
            </Routes>
          </div>
        </Router>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
