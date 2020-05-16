import { CHANGE_PAGE } from "../actions/changePage";

const initialState = {
                        index: 0,
                        page: 1
                    };

export default function changePage (state = initialState, action) {
    if(action.type === CHANGE_PAGE) {
          return action.payload
    }    
    return state
}