import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import { Box,  Toolbar } from '@mui/material'
import SideNav from './Sidenav'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useAppStore } from '../appStore'

const ProtectedRoute = () => {
    const { appState } = useContext(AppContext);
    console.log("APP:", appState, appState?.user?.token);
    const location = useLocation();

    const updateOpen = useAppStore((state) => state.updateOpen);
    const dopen = useAppStore((state) => state.dopen);

    useEffect(() => {
        console.log("dopen:", dopen)
    }, [dopen])

    const Layout = () => {
        return (
            <div className="bgcolor">
                <Navbar />
                <SideNav />
                <Box sx={{ position: 'relative',  ml: dopen ? '260px' : '85px', mt:2}}>
                    <Toolbar />
                    <Outlet />
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