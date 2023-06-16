import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import Typography from "@mui/material/Typography";
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { getPendingHistory } from '../api/api';
import {  Paper } from '@mui/material';

export default function PendingHistory() {
    const { appState } = useContext(AppContext);
    const [merchants, setMerchants] = useState([]);

    useEffect(() => {
        getPendingHistory(appState?.user?.token)
            .then(function (response) {
                console.log(response);
                setMerchants(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const columns = [
        { field: 'amount', headerName: 'Amount', width: 120 },
        { field: 'bankStatus', headerName: 'Bank Status', width: 150 },
        { field: 'beneficiaryBranchCode', headerName: 'Beneficiary Branch Code', width: 200 },
        { field: 'beneficiaryName', headerName: 'Beneficiary Name', width: 180 },
        { field: 'createdAt', headerName: 'Created At', width: 180 },
        { field: 'creditAccountNo', headerName: 'Credit Account No', width: 180 },
        { field: 'customerCode', headerName: 'Customer Code', width: 150 },
        { field: 'customerName', headerName: 'Customer Name', width: 200 },
        { field: 'dealerCode', headerName: 'Dealer Code', width: 150 },
        { field: 'debitAccountNo', headerName: 'Debit Account No', width: 180 },
        { field: 'merchantID', headerName: 'Merchant ID', width: 150 },
        { field: 'merchantStatus', headerName: 'Merchant Status', width: 150 },
        { field: 'productCode', headerName: 'Product Code', width: 150 },
        { field: 'remarks1', headerName: 'Remarks 1', width: 180 },
        { field: 'subAdminID', headerName: 'Sub Admin ID', width: 150 },
        { field: 'transactionID', headerName: 'Transaction ID', width: 180 },
        { field: 'updatedAt', headerName: 'Updated At', width: 180 },
        { field: 'userID', headerName: 'User ID', width: 120 },
        { field: 'userName', headerName: 'User Name', width: 150 },
        { field: 'utrNumber', headerName: 'UTR Number', width: 150 },
        { field: 'withdrawalID', headerName: 'Withdrawal ID', width: 180 },
    ];

    const rows = merchants.map((merchant, index) => ({
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
        remarks1: merchant.remarks_1,
        subAdminID: merchant.subAdminID,
        transactionID: merchant.transaction_id,
        updatedAt: merchant.updatedAt,
        userID: merchant.user_id,
        userName: merchant.user_name,
        utrNumber: merchant.utr_number,
        withdrawalID: merchant.withdrawal_id,
    }));

    return (
        <Paper sx={{ overflow: 'hidden', backgroundColor: "#F3F6F9", p: 2 }}  >
            <Typography
                gutterBottom
                variant="h5"
                component="div"
            >
                All Pending History
            </Typography>
            <DataGrid
                columns={columns}
                rows={rows}
                components={{
                    Toolbar: GridToolbar,
                }}
                sx={{backgroundColor: "#F3F6F9" }}
            />
        </Paper>
    );
}