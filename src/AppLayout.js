import React, { useContext } from 'react'
import ProtectedRoute from './Components/ProtectedRoute'
import { AppContext } from './context/AppContext'
import { Route, Routes } from 'react-router-dom'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Forget from './Auth/Forget'
import { pages } from './common/constants'
import Dashboard from './pages/Dashboard'
import AllMerchants from './pages/AllMerchants'
import AcceptUser from './pages/AcceptUser'
import SucessHistory from './pages/SucessHistory'
import PendingHistory from './pages/PendingHistory'
import FailedHistory from './pages/FailedHistory'
import { CssBaseline } from '@mui/material'
import Profile from './pages/Profile'

const AppLayout = () => {
    const { appState } = useContext(AppContext);
    console.log("APP:", appState);
    return (
        <React.Fragment>
            <CssBaseline />
            <Routes>
                <Route index path={pages.LOGIN} element={<Login />} />
                <Route path={pages.REGISTER} element={<Register />} />
                <Route path={pages.FORGOT_PASSWORD} element={<Forget />} />

                <Route element={<ProtectedRoute />}>
                    <Route path={pages.ROOT}  element={<Dashboard />}></Route>
                    <Route path={pages.DASHBOARD}  element={<Dashboard />}></Route>
                    <Route path={pages.ALL_MERCHANTS_DATA}  element={<AllMerchants />}></Route>
                    <Route path={pages.ACCEPT_USERS}  element={<AcceptUser />}></Route>
                    <Route path={pages.SUCESS_HISTORY}  element={<SucessHistory />}></Route>
                    <Route path={pages.PENDING_HISTORY}  element={<PendingHistory />}></Route>
                    <Route path={pages.FAILED_HISTORY}  element={<FailedHistory />}></Route>
                    <Route path={pages.PROFILE}  element={<Profile />}></Route>
                </Route>
            </Routes>
        </React.Fragment>
    )
}

export default AppLayout