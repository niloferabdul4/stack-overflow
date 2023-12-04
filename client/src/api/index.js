import axios from 'axios'

const API=axios.create({baseURL:'http://localhost:5000'})                // create a base url and stored in API
export const logIn=(authData)=>API.post('/user/login',authData)           // post (url,data) to the API
export const signUp=(authData)=>API.post('/user/signup',authData)

/********     Questions   *************/

export const postQuestion = (questionData) => API.post("/questions/Ask", questionData);
export const getAllQuestions = () => API.get("/questions/get");
export const deleteQuestion=(id)=>API.delete(`/questions/delete/${id}`)
export const voteQuestion=(id,value,userId)=>API.patch(`/questions/vote/${id}`,{value,userId})

/******  Answer Sections *******/

export const postAnswer= (id, noOfAnswers, answerBody, userAnswered,userId) =>API.patch(`/answer/post/${id}`,{ noOfAnswers, answerBody, userAnswered,userId})
export const deleteAnswer = (id, answerId, noOfAnswers) =>
  API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers });    //adding {answrId,noOfAnswers} as body to url