

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLogin from './components/Adminlogin';
import Adminregister from './components/Adminregister';
import Adminhome from './components/Adminhome';
import Adminplace from './components/Adminplace';
import Adminpage from './components/Adminpage';
import Orders from './components/Orders';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AdminLogin/>}/>
        <Route path='/register' element={<Adminregister/>}/>
        <Route path='/home' element={<Adminhome/>} />
        <Route path='/place' element={<Adminplace/>}/>
        <Route path='/itempage' element={<Adminpage/>}/>
        <Route path='/bill' element={<Orders/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
