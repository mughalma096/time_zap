import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { Delete, Edit} from '@mui/icons-material';

import { users, deleteUser } from '@/services/userService';
import {useUser} from "@/contexts/userContext.jsx";

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 100 },
    { id: 'actions', label: 'Actions', minWidth: 170, align: 'center' }
];

const UserTable = () => {
    const { user: { admin } } = useUser();
    const [rows, setRows] = useState([]);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);


    useEffect(() => {
        fetchData().then(r => r);
    }, []);

    const fetchData = async () => {
        try {
            const data = await users();
            if (data) {
                setRows(data);
            }
        } catch (err) {
            console.error("Error fetching users:", err);
        }
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };

    const handleDeleteButtonClick = (id) => {
        deleteUser(id);
        setTimeout(() => {
            location.href = '/'
        }, 300)
    }

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.length > 0 &&
                            rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                            {columns.map((column) => {
                                                const id = row["id"];
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {
                                                            (column.id == "name") ?
                                                                (<Link color="primary" variant="outlined" underline="always" to={`/profile/${id}`} >{value}</Link> )
                                                                : (column.id == "actions") ? (
                                                                    <Grid container justify="space-around" spacing={4}>
                                                                        <Button
                                                                            style={{borderRadius: 5}}
                                                                            className="btn btn-light btn-block w-50 mx-auto"
                                                                            to={`/user/${id}`}
                                                                            component={Link}
                                                                        >
                                                                            <Edit></Edit>
                                                                        </Button>
                                                                        { admin && <Button
                                                                            style={{borderRadius: 5}}
                                                                            className="btn btn-light btn-block w-50 mx-auto"
                                                                            onClick={ e => handleDeleteButtonClick(id)}
                                                                        >
                                                                            <Delete></Delete>
                                                                        </Button> }
                                                                    </Grid>) : value
                                                        }
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                    </TableBody>
                </Table>
            </TableContainer>
            {rows.length > 10 &&
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />}
        </Paper>
    );
}

export default UserTable;