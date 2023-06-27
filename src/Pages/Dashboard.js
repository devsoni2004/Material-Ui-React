import React, { useContext } from 'react'
import Accordian from '../Components/Accordian'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Barcharts from '../Charts/Barcharts';
import PieCharts from '../Charts/PieCharts';
import CountUp from 'react-countup';
import { AppContext } from '../context/AppContext';

const Dashboard = () => {
  const { appState } = useContext(AppContext);
  console.log("Dashboard:", appState);
  return (
    <React.Fragment>
      <Box component="main">
        <Box sx={{ pr: 2 }}>
          <Stack spacing={2} direction={"row"}>
            <Card sx={{ display: 'flex', flexGrow: 1 }}>
              <CardContent>
                <Stack spacing={2} direction="row">
                  <div className="icon-style">
                    <CreditCardIcon />
                  </div>
                  <div className="padding-all">
                    <span className="price-title">
                      <CountUp delay={0.4} end={500} duration={0.6} />
                    </span>
                    <br />
                    <span className="sub-title">Total Merchants</span>
                  </div>
                </Stack>
              </CardContent>
            </Card>
            <Card sx={{ display: 'flex', flexGrow: 1 }}>
              <CardContent>
                <Stack spacing={2} direction="row">
                  <div className="icon-style">
                    <ShoppingBagIcon />
                  </div>
                  <div className="padding-all">
                    <span className="price-title">
                      <CountUp delay={0.4} end={2000} duration={0.6} />
                    </span>
                    <br />
                    <span className="sub-title">Total User</span>
                  </div>
                </Stack>
              </CardContent>
            </Card>
            <Card sx={{ display: 'flex', flexGrow: 1 }}>
              <CardContent>
                <Stack spacing={2} direction="row">
                  <div className="icon-style">
                    <StorefrontIcon />
                  </div>
                  <div className="padding-all">
                    <span className="price-title">
                      <CountUp delay={0.4} end={8000} duration={0.6} />
                    </span>
                    <br />
                    <span className="sub-title">Cancel User</span>
                  </div>
                </Stack>
              </CardContent>
            </Card>
            <Card sx={{ display: 'flex', flexGrow: 1 }}>
              <CardContent>
                <Stack spacing={2} direction="row">
                  <div className="icon-style">
                    <StorefrontIcon />
                  </div>
                  <div className="padding-all">
                    <span className="price-title">
                      <CountUp delay={0.2} end={7000} duration={0.6} />
                    </span>
                    <br />
                    <span className="sub-title">Accpet Users</span>
                  </div>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Box>
        <Box sx={{ mt: 2, pr: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Stack spacing={2} direction={"row"} sx={{ justifyContent: "space-between", alignItems: "flex-start" }}>
            <Card sx={{ width: '50%', height:'100%'}}>
              <CardContent>
                <Barcharts />
              </CardContent>
            </Card>
            <Card sx={{ width: '50%'}}>
              <CardContent>
                <div className="padding-all">
                  <span className="payout-title">Payout Details</span>
                  <br />
                </div>
                <Accordian />
                <PieCharts />
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default Dashboard