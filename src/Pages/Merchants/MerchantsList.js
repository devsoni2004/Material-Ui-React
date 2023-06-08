import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Divider from "@mui/material/Divider";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Typography from "@mui/material/Typography";
import Swal from "sweetalert2";
import Box from "@mui/material/Box";
import Splitbtn from '../../Components/Splitbtn';
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

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}



export default function MerchantsList() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [merchants, setmerchants] = useState([]);
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
    
    return (
        <Paper sx={{ width: '80%', overflow: 'hidden', marginLeft: '60px' }}>
                <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "20px" }}
          >
            All Merchants Data
          </Typography>
          <Divider />
          <Box height={10} />
          <Stack direction="row" spacing={2} className="my-2 mb-2">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={merchants}
              sx={{ width: 300 }}
             // onChange={(e, v) => filterData(v)}
              getOptionLabel={(merchants) => merchants.item.user_name || ""}
              renderInput={(params) => (
                <TextField {...params} size="small" label="Search Merchants" />
              )}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button variant="contained" endIcon={<AddCircleIcon />}>
              Add
            </Button>
          </Stack>
          <Box height={10} />
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {/* {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))} */}
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
                                Status
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: "100px" }}>
                                View Transaction
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: "100px" }}>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="tdata">
                        {
                            merchants.map(item => (

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
                                    <TableCell align="left">
                                        <Stack direction="row" className="btn-outer">
                                            <Button>
                                                <Splitbtn />
                                            </Button>
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Stack direction="row">
                                            <Button variant="contained" >View All</Button>
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
        </Paper>
    );
}