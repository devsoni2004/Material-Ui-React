import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { saveAs } from 'file-saver';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Typography from "@mui/material/Typography";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import * as XLSX from 'xlsx';
import Swal from "sweetalert2";
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";
import Splitbtn from '../../Components/Splitbtn';
import AddMerchants from './AddMerchants';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    overflow: 'scroll',
    boxShadow: 24,
    p: 4,
};


const columns = [
    { id: 'name', label: 'Merchant Id', minWidth: 170 },
    { id: 'code', label: 'Merchant Name', minWidth: 100 },
    {
        id: 'population',
        label: 'Email',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Mobile No',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Status',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'View Details',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },

];



export default function MerchantsList() {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [merchants, setmerchants] = useState([]);
    const [search, setSearch] = useState('');
    const [currentMerchant, setCurrentMerchant] = useState(null);
    const [ExcelData, setExcelData] = useState([]);
    const [view, setview] = useState(false);

    let [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    useEffect(() => {

        axios.get('https://exuberant-fatigues-jay.cyclic.app/SinghTek/merchants', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDc1Y2ZmMDAzOWM1NDMzMjhhMmQyZWIiLCJpYXQiOjE2ODYwMzUwNjd9.Qy2kZX2qHXSA5_-H4SVgsKxWqgji1Eyw6CtTjEvR-0Y'
            },
        })
            .then(function (response) {
                console.log(response);
                setmerchants(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const deleteUser = (singhtek_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.value) {
                // deleteApi(singhtek_id);
            }
        });
    };

    const viewAll = (item) => {
        setCurrentMerchant(item);
        setview(true);
    }


    const exportToExcel = async () => {
        const res = axios.get('https://exuberant-fatigues-jay.cyclic.app/SinghTek/allWithdrawals', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDc1Y2ZmMDAzOWM1NDMzMjhhMmQyZWIiLCJpYXQiOjE2ODYwMzUwNjd9.Qy2kZX2qHXSA5_-H4SVgsKxWqgji1Eyw6CtTjEvR-0Y'
            },
        })
        const result = await res;
        const data = result.data;

        console.log(data)
        const fieldsToExport = data.map(item => {
            return {
                beneficiary_name: item.beneficiary_name,
                credit_account_no: item.credit_account_no,
                beneficiary_branch_code: item.beneficiary_branch_code,
                amount: item.amount,
                bank_status: item.bank_status,
                remarks_1: item.remarks_1,
                utr_number: item.utr_number
            };
        });
        const worksheet = XLSX.utils.json_to_sheet(fieldsToExport);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

        const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

        saveAs(blob, 'data.xlsx');
    };

    return (
        <>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <AddMerchants closeEvent={handleClose} />
                    </Box>
                </Modal>
            </div>
            <Paper sx={{ width: '80%', overflow: 'hidden', marginLeft: '60px', backgroundColor: "#F3F6F9" }}  >

                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ padding: "20px" }}
                >
                    All Merchants Data
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '80%' },
                            }}
                            noValidate
                            autoComplete="off"

                        >
                            <TextField id="outlined-basic" label="Search" variant="outlined" onChange={(e) => setSearch(e.target.value)} />

                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl fullWidth sx={{
                            m: 1
                        }}>
                            <InputLabel id="demo-simple-select-label">Filter Merchant</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Filter Merchant"
                                onChange={handleChange} sx={{ height: "45px" }}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <Stack direction="row" spacing={2}  >

                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1 }}
                            ></Typography>
                            <Button variant="contained" endIcon={<AddCircleIcon />} onClick={handleOpen} sx={{
                                width: "50%", right: "40%", top: "10px"
                            }}>
                                Add Merchant
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={3}>
                        <Stack spacing={2} direction="row" sx={{ ml: 0, mb: 0, mt: 1 }}>
                            <Button variant="contained" onClick={exportToExcel}>Export Withdrawal Reqest</Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={3}>
                        <InputLabel id="demo-simple-select-label" sx={{ ml: 3, md: 0, mt: 0 }} >Upload</InputLabel>
                        <TextField
                            name="upload-photo"
                            type="file" sx={{ mb: 3, ml: 3 }} align="right"
                        />
                    </Grid>
                </Grid>




                <Divider />
                <Box height={30} />

                <TableContainer sx={{ maxHeight: 440, }} >
                    <Table stickyHeader aria-label="sticky table" >
                        <TableHead sx={{ backgroundColor: "#F3F6F9" }} >
                            <TableRow>

                                <TableCell align="left" style={{ minWidth: "100px" }}>
                                    Merchant Id
                                </TableCell>
                                <TableCell align="left" style={{ minWidth: "100px" }}>
                                    Merchant Name
                                </TableCell>
                                <TableCell align="left" style={{ minWidth: "100px" }}>
                                    Email
                                </TableCell>
                                <TableCell align="left" style={{ minWidth: "100px" }}>
                                    Mobile No.
                                </TableCell>
                                <TableCell align="left" style={{ minWidth: "100px" }}>
                                    Txn Limit
                                </TableCell>
                                <TableCell align="left" style={{ minWidth: "100px" }}>
                                    Status
                                </TableCell>

                                <TableCell align="left" style={{ minWidth: "100px" }}>
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="tdata">
                            {
                                merchants
                                    .filter((item) => {
                                        return search.toLowerCase() === ''
                                            ? item
                                            : item.user_name.toLowerCase().includes(search);
                                    })
                                    .map(item => (
                                        <TableRow hover role="checkbox tabindex={-1}">
                                            <TableCell key={item.singhtek_id} align="left">
                                                {item.singhtek_id}
                                            </TableCell>
                                            <TableCell key={item.user_name} align="left">
                                                {item.user_name}
                                            </TableCell>
                                            <TableCell key={item.email} align="left">
                                                {item.email}
                                            </TableCell>
                                            <TableCell key={item.mobile} align="left">
                                                {item.mobile}
                                            </TableCell>

                                            <TableCell key={item.transaction_limit} align="left">
                                                {item.transaction_limit}
                                            </TableCell>
                                            <TableCell align="left">
                                                <Stack direction="row" className="btn-outer">
                                                    <Button>
                                                        <Splitbtn />
                                                    </Button>
                                                </Stack>
                                            </TableCell>
                                            <TableCell align="left">
                                                <Stack spacing={2} direction="row">
                                                    <EditIcon
                                                        style={{
                                                            fontSize: "20px",
                                                            color: "blue",
                                                            cursor: "pointer",
                                                        }}
                                                        className="cursor-pointer"
                                                    // onClick={() => editUser(row.id)}
                                                    />
                                                    <DeleteIcon
                                                        style={{
                                                            fontSize: "20px",
                                                            color: "darkred",
                                                            cursor: "pointer",
                                                        }}
                                                        onClick={() => {
                                                            deleteUser(item.singhtek_id);
                                                        }}
                                                    />
                                                    <RemoveRedEyeIcon />
                                                </Stack>
                                            </TableCell>
                                        </TableRow>
                                    )
                                    )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />



            </Paper >
        </>

    );
}