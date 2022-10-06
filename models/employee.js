import mongoose from "mongoose";

//creating the schema for table
const employeeSchema = new mongoose.Schema({
    srNo: { type: Number, required: true },
    Name: { type: String, required: true },
    Age: { type: String, required: true },
    PhNo: { type: String, required: true },
    // Section: { type: String }
});

//Making model from schema
const Employee = mongoose.model('Employee', employeeSchema)

export default Employee;