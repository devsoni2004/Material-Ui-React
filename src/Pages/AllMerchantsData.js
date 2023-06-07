import React from 'react'
import SideNav from '../Components/Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../Components/Navbar';

const AllMerchantsData = () => {
    return (
        <>
            <Navbar />
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <h1>All Merchants Data</h1>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                </Box>
            </Box>
        </>

    )
}

export default AllMerchantsData