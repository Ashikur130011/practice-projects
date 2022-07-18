import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Header from './components/Shared/Header/Header';
import Login from './components/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import About from './components/About/About';
import RequireAuth from './components/Login/RequireAuth';

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <AuthProvider>
                  <Header></Header>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/home" element={<Home />} />
                      <Route
                          path="/service/:serviceId"
                          element={
                              <RequireAuth>
                                  <ServiceDetails />
                              </RequireAuth>
                          }
                      />
                      <Route path="/login" element={<Login />} />
                      <Route
                          path="/about"
                          element={
                              <RequireAuth>
                                  <About />
                              </RequireAuth>
                          }
                      />
                  </Routes>
              </AuthProvider>
          </BrowserRouter>
      </div>
  );
}

export default App;
