import axios from 'axios'

const API=axios.create({baseURL:'http://localhost:5000'})                // create a base url and store in API
                                                                        // post (url,data) to the API

//Adding Authorization(for each req,check if the token is valid or not and then allow the specific actions(postQuestion,deleteAnswer.. etc))

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;                       //only then req will go the backend
});
export const logIn=(authData)=>API.post('/user/login',authData)           
export const signUp=(authData)=>API.post('/user/signup',authData)
export const getAllUsers=()=>API.get('/user/getAllUsers')


/********     Questions   *************/

export const postQuestion = (questionData) => API.post("/questions/Ask", questionData);
export const getAllQuestions = () => API.get("/questions/get");
export const deleteQuestion=(id)=>API.delete(`/questions/delete/${id}`)
export const voteQuestion=(id,value,userId)=>API.patch(`/questions/vote/${id}`,{value,userId})


/******  Answer Sections *******/

export const postAnswer= (id, noOfAnswers, answerBody, userAnswered,userId) =>API.patch(`/answer/post/${id}`,{ noOfAnswers, answerBody, userAnswered,userId})
export const deleteAnswer = (id, answerId, noOfAnswers) =>
  API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers });    //adding {answrId,noOfAnswers} as body to url