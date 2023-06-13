import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@mui/material/'
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';

const Forget = () => {
    const paperStyle = { padding: 20, height: '70vh', width: 500, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const customspacing = {}
    const btnstyle = { margin: '8px 0' }
    return (
        <Grid sx={{ mt: 10 }}>
            <Paper elevation={10} style={paperStyle} >
                <Grid align='center' >
                    <Avatar style={avatarStyle}><LockIcon /></Avatar>
                    <h2>Forget Password</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required style={customspacing} sx={{ pb: 3 }} />
  
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Submit</Button>

                <Typography sx={{ mt:1, display: 'flex', justifyContent: 'center' }}>Do you have an account?&nbsp;
                    <Link to="/login" >
                        Sign In
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Forget