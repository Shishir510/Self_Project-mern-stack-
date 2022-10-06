import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from "axios";

function CreateEmployee() {

    const [employee, setEmployee] = useState({
        srNo: 0,
        Name: "",
        Age: '',
        PhNo: "",
        // Section: ''
    })

    const create = () => {
        // posting the Employee data taken from user to server using axios package
        //Note that axios is a promise
        axios.post('http://localhost:5000/employee', employee).then(() =>
            window.location.reload(false)
        ).catch((error) => {
            console.log(error)
            alert("kindly fill all the textareas")
        }
        )
    }
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <h2>Create Employee</h2>

                <TextField
                    id="outlined-basic" label="Sr No" variant="outlined"
                    value={employee.srNo}
                    onChange={(e) => {
                        setEmployee({ ...employee, srNo: e.target.value })
                    }} />


                <TextField id="outlined-basic" label="Name" variant="outlined"
                    value={employee.Name}
                    onChange={(e) => {
                        setEmployee({ ...employee, Name: e.target.value })
                    }} />


                <TextField id="outlined-basic" label="Age" variant="outlined"
                    value={employee.Age}
                    onChange={(e) => {
                        setEmployee({ ...employee, Age: e.target.value })
                    }} />


                <TextField id="outlined-basic" label="PhNo" variant="outlined"
                    value={employee.PhNo}
                    onChange={(e) => {
                        setEmployee({ ...employee, PhNo: e.target.value })
                    }} />
            </Box>


            <Button variant="contained" color="secondary" display="flex"
                onClick={create}
            >
                Submit
            </Button>
        </>
    );
}


export default CreateEmployee;

