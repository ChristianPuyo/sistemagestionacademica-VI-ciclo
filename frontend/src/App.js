import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FormCreateStudent from './components/FormCreateStudent/FormCreateStudent';
import LandingPage from './components/LandingPage/LandingPage';
import FormUpdateStudent from './components/FormUpdateStudent/FormUpdateStudent';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/createstudent' element={<FormCreateStudent/>} />
          <Route path='/updateStudent/:id' element={<FormUpdateStudent/>} /> 
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
