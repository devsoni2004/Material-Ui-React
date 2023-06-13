import { useState } from 'react'
import SideNav from '../Components/Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../Components/Navbar';
import MerchantsList from './Merchants/MerchantsList';

const AllMerchantsData = () => {
    return (
        <>
            <Navbar />
            <Box height={90} />
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <MerchantsList />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                </Box>
            </Box>
        </>

    )
}

export default AllMerchantsData