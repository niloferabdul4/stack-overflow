// reducers/modalReducer.js

const initialState = {
    chats: []

}
const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case 'FETCH_ALL_MESSAGES':
            return {
                ...state,
                chats: action.payload
            };
          
        default:
            return state;
    }
}

export default chatReducer;