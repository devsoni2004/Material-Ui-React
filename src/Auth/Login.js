import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@mui/material/'
import LockIcon from '@mui/icons-material/Lock';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';

const Login=()=>{

    const paperStyle={padding :20,height:'70vh',width:500, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const customspacing ={}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid sx={{ mt:10   }}>
            <Paper elevation={10} style={paperStyle} >
                <Grid align='center' >
                     <Avatar style={avatarStyle}><LockIcon/></Avatar>
                    <h2>Singhtek User Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required style={customspacing}  sx={{ pb:3}} /> 
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required   sx={{ pb:3}} />
                <FormGroup
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link to="../Forget">
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link to="" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login