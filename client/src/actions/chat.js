import * as api from "../api/index";

export const sendMessageToChatbot = (textData) => async (dispatch) => {
    try {
        //const { data } = await api.sendChatbot(textData)      // sends a request to API and extracts the response data 
       // dispatch({type:'SEND_MESSAGE',payload:data})
       await api.sendChatbot(textData);
       dispatch(fetchAllMessages(textData))
        
    }
    catch (error) {
        console.log(error)
    }
}


export const fetchAllMessages=(textData)=>async(dispatch)=>{
    try{
   const {userId}=textData
    //console.log(userId)
    const {data}=await api.getAllMessages(userId)
   dispatch({type:'FETCH_ALL_MESSAGES',payload:data})
  
}
catch (error) {
    console.log(error);
}
}
