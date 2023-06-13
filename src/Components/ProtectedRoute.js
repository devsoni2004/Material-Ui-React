import React from 'react'
import Navbar from './Navbar'
import { Box, Toolbar } from '@mui/material'
import SideNav from './Sidenav'
import { Outlet, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import AllMerchants from '../pages/AllMerchants'
import AcceptUser from '../pages/AcceptUser'
import { pages } from '../common/constants'

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
                        <Route path={pages.ROOT} exact element={<Dashboard />}></Route>
                        <Route path={pages.DASHBOARD} exact element={<Dashboard />}></Route>
                        <Route path={pages.ALL_MERCHANTS_DATA} exact element={<AllMerchants />}></Route>
                        <Route path={pages.ACCEPT_USERS} exact element={<AcceptUser />}></Route>
                    </Route>
                </Routes>
            </Box>
        </div>
    )
}

export default ProtectedRoute