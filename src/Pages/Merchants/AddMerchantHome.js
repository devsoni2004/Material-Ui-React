import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const AddMerchantHome = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Stack spacing={2} direction="row">
                        <Card sx={{ minWidth: 100 + "%", height: 150 }} className="gradient">
                            <CardContent>
                                <div>

                                </div>

                                <Typography gutterBottom variant="body2" component="div" sx={{ color: "#000", fontWeight: 500, fontSize: "20px" }}>
                                    Add Merchant Amount
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#00" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={3}>
                                            <Box height={15} />
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Merchant</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={age}
                                                        label="Merchant"
                                                        onChange={handleChange} sx={{ height: "45px" }}
                                                    >
                                                        <MenuItem value={10}>Ten</MenuItem>
                                                        <MenuItem value={20}>Twenty</MenuItem>
                                                        <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Box height={7} />
                                            <Box sx={{ height: "45px" }}>
                                                <Box
                                                    component="form"
                                                    sx={{
                                                        '& > :not(style)': { m: 1, width: '100%', },
                                                    }}
                                                    noValidate
                                                    autoComplete="off"
                                                >
                                                    <TextField id="outlined-basic" label="Dealer Code" variant="outlined" />

                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Box height={7} />
                                            <Box
                                                component="form"
                                                sx={{
                                                    '& > :not(style)': { m: 1, width: '100%' },
                                                }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField id="outlined-basic" label="Amount" variant="outlined" />

                                            </Box>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Box height={22} />
                                            <Stack spacing={2} direction="row">
                                                <Button variant="contained" sx={{ ml: "28%" }}>Add merchant</Button>
                                            </Stack>
                                        </Grid>
                                    </Grid>


                                </Typography>

                            </CardContent>
                        </Card>

                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}

export default AddMerchantHome