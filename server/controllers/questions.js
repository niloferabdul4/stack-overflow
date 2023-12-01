import Questions from "../models/Questions.js";


export const AskQuestion=async(req,res)=>{

const postQuestionData=req.body;
const userId = req.userId;
const postQuestion = new Questions({ ...postQuestionData, userId });

try{
    await postQuestion.save();
    res.status(200).json({message:'Posted a question successfully'})

}
catch (error) {
    console.log(error)
    res.status(409).json({ message: 'Couldn\'t post a question' })
}

}
 
// GetAllQuestions  (get data from database)

export const getAllQuestions=async(req,res)=>{
    try{
        const questionList=await Questions.find()
        res.status(200).json(questionList)
    }
    catch(error){
        res.status(404).json({message:error.message})
    }

}