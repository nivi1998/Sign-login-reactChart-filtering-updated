import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { APP_ROUTES } from '../global/constant';
import ProtectedRoute from '../components/ProtectedRoute';
import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../components/Home';
import Chart from '../components/Charts';

const MainRoutes = () => {
	return (
		<>
			{/* APPLICATION ROUTES */}
			<Routes>
				<Route path={APP_ROUTES.ROUTE_LOGIN} element={<Login />}></Route>
				<Route path={APP_ROUTES.ROUTE_REGISTER} element={<Register />}></Route>
				{/* <Route path={APP_ROUTES.ROUTE_HOME} element={<Home />}></Route> */}

				<Route element={<ProtectedRoute />}>
					<Route path={APP_ROUTES.ROUTE_HOME} element={<Home />}></Route>
				</Route>
				<Route element={<ProtectedRoute />}>
					<Route path={APP_ROUTES.ROUTE_CHART} element={<Chart />}></Route>
				</Route>
			</Routes>
		</>
	);
};
export default MainRoutes;
