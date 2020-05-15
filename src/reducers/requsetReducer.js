const initialState = 'Eminem';

export default function requestReducer(state = initialState, action) {
    if(action.type === 'CHANGE_INPUT') {
            return action.payload
    }
    return state
}