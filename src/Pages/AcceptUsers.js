import React from 'react'
import SideNav from '../Components/Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../Components/Navbar';

const AcceptUsers = () => {
    return (
        <>
            <Navbar />
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <h1>Total Success User</h1>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

                </Box>
            </Box>
        </>

    )
}

export default AcceptUsers