import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Orders from './component/Orders/Orders';
import Products from './component/Products/Products';
import RequireAuth from './component/RequirAuth/RequireAuth';
import SignUp from './component/SignUp/SignUp';

function App() {
  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
        }></Route>

        <Route path='/signup' element={<SignUp></SignUp>} ></Route>
      </Routes>


    </div>
  );
}

export default App;
