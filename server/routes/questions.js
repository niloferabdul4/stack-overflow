import express from 'express'
import { AskQuestion } from '../controllers/questions.js';
import { getAllQuestions } from '../controllers/questions.js';
const router=express.Router()

router.post("/Ask", AskQuestion);          //  submits data to a specified resource - localhost/questions/AskQuestion
router.get('/get',getAllQuestions)         // requesting data from a specified source     

export default router;