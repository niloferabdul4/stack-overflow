import express from 'express'
import { postAnswer,deleteAnswer } from '../controllers/answers.js'

const router=express.Router()

router.patch('/post/:id',postAnswer)
router.patch('/delete/:id',deleteAnswer)        // using patch=> since we are updatg the question by removing only the particular answer fronm the question
                                               // id here => id of the question
export default router;