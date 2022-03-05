const animalRouter = require('express').Router();
const animalCtrl=require('../controller/animal-ctrl')

animalRouter.get('/',animalCtrl.getAllAnimal)
animalRouter.get('/:id',animalCtrl.getAllAnimalById)
animalRouter.post('/',animalCtrl.addAnimal)
animalRouter.put('/:id',animalCtrl.updateAnimal)
animalRouter.delete('/:id',animalCtrl.deleteAnimal)

module.exports =animalRouter;
