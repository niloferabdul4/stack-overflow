import * as api from "../api/index";

export const askQuestion = (questionData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postQuestion(questionData)
        dispatch({ type: 'POST_QUESTION', payload: data })
        dispatch(fetchAllQuestions());
        navigate('/')
    }
    catch (error) {
        console.log(error);
    }
}


export const fetchAllQuestions=()=>async(dispatch)=>{
    try{
        const {data}=await api.getAllQuestions()
        dispatch({type:'FETCH_ALL_QUESTIONS',payload:data})
      
    }
    catch (error) {
        console.log(error);
    }
}

export const postAnswer=(answerData)=>async(dispatch)=>{
    try{
        const {id,answerBody,userAnswered,noOfAnswers}=answerData
        const {data}=await api.postAnswer(id,answerBody,userAnswered,noOfAnswers)
        dispatch({type:'POST_ANSWER',payload:data})
        dispatch(fetchAllQuestions());

    }
    catch (error) {
        console.log(error);
    }
}