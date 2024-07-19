import About from './About';
import './App.css';
import WelcomePage from './WelcomePage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< WelcomePage/>}/>
        <Route path='about' element={< About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
