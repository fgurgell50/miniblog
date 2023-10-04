
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
//mapoeia se a autenticação do usuario foi feita com sucesso no firebase

//hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';
//pegar a autenticação já feita no useAuthentication

//context
import { AuthProvider } from './context/AuthContext'; 


import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import "./App.css";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';
import Search from './pages/Search/Search';
import Post from './pages/Post/Post';
import EditPost from './pages/EditPost/EditPost';

function App() {

 const [user, setUser] = useState(undefined);
 //criar o hook
 const { auth } = useAuthentication();
 //para não ter q invocar novamente

 const loadingUser = user === undefined;
 //compara o usuário ao undefined

 useEffect(() => {
  onAuthStateChanged(auth, (user)=>{
    setUser(user)
  })
 }, [auth])
 //executado baseado no valor da autenticação
 //sempre q mudar a autenticação ele vai ser executado

 if(loadingUser) {
  return <p>Carregando...</p>
 }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
        <Navbar/>
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/search' element={<Search />} />
              <Route path='/posts/:id' element={<Post />} />
              <Route 
                path='/login' 
                element={!user ? <Login /> : <Navigate to='/' />} 
              />
              <Route 
                path='/register' 
                element={!user ? <Register /> : <Navigate to='/' />} 
              />
              <Route 
                path='/posts/edit/:id' 
                element={user ? <EditPost /> : <Navigate to='/login' />} 
              />
              <Route 
                path='/posts/create' 
                element={user ? <CreatePost /> : <Navigate to='/login' />} 
              />
              <Route 
                path='/dashboard'
                element={user ? <Dashboard /> : <Navigate to='/login' />} 
              />
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
