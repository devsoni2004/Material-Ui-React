import React, { useContext } from 'react'
import ProtectedRoute from './Components/ProtectedRoute'
import PublicRoute from './Components/PublicRoute'
import { AppContext } from './context/AppContext'

const AppLayout = () => {
    const { appState } = useContext(AppContext);
    console.log("APP:", appState);
    return (
        <React.Fragment>
            {
                appState?.token ? <ProtectedRoute /> : <PublicRoute />
            }
        </React.Fragment>
    )
}

export default AppLayout