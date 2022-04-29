import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Selected from './components/SelectedItem/Selected';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import RequireAuth from './components/RequiredAuth/RequireAuth';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path='/selected/:id' element={
          <RequireAuth>
            <Selected></Selected>
          </RequireAuth>
        } />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
