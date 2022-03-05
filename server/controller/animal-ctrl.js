const animal = require('../model/animal-model');

const getAllAnimal =async (req,res)=>{
    await animal.find()
    .then(result => res.send(result))
    .catch(err => res.send({message:err}))
}
const getAllAnimalById =async (req,res)=>{
    await animal.findById(req.params.id)
    .then(result => res.send(result))
    .catch(err => res.status(402).send({message:err}))
}
const addAnimal =async (req,res)=>{
    await animal.create(req.body)
    .then(result => res.send(result))
    .catch(err => res.status(400).send({message:err}))
}
const updateAnimal =async (req,res)=>{
    await animal.findByIdAndUpdate(req.body)
    animal.findOne({_id: req.params.id})
    .then(result => res.send(result))
    .catch(err => res.status(400).send({message:err}))
}

const deleteAnimal =async (req,res)=>{
    await animal.findByIdAndDelete({_id: req.params.id},req.body)
    .then((data)=>{ res.send(data)})
    .catch((err)=>{ res.status(403).send({mess:err})})
}

module.exports = {
    getAllAnimal,
    getAllAnimalById,
    updateAnimal,
    addAnimal,
    deleteAnimal
}