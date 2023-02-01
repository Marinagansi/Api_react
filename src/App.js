import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter as Router,Link,Route, Routes } from 'react-router-dom';
import Home from './components/Home';


function App() {
  const padding={
    padding:5
  }
  return (
<div > 
  <h2>Book Review App</h2>
{/* <Login/> */}
 {/* <Register/> */}
 <Router>
 <div>
  <Link style={padding} to={'/login'}>login</Link>
  <Link style={padding} to={'/register'}>Register</Link>
  <Link style={padding} to={'/home'}>home</Link>
 </div>

 <Routes>
  <Route path='/login'  element={<Login/>}/>
  <Route path='/register'  element={<Register/>}/>
  <Route path='/home'  element={<Home/>}/>
 </Routes>
 </Router>

</div>
  );
}
export default App;
