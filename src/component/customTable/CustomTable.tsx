import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { HeadsInterface, Post } from '../../type/interface';
import CustomTableLoading from './CustomTableLoading';
import CustomTableError from './CustomTableError';
import CustomTableRows from './CustomTableRows';

export default function CustomTable({
    heads,
    data,
    isLoading,
    isError,
    isSuccess,
    url
}: {
    heads: HeadsInterface[],
    data: undefined | Post[],
    isLoading: boolean,
    isError: boolean,
    isSuccess: boolean,
    url: string
}) {

    return (
        <Paper sx={{ width: '100%', borderRadius: 4 }}>
            <TableContainer component={Paper} sx={{ position: 'relative', maxHeight: 540, borderRadius: 4 }}>
                <Table stickyHeader sx={{ minWidth: 650, minHeight: 150, position: 'relative' }} size="small">
                    <TableHead sx={{ '& .MuiTableCell-root': { py: 3 } }}>
                        <TableRow>
                            {heads.map((el: HeadsInterface) => <TableCell key={el.name}>{el.name}</TableCell>)}
                        </TableRow>
                    </TableHead>
                    {
                        isLoading ?
                            <CustomTableLoading /> :
                            isError ?
                                <CustomTableError /> :
                                isSuccess ?
                                    <CustomTableRows data={data} heads={heads} url={url} /> : <CustomTableError />
                    }
                </Table>
            </TableContainer>
        </Paper>
    );
}