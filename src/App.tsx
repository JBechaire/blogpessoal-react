
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Navbar from './components/navbar/Navbar'
import Cadastro from './pages/cadastro/Cadastro'


function App() {
	return (
		<>   
		   <BrowserRouter>
			<Navbar />
			<Routes>
            <Route path="/" element={<Login />} />
			 <Route path="/home" element={<Home />} />
			  <Route path="/login" element={<Login />} />
			  <Route path="/cadastro" element={<Cadastro />} />
			</Routes>
			<Footer />
			</BrowserRouter>
		</>
	);
}

export default App