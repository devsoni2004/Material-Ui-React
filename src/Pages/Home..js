import React from 'react'
import Sidenav from '../Components/Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../Components/Navbar'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import PieChartIcon from '@mui/icons-material/PieChart';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import Barcharts from '../Charts/Barcharts';
import PieCharts from '../Charts/PieCharts';
import AddchartIcon from '@mui/icons-material/Addchart';
import CountUp from 'react-countup';
import "../Dasboard.css";
import AddMerchantHome from './Merchants/AddMerchantHome';
const Home = () => {
    return (
        <>
            <div className="bgcolor">
                <Navbar />
                <Box height={20} />
                <Box sx={{ display: 'flex' }}>
                    <Sidenav sx={{ mt: '34' }} />

                    <Box component="main" sx={{ flexGrow: 14, p: 5 }}>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Stack spacing={2} direction="row">
                                    <Card sx={{ minWidth: 49 + "%", height: 170 }} className="gradient">
                                        <CardContent>
                                            <div>
                                                <AddchartIcon sx={{ color: "#009CFF", fontSize: "40px" }} />
                                            </div>

                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#000", fontWeight: "500", fontSize: "22px" }}>
                                                Total Requested Amount
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#00" }}>
                                                <CountUp delay={0.4} end={500} duration={0.6} />
                                            </Typography>

                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 49 + "%", height: 170 }} className="gradient">
                                        <CardContent>
                                            <div>
                                                <BarChartIcon sx={{ color: "#009CFF", fontSize: "40px" }} />
                                            </div>

                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#000", fontWeight: '500' }}>
                                                Withdrawal Requests
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#000", fontWeight: '500' }}>
                                                <CountUp delay={0.4} end={2000} duration={0.6} />
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack spacing={2}>
                                    <Card sx={{ maxwidth: 345 }} className="gradient">

                                        <Stack spacing={2} direction="row">
                                            <div className="icon-style">
                                                <StackedBarChartIcon sx={{ color: "#009CFF", fontSize: "40px" }} />
                                            </div>

                                            <div className="padding-all">
                                                <span className="price-title">
                                                    <CountUp delay={0.4} end={8000} duration={0.6} />
                                                </span>
                                                <br />
                                                <span className="sub-title">Totol Payout Amount</span>
                                            </div>
                                        </Stack>

                                    </Card>
                                    <Card sx={{ maxwidth: 345 }} className="gradient">
                                        <Stack spacing={2} direction="row">
                                            <div className="icon-style">
                                                <PieChartIcon sx={{ color: "#009CFF", fontSize: "40px" }} />
                                            </div>

                                            <div className="padding-all">
                                                <span className="price-title">
                                                    <CountUp delay={0.2} end={7000} duration={0.6} />
                                                </span>
                                                <br />
                                                <span className="sub-title">Total Registered Merchant's</span>
                                            </div>
                                        </Stack>
                                    </Card>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Box height={30} />
                        <AddMerchantHome />
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
                                        {/* <Accordian /> */}
                                        <PieCharts />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    </Box>
                </Box>
            </div>

        </>

    )
}

export default Home