import React from 'react'
import Sidenav from '../Components/Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../Components/Navbar'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CountUp from 'react-countup';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import "../Dasboard.css";
import axios from 'axios';
import { useState, useEffect } from 'react';

const Home = () => {
    const [ta, setTa] = useState();
    const [req, setReq] = useState();
    const [sa, setSa] = useState();
    const [user, setUser] = useState();
    useEffect(() => {

        axios.get('https://exuberant-fatigues-jay.cyclic.app/merchant/dashboard/data', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDg1OGRjYmM1ZGRmNWU4Nzk5NDA2ZDMiLCJpYXQiOjE2ODY3MzMyNTB9.ki_TOlSTwm-9h6Qk_7UI_5aO1F-XjXDvQnc60g7h1FQ'
            },
        })
            .then(function (response) {
                console.log(response);
                setTa(response.data.totalAmount);
                setReq(response.data.requestCount);
                setSa(response.data.successAmount);
                setUser(response.data.uniqueUsers);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return (
        <>
            <div className="bgcolor">
                <Navbar />
                <Box height={50} />
                <Box sx={{ display: 'flex' }}>
                    <div className="drawer-bg">
                    <Sidenav />
                    </div>
                   

                    <Box component="main" sx={{ flexGrow: 10, p: 5 }}>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Stack spacing={2} direction="row">
                                    <Card sx={{ minWidth: 100 + "%", height: 150 , background: "#ecf2ff"}} >
                                        <CardContent>

                                            <div>
                                                <StackedLineChartIcon sx={{ color: "#009CFF", fontSize: "40px" }} />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#7fa0ff" }}>
                                                <CountUp delay={0.4} end={ta} duration={0.6} />
                                            </Typography>

                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#7fa0ff", fontSize: "30px" }} >
                                                Total Amount
                                            </Typography>
                                        </CardContent> 
                                    </Card>

                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Card sx={{ minWidth: 49 + "%", height: 150,  background: "#fef5e5" }} className="gradient2">
                                    <CardContent>
                                        <Grid>
                                            <Grid item xs={6}>
                                                <BarChartIcon sx={{ color: "#ffae1f", fontSize: "40px" }} />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffae1f" }}>
                                                    <CountUp delay={0.4} end={req} duration={0.6} />
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ffae1f", fontSize: "25px" }}>
                                                    Reqest Amount
                                                </Typography>
                                            </Grid>


                                        </Grid>


                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card sx={{ minWidth: 49 + "%", height: 150, background: "#e8f7ff" }} className="gradient2">
                                    <CardContent>
                                        <div>
                                            <AccountCircleIcon sx={{ color: "#49beff", fontSize: "40px" }} />
                                        </div>
                                        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#49beff", fontSize: "25px" }}>
                                            <CountUp delay={0.4} end={sa} duration={0.6} />
                                        </Typography>
                                        <Typography gutterBottom variant="body2" component="div" sx={{ color: "#49beff", fontSize: "25px" }}>
                                            Sucess Amount
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card sx={{ minWidth: 49 + "%", height: 150,  background: "#fdede8"  }} className="gradient2"> 
                                    <CardContent>
                                        <div>
                                            <AccountCircleIcon sx={{ color: "#fba38c", fontSize: "40px" }} />
                                        </div>
                                        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fba38c", fontSize: "25px" }}>
                                            <CountUp delay={0.4} end={user} duration={0.6} />
                                        </Typography>
                                        <Typography gutterBottom variant="body2" component="div" sx={{ color: "#fba38c", fontSize: "25px" }}>
                                            Unique Users
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                               
                        </Grid>
                    </Box>
                </Box>
               
            </div>

        </>

    )
}

export default Home