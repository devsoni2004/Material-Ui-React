import React from 'react'
import MerchantsList from './Merchants/MerchantsList'
import { Box } from '@mui/material'

const AllMerchants = () => {
  return (
    <React.Fragment>
      <Box sx={{ p: 5 }}>
        <MerchantsList />
      </Box>
    </React.Fragment>
  )
}

export default AllMerchants