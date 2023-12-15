import * as api from "../api/index";

export const postMessage=(chatInput)=>async(dispatch)=>{
    try{
const {data}= await api.sendMessage(chatInput)
dispatch({
    type:'POST_MESSAGE',
    payload:data

})
    }
    catch(error){
        console.log(error)
    }
}