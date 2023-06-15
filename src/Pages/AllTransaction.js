import React from 'react'
import Box from '@mui/material/Box';
import Navbar from '../Components/Navbar';
import SideNav from '../Components/Sidenav';
import Withdrawal from '../Components/Withdrawals';

const AllTransaction = () => {
    return (
        <div>
            <Navbar />
            <Box height={30} />
            <Box sx={{display:"flex",overflowX:"hidden"}}>
                <SideNav />
                <Box component="main" sx={{ flexGrow: 10, p: 3 }}>
                <Withdrawal />
                </Box>
            </Box>
        </div>
    )
}

export default AllTransaction
