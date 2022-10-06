import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


function ReadEmployee() {
    const [employeeList, setemployeeList] = useState([]);
    const DeleteMyPost = (id) => {
        axios.delete(`http://localhost:5000/employee/${id}`).then(() =>
            // window.location.reload()
            window.location.reload(false)
        ).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        axios.get("http://localhost:5000/employee").then((Employee) => {
            setemployeeList(Employee.data)
            // window.location.reload()
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <TableContainer component={Paper}>
            <h1>Employee List</h1>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Sr.No</TableCell>
                        <TableCell align="right">Name </TableCell>
                        <TableCell align="right">Age </TableCell>
                        <TableCell align="right">PhNo </TableCell>
                        <TableCell align="right"> </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employeeList.map((value, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {value.srNo}
                            </TableCell>
                            <TableCell align="right">{value.Name}</TableCell>
                            <TableCell align="right">{value.Age}</TableCell>
                            <TableCell align="right">{value.PhNo}</TableCell>
                            <TableCell align="right">
                                <IconButton aria-label="delete" onClick={() => { DeleteMyPost(value._id) }}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ReadEmployee
