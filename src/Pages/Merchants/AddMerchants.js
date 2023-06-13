import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const AddMerchants = ({ closeEvent }) => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <Box sx={{ m: 2 }} />
            <Typography variant="h5" align="center">
                Add Merchant Details
            </Typography>
            <IconButton
                style={{ position: "absolute", top: "0", right: "0" }}
                onclick={closeEvent}
            >
                <CloseIcon />
            </IconButton>
            <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item md={6}>
                    <TextField id="outlined-basic" label="Merchant Name" variant="outlined" sx={{ minWidth: "100%" }} />
                </Grid>
                <Grid item md={6}>
                    <TextField id="outlined-basic" label="Business Name" variant="outlined" sx={{ minWidth: "100%" }} />
                </Grid>
                <Grid item md={6}>
                    <TextField id="outlined-basic" label="Business Type" variant="outlined" sx={{ minWidth: "100%" }} />
                </Grid>
                <Grid item md={6}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Business Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Business Category"
                            onChange={handleChange}
                            sx={{ minWidth: "80%" }}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item md={6}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Business Sub-Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Business Sub-Category"
                            onChange={handleChange}
                            sx={{ minWidth: "80%" }}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item md={6}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Company Expenditure</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Company Expenditure"
                            onChange={handleChange}
                            sx={{ minWidth: "80%" }}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item md={6}>
                    <TextField id="outlined-basic" label="Website" variant="outlined" sx={{ minWidth: "100%" }} placeholder="Enter Web URL" />
                </Grid>
                <Grid item md={6}>
                    <TextField id="outlined-basic" label="Bank Name" variant="outlined" sx={{ minWidth: "100%" }} placeholder="Enter Bank Name" />
                </Grid>
                <Grid item md={6}>
                    <TextField id="outlined-basic" label="Bank Account Number" variant="outlined" sx={{ minWidth: "100%" }} placeholder="Enter Bank Account Number" />
                </Grid>
                <Grid item md={6}>
                    <TextField id="outlined-basic" label="Ifsc Code" variant="outlined" sx={{ minWidth: "100%" }} placeholder="Enter Ifsc Code" />
                </Grid>
                <Typography variant="h4" sx={{ minWidth: "100%", mt: 2, ml: 2, borderBottom: 1 }}>
                    Busness Address
                </Typography>
                <Grid item md={6}>
                    <TextField id="outlined-basic" label="Address" variant="outlined" sx={{ minWidth: "100%" }} placeholder="Enter Address" />
                </Grid>
                <Grid item md={6}>
                    <TextField id="outlined-basic" label="Pin Code" variant="outlined" sx={{ minWidth: "100%" }} placeholder="Enter Pin Code" />
                </Grid>
                <Grid item md={6}>
                    <TextField id="outlined-basic" label="City" variant="outlined" sx={{ minWidth: "100%" }} placeholder="Enter City" />
                </Grid>
                <Grid item md={6}>
                    <TextField id="outlined-basic" label="State" variant="outlined" sx={{ minWidth: "100%" }} placeholder="Enter State" />
                </Grid>
                <Grid item md={12}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Country</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Select Country<"
                            onChange={handleChange}
                            sx={{ minWidth: "80%" }}
                        >
                            <MenuItem value={10}>India</MenuItem>

                        </Select>
                    </FormControl>
                </Grid>
                <Typography variant="h4" sx={{ minWidth: "100%", mt: 2, ml: 2, borderBottom: 1 }}>
                    Upload Your Docs
                </Typography>
                <Grid item md={6}>
                    <InputLabel id="demo-simple-select-label">Upload Your Pan Card</InputLabel>
                    <TextField
                        name="upload-photo"
                        type="file"
                    />
                </Grid>
                <Grid item md={6}>
                    <InputLabel id="demo-simple-select-label">Upload Your Gst</InputLabel>
                    <TextField
                        name="upload-photo"
                        type="file"
                    />
                </Grid>
                <Grid item md={6}>
                    <InputLabel id="demo-simple-select-label">Upload Bank Statement</InputLabel>
                    <TextField
                        name="upload-photo"
                        type="file"
                    />
                </Grid>
                <Grid item md={12}  align="center">
                    <Button
                       
                        name="upload-photo"
                        variant="contained"
                        sx={{width:"20%", height:40, mt:3}}
                        type="Submit">
                        Submit</Button>
                </Grid>
            </Grid>

        </>
    )
}

export default AddMerchants
