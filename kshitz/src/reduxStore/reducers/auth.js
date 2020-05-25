import * as actionTypes from '../actions/actionTypes';

const initialState={
    token:null,
   username:null,
   error:null

}

const reducer =(state=initialState,action)=>{

    switch(action.type){
        case actionTypes.AUTH_LOGIN:
            return{
                ...state,
                token:action.token,
                error:null
            };

        case actionTypes.AUTH_FAIL:
            return{
                ...state,
                error: action.error
            };
            default:return state;
    }



};

export default reducer;