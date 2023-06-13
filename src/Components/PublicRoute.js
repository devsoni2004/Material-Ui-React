import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Auth/Login'
import Forget from '../Auth/Forget'
import Register from '../Auth/Register'
import { pages } from '../common/constants'

const PublicRoute = () => {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path={pages.LOGIN} element={<Login />} />
            <Route path={pages.REGISTER} element={<Register />} />
            <Route path={pages.FORGOT_PASSWORD} element={<Forget />} />
        </Routes>
    )
}

export default PublicRoute