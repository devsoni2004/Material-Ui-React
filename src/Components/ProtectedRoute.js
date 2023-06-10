import React from 'react'
import Navbar from './Navbar'
import { Box, Toolbar } from '@mui/material'
import SideNav from './Sidenav'
import { Outlet, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import AllMerchants from '../pages/AllMerchants'
import AcceptUser from '../pages/AcceptUser'

const ProtectedRoute = () => {
    return (
        <div className="bgcolor">
            <Navbar />
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <Routes>
                    <Route element={
                        <Box>
                            <Toolbar />
                            <Outlet />
                        </Box>
                    }>
                        <Route path="/" exact element={<Dashboard />}></Route>
                        <Route path="/AllMerchantsData" exact element={<AllMerchants />}></Route>
                        <Route path="/AcceptUsers" exact element={<AcceptUser />}></Route>
                    </Route>
                </Routes>
            </Box>
        </div>
    )
}

export default ProtectedRoute