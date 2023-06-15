import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import 'react-datepicker/dist/react-datepicker.css';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
export default function Withdrawal() {

    const [merchants, setMerchants] = useState([]);
    const [search, setSearch] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    useEffect(() => {
        axios
            .get('https://exuberant-fatigues-jay.cyclic.app/merchant/getWithdrawals', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDg1OGRjYmM1ZGRmNWU4Nzk5NDA2ZDMiLCJpYXQiOjE2ODY3MzMyNTB9.ki_TOlSTwm-9h6Qk_7UI_5aO1F-XjXDvQnc60g7h1FQ',
                },
            })
            .then(function (response) {
                console.log(response);
                setMerchants(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const columns = [
        { field: 'withdrawalID', headerName: 'Withdrawal ID', width: 180 },
        { field: 'userID', headerName: 'User ID', width: 120 },
        { field: 'userName', headerName: 'User Name', width: 150 },
        { field: 'amount', headerName: 'Amount', width: 120 },
        { field: 'bankStatus', headerName: 'Bank Status', width: 150 },
        { field: 'beneficiaryBranchCode', headerName: 'Beneficiary Branch Code', width: 200 },
        { field: 'beneficiaryName', headerName: 'Beneficiary Name', width: 180 },
        { field: 'creditAccountNo', headerName: 'Credit Account No', width: 180 },
        { field: 'dealerCode', headerName: 'Dealer Code', width: 150 },
        { field: 'merchantID', headerName: 'Merchant ID', width: 150 },
        { field: 'merchantStatus', headerName: 'Merchant Status', width: 150 },
        { field: 'productCode', headerName: 'Product Code', width: 150 },
        { field: 'updatedAt', headerName: 'Updated At', width: 180 },
        { field: 'utrNumber', headerName: 'UTR Number', width: 150 },
        { field: 'Action', headerName: 'Action', width: 150 }


    ];

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };
    const rows = merchants.filter((item) => {
        return search.toLowerCase() === ''
            ? item
            : item.user_name.toLowerCase().includes(search);
    }).map((merchant, index) => ({
        id: index + 1,
        amount: merchant.amount,
        bankStatus: merchant.bank_status,
        beneficiaryBranchCode: merchant.beneficiary_branch_code,
        beneficiaryName: merchant.beneficiary_name,
        createdAt: merchant.createdAt,
        creditAccountNo: merchant.credit_account_no,
        customerCode: merchant.customer_code,
        customerName: merchant.customer_name,
        dealerCode: merchant.dealer_code,
        debitAccountNo: merchant.debit_account_no,
        merchantID: merchant.merchantID,
        merchantStatus: merchant.merchant_status,
        productCode: merchant.product_code,
        updatedAt: merchant.updatedAt,
        userID: merchant.user_id,
        userName: merchant.user_name,
        utrNumber: merchant.utr_number,
        withdrawalID: merchant.withdrawal_id,
    }));

    return (
        <div style={{ height: 500, width: '85%' }}>
            <div className="date-pickup">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']} sx={{ ml: "25px" }}>
                        <DatePicker selected={startDate} onChange={handleStartDateChange} placeholderText="Start Date" sx={{ height: "60px" }} />
                    </DemoContainer>
                    <DemoContainer components={['DatePicker']} sx={{ ml: "15px" }}>
                        <DatePicker selected={endDate} onChange={handleEndDateChange} placeholderText="End Date" sx={{}} />
                    </DemoContainer>
                </LocalizationProvider>
                <div className="import-export">
                    <Grid container spacing={2}  >
                        <Grid item md={6}>
                            <Stack spacing={2} direction="row" sx={{ ml: "15px" }}>
                                <Button variant="contained" sx={{ height: "50px", mt: "15px" }}>Download Excel Formet</Button>
                            </Stack>
                        </Grid>
                        <Grid item md={6} sx={{ marginTop: "10px" }}>
                            <div className="import-export">
                                <TextField
                                    name="upload-photo"
                                    type="file"
                                    sx={{ height: "50px" }}
                                />
                                <Stack spacing={2} direction="row" >
                                    <Button variant="contained" sx={{ height: "50px", ml: "15px" }}>Submit</Button>
                                </Stack>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>

            <div className="widgets">
                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#000", fontSize: "22px", mt: "15px", mr: "15px" }}>
                    All Transaction Requests
                </Typography>
                <TextField id="outlined-basic" label="Search" variant="outlined" onChange={(e) => setSearch(e.target.value)} sx={{}} />
                <Stack spacing={2} direction="row">
                    <Button variant="contained" sx={{ height: "45px", width: "100%", marginLeft: "100px", marginTop: "7px" }}>Add Reqest</Button>
                </Stack>
            </div>
            <DataGrid
                columns={columns}
                rows={rows}
                components={{
                    Toolbar: GridToolbar,
                }}
                sx={{ mt: '22px', backgroundColor: '#F3F6F9', ml: "25px" }}

            />
        </div>
    );
}
