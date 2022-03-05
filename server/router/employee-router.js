const employeeRouter = require('express').Router();
const employeeCtrl=require('../controller/employee-ctrl')

employeeRouter.get('/',employeeCtrl.getAllEmployee)
employeeRouter.get('/:id',employeeCtrl.getAEmployeeById)
employeeRouter.post('/',employeeCtrl.addEmployee)
employeeRouter.put('/:id',employeeCtrl.updateEmployee)
employeeRouter.delete('/:id',employeeCtrl.deleteEmployee)

module.exports =employeeRouter;
