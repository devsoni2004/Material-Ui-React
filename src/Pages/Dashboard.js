import React,{ useContext } from 'react'
import Sidenav from '../Components/Sidenav'
import Accordian from '../Components/Accordian'
import Box from '@mui/material/Box';
import Navbar from '../Components/Navbar'
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
// import "../Dasboard.css";
import { AppContext } from '../context/AppContext';

const Dashboard = () => {
  const { appState } = useContext(AppContext);
  console.log("Dashboard:", appState);
  return (
    <React.Fragment>
      <Box component="main" sx={{ flexGrow: 10, p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Stack spacing={2} direction="row">
              <Card sx={{ minWidth: 49 + "%", height: 150 }} className="gradient">
                <CardContent>
                  <div>
                    <CreditCardIcon sx={{ color: "#fff" }} />
                  </div>
                  <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
                    <CountUp delay={0.4} end={500} duration={0.6} />
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div" sx={{ color: "#fff" }}>
                    Total Merchants
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ minWidth: 49 + "%", height: 150 }} className="gradient2">
                <CardContent>
                  <div>
                    <ShoppingBagIcon sx={{ color: "#fff" }} />
                  </div>
                  <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
                    <CountUp delay={0.4} end={2000} duration={0.6} />
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div" sx={{ color: "#fff" }}>
                    Total User
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={2}>
              <Card sx={{ maxwidth: 345 }} className="gradient2">

                <Stack spacing={2} direction="row">
                  <div className="icon-style">
                    <StorefrontIcon sx={{ color: "#fff" }} />
                  </div>

                  <div className="padding-all">
                    <span className="price-title">
                      <CountUp delay={0.4} end={8000} duration={0.6} />
                    </span>
                    <br />
                    <span className="sub-title">Cancel User</span>
                  </div>
                </Stack>

              </Card>
              <Card sx={{ maxwidth: 345 }} className="gradient3">
                <Stack spacing={2} direction="row">
                  <div className="icon-style">
                    <StorefrontIcon sx={{ color: "#fff" }} />
                  </div>

                  <div className="padding-all">
                    <span className="price-title">
                      <CountUp delay={0.2} end={7000} duration={0.6} />
                    </span>
                    <br />
                    <span className="sub-title">Accpet Users</span>
                  </div>
                </Stack>
              </Card>
            </Stack>
          </Grid>
        </Grid>
        <Box height={20} />
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Card sx={{ height: 55 + "vh" }}>
              <CardContent>
                <Barcharts />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ height: 55 + "vh" }}>
              <CardContent>
                <div className="padding-all">
                  <span className="payout-title">Payout Details</span>
                  <br />
                </div>
                <Accordian />
                <PieCharts />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      </Box>
    </React.Fragment>
  )
}

export default Dashboard