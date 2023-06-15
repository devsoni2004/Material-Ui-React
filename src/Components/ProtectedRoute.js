import React, { useContext } from 'react'
import Navbar from './Navbar'
import { Box, Toolbar } from '@mui/material'
import SideNav from './Sidenav'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const ProtectedRoute = () => {
    const { appState } = useContext(AppContext);
    console.log("APP:", appState, appState?.user?.token);
    const location = useLocation();

    const Layout = () => {
        return (
            <div className="bgcolor">
                <Navbar />
                <Box sx={{ display: 'flex' }}>
                    <SideNav />
                    <Box>
                        <Toolbar />
                        <Outlet />
                    </Box>
                </Box>
            </div>
        )
    }
    return (
        appState?.user?.token
            ? <Layout />
            : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default ProtectedRoute