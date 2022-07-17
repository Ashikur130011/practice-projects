import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/service/:serviceId' element={<ServiceDetails/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
