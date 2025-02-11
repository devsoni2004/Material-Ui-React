import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Typography from "@mui/material/Typography";
export default function FailedHistory() {
    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 10,
        maxColumns: 12,
    });
    const [merchants, setMerchants] = useState([]);

    useEffect(() => {
        axios
            .get('https://exuberant-fatigues-jay.cyclic.app/SinghTek/getWithdrawals/failed', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDc1Y2ZmMDAzOWM1NDMzMjhhMmQyZWIiLCJpYXQiOjE2ODYwMzUwNjd9.Qy2kZX2qHXSA5_-H4SVgsKxWqgji1Eyw6CtTjEvR-0Y',
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
        <div style={{ height: 500, width: '98%' }}>
           
            <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ mt: "3%", ml: "15%" }}
            >
                All Failed History
            </Typography>
            <DataGrid
                columns={columns}
                rows={rows}
                components={{
                    Toolbar: GridToolbar,
                }}
                sx={{ ml: '15%', mt: '1%', backgroundColor: "#F3F6F9" }}
            />
        </div>
    );
}
