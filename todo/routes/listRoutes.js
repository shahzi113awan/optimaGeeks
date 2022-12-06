import express from 'express'
import listController from '../controllers/listController.js'

const router = express.Router()

router
      .route('/')
      .get(listController.getList)
      .post(listController.createList)

router
      .route('/:id')
      .get(listController.getById)
      .delete(listController.deleteList)
      .put(listController.updateList)

      export default router