import axios from 'axios'

const API=axios.create({baseURL:'http://localhost:5000'})                // create a base url and stored in API
export const logIn=(authData)=>API.post('/user/login',authData)           // post (url,data) to the API
export const signUp=(authData)=>API.post('/user/signup',authData)
export const postQuestion = (questionData) => API.post("/questions/Ask", questionData);
export const getAllQuestions = () => API.get("/questions/get");
export const postAnswer= (id, noOfAnswers, answerBody, userAnswered) =>API.patch(`/answer/post/${id}`,{ noOfAnswers, answerBody, userAnswered})
