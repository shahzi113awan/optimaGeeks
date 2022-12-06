import express from 'express'
import todoController from '../controllers/todoController.js'

const router = express.Router()

router
      .route('/')
      .get(todoController.getTodo)
      .post(todoController.createTodo)

router
      .route('/:id')
      .get(todoController.getById)
      .delete(todoController.delteTodo)
      .put(todoController.updateTodo)