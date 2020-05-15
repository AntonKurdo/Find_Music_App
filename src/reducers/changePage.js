import { CHANGE_PAGE } from "../actions/changePage";

const initialState = 0;


export default function changePage (state = initialState, action) {
    if(action.type === CHANGE_PAGE) {
        return action.payload
    }    
    return state
}