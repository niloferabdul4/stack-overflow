// reducers/modalReducer.js

const chatReducer=(state={chatResponse:''},action)=>{
switch (action.type) {
    case 'POST_MESSAGE':
       
        return action.payload
      

    default:
       return state;
}
}

export default chatReducer;