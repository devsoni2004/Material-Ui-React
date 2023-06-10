import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Login from '../Auth/Login'
import Forget from '../Auth/Forget'
import Register from '../Auth/Register'

const PublicRoute = () => {
    return (
        <Routes>
            <Route element={
                <Outlet />
            }>
                <Route path="/" exact element={<Login />}></Route>
                <Route path="/Login" exact element={<Login />}></Route>
                <Route path="/register" exact element={<Register />}></Route>
                <Route path="/forget" exact element={<Forget />}></Route>
            </Route>
        </Routes>
    )
}

export default PublicRoute