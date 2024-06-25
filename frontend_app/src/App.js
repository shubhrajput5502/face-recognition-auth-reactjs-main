import React,{ useEffect }  from 'react'
import './css/App.css'
import { useDispatch } from 'react-redux';
import { Route, Routes } from "react-router-dom"
import { Auth } from './components/Auth'
import { AuthContainer } from './containers/AuthContainer'
import { PrivateContainer } from './containers/PrivateContainer'
import { Loader } from './components/Loader'
import { Dashboard } from './components/backoffice/Dashboard'
import { initializeAuth } from './features/auth/authSlice';

const App = () => {
	
	return (
		<div className="limiter">
			<Loader />
			<div className="container-login100" style={{backgroundImage: "url(/images/bg.jpg)"}}>    
				<Routes>
					<Route path='/' element={<AuthContainer><Auth /></AuthContainer>} />
					<Route path='/dashboard' element={<PrivateContainer><Dashboard /></PrivateContainer>} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
