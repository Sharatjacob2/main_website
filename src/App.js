import About from './aboutPage/About';
import './App.css';
import WelcomePage from './landingPage/WelcomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Resume from './resumePage/Resume';
import Project from './projectPage/Project';
import Weird from './weirdPage/Weird';
import Blog from './blogPage/Blog';
import MobileWelcome from './mobileWelcome/mobileWelcome';

function App() {

  console.log('Viewport width:', window.innerHeight);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={< WelcomePage />} />
        <Route path='/mobileWelcome' element={< MobileWelcome />} />
        <Route path='/about' element={< About />} />
        <Route path='/resume' element={< Resume />} />
        <Route path='/projects' element={< Project />} />
        <Route path='/weird' element={< Weird />} />
        <Route path='/blog' element={< Blog />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
