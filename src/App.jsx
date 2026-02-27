import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Pages/Main';
import Profile from './Pages/Profile';
import RegistrationForm from './Components/RegistrationForm';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='container'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/SignIn' element={<RegistrationForm />} />
        </Routes>
      </main>
      

      <Footer />
    </BrowserRouter>
      
    
  );
}

export default App;
