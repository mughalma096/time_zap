import React, { useState, useEffect } from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { Delete } from '@mui/icons-material';

import { timeZones, deleteTimeZone } from '@/services/timeZoneService';
import {useParams} from "react-router-dom";

const columns = [
    { id: 'name', label: 'Time Zone Name', minWidth: 170 },
    { id: 'city', label: 'City', minWidth: 100 },
    { id: 'current_time_in_time_zone', label: 'Current Time In time_zone', minWidth: 100 },
    { id: 'browser_time_and_time_zone_difference', label: 'Time Zone Difference', minWidth: 100 },
    { id: 'action', label: 'Actions', minWidth: 170, align: 'center' }
];

const TimeZoneTable = () => {

    // Get ID from URL
    let { id } = useParams();
    const [rows, setRows] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(() => {
        fetchTimeZones().then(r => {
            console.log(r)
        })
    }, []);

    const fetchTimeZones = async () => {
        let data = await timeZones(id);
        if(data) {
            setRows(data);
        }
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };

    const handleDeleteButtonClick = (id) => {
        deleteTimeZone(id);
    }
    console.log("rows:", rows.length)

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
                                                        {(column.id == "action") ? (
                                                            <Button
                                                                type="button"
                                                                variant="contained"
                                                                onClick={ e => handleDeleteButtonClick(id)}
                                                            >
                                                                <Delete></Delete>
                                                            </Button>) : value
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
            {rows.length > 5 &&
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
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

export default TimeZoneTable;