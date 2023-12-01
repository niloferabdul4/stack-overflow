import mongoose from "mongoose";
import Questions from "../models/Questions.js"

export const postAnswer = async (req, res) => {
    const { id: _id } = req.params;
    const { noOfAnswers, answerBody, userAnswered } = req.body
    const userId = req.userId;
    if (!mongoose.Types.ObjectId.isValid(_id))                // if the id is not valid
    {
        res.status(404).send('Question Unavailable')
    }
    updateNoOfQuestions(_id, noOfAnswers);
    try {
        // find by id and add a new value to 'ans' array
        const updatedQuestion = await Questions.findByIdAndUpdate(_id, { 
            $addToSet: { 'answer': [{ answerBody, userAnswered, userId }] } })
        res.status(200).json(updatedQuestion)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const updateNoOfQuestions = async (_id, noOfAnswers) => {
    try {
        await Questions.findByIdAndUpdate(_id, {
            $set: { noOfAnswers: noOfAnswers },
        });
    } catch (error) {
        console.log(error);
    }
};
