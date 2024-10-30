import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import CrearBlog from './pages/crearBlog/CrearBlog'
import ModificarBlog from './pages/home/blogs/modificarBlog/ModificarBlog'
import VerBlog from './pages/home/blogs/verBlog/VerBlog'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import MyBlogs from './pages/myBlogs/MyBlogs'


function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path= "/" element={<Home />} />  
      <Route path= "/crear-blog" element={<CrearBlog />} /> 
      <Route path= "/modificar-blog/:idblog" element={<ModificarBlog />} /> 
      <Route path= "/mis-blogs/:/iduser" element={<VerBlog />} /> 
      <Route path= "/login" element={<Login />} /> 
      <Route path= "/register" element={<Register />} /> 
      <Route path= "/blogs/:idblog" element={<VerBlog />} /> 
      <Route path= "/perfil" element={<MyBlogs />} /> 
    </Routes>  
    </BrowserRouter>
    
  )
} 

export default App
