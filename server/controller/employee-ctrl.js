const employee = require('../model/employee-model');

const getAllEmployee =async (req,res)=>{
    await employee.find()
    .then(result => res.send(result))
    .catch(err => res.send({message:err}))
}
const getAEmployeeById =async (req,res)=>{
    await employee.findById(req.params.id)
    .then(result => res.send(result))
    .catch(err => res.status(402).send({message:err}))
}
const addEmployee =async (req,res)=>{
    await employee.create(req.body)
    .then(result => res.send(result))
    .catch(err => res.status(400).send({message:err}))
}
const updateEmployee =async (req,res)=>{
    await employee.findByIdAndUpdate(req.body)
    employee.findOne({_id: req.params.id})
    .then(result => res.send(result))
    .catch(err => res.status(400).send({message:err}))
}

const deleteEmployee =async (req,res)=>{
    await employee.findByIdAndDelete({_id: req.params.id},req.body)
    .then((data)=>{ res.send(data)})
    .catch((err)=>{ res.status(403).send({mess:err})})
}

module.exports = {
    getAllEmployee,
    getAEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee
}