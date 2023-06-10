import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ProtectedRoute from './Components/ProtectedRoute'
import PublicRoute from './Components/PublicRoute'

const AppLayout = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                {/* {
                    user ? <ProtectedRoute /> : <PublicRoute/>
                } */}
                 <ProtectedRoute />
            </BrowserRouter>
        </React.Fragment>
    )
}

export default AppLayout