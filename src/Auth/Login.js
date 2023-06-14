import React, { useContext } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, FormControl, Select, MenuItem, InputLabel, FormControlLabel, Box, Stack, FormHelperText } from '@mui/material/'
import LockIcon from '@mui/icons-material/Lock';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import { pages, userTypes } from '../common/constants';
import { AppContext } from '../context/AppContext'
import { useFormik } from 'formik';
import { signInSchema } from '../schemas/yupSchema'
const initialValues = {
    email: "",
    password: "",
    userType: ""
};

const Login = () => {
    const { login } = useContext(AppContext);
    const paperStyle = { padding: 20, height: '70vh', width: 500, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const customspacing = {}
    const btnstyle = { margin: '8px 0' }

    const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
        useFormik({
            initialValues,
            validationSchema: signInSchema,
            onSubmit: (values, action) => {
                login(values);
                action.resetForm();
            },
        });
    console.log(errors,);

    return (
        <Grid sx={{ mt: 10 }}>
            <Paper elevation={10} style={paperStyle} >
                <Grid align='center' >
                    <Avatar style={avatarStyle}><LockIcon /></Avatar>
                    <h2>Singhtek User Sign In</h2>
                </Grid>
                <TextField name="email" label='Username' placeholder='Enter username' fullWidth required style={customspacing} sx={{ pb: 3 }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={errors.email && touched.email}
                    helperText={errors.email}

                />
                <TextField name="password" label='Password' placeholder='Enter password' type='password' fullWidth required sx={{ pb: 3 }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    error={errors.password && touched.password}
                    helperText={errors.password}
                />

                <Grid item xs={4}>
                    <FormControl fullWidth error={errors.userType && touched.userType}>
                        <InputLabel id="demo-simple-select-label">User Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Filter Merchant"
                            value={values.userType}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={0}
                            name="userType"
                        >
                            {
                                userTypes.map((user, idx) => {
                                    return (
                                        <MenuItem key={idx} value={user.id}>{user.title}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                        <FormHelperText>{((errors.userType && touched.userType) && errors.userType)}</FormHelperText>
                    </FormControl>
                </Grid>
                <Stack justifyContent={"space-between"} alignItems={"center"} direction="row" sx={{ mt: 1 }}>
                    <FormGroup >
                        <FormControlLabel control={<Checkbox />} label="Remember me" />
                    </FormGroup>
                    <Typography  >
                        <Link to={pages.FORGOT_PASSWORD}>
                            Forgot password ?
                        </Link>
                    </Typography>
                </Stack>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={handleSubmit}>Sign in</Button>
                <Typography sx={{ mt: 1, display: 'flex', justifyContent: 'center' }}>Do you have an account?&nbsp;
                    <Link to="" >
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login