import { type as addUser } from '../actions/addUser';

let id = 1;

const defaultState = {
    datesUser: [ ],   
}
    

function reducer(state = defaultState, { type, payload }) {    
    switch (type) {
        case addUser: {
           
        return{
                ...state,
                datesUser: state.datesUser.splice(0,1),
                datesUser: state.datesUser.concat(payload),
               }; 
        }

    default:
        return state;
}
}
export default reducer;