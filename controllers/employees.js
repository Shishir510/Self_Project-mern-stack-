//importing Model created for Employee data
import Employee from "../models/employee.js";


//getEmployee function return the response containing JSON file containing data 
export const getEmployee = async (req, res) => {
    //try-catch block to catch the error and showing it for better UX
    try {
        //finding the data (ehich take time so await) and storing in variable allEmployee
        const allEmployees = await Employee.find();
        //Status Code 200 ---> The request succeeded
        res.status(200).json(allEmployees)

    } catch (error) {
        //Status Code 404 ---> Bad Request (The server cannot or will not process the request due to something that is perceived to be a client error)
        res.status(404).json({ message: error.message })
    }
}

//createEmployee function create the function that 
export const createEmployee = async (req, res) => {

    //getting the req.body content from frontEnd (which is posted by user) 
    const EmployeeInfo = req.body
    //creating the new document using model 'Employee' and data 'req.body'
    const EmployeeDoc = new Employee(EmployeeInfo)
    try {
        //waiting for the DB to save the created document inside it
        const Createdemployee = await EmployeeDoc.save()

        //Status Code 201 ---> The request succeeded, and a new resource was created as a result. This is typically the response sent after POST requests, or some PUT requests.
        res.status(201).json(Createdemployee);
    } catch (error) {
        res.status(409).json({ message: error.message })

    }
}


export const deletePost = async (req, res) => {
    const id = req.params.id;
    try {
        await Employee.findByIdAndRemove(id).exec()
    } catch (error) {
        res.json({ message: error.message })
    }
}

