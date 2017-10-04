

const userIdReducer = (state = '321', action) => {
  if (action.type === "SAVE_USER_ID") {
    return 
         { action.idUser} ;
    
  } else return state;
}; 
export default userIdReducer;