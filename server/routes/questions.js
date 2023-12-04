import express from 'express'
import { AskQuestion,getAllQuestions,deleteQuestion,voteQuestion } from '../controllers/questions.js';
import { deleteAnswer } from '../controllers/answers.js';

const router=express.Router()

router.post("/Ask", AskQuestion);          //  submits data to a specified resource - localhost/questions/AskQuestion
router.get('/get',getAllQuestions)         // requesting data from a specified source     
router.delete('/delete/:id',deleteQuestion)
router.patch('/answer/:id',deleteAnswer)
router.patch('/vote/:id',voteQuestion)
export default router;