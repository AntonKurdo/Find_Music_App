const initialState = []


export default function dataReducer(state = initialState, action) {
    if(action.type === 'PUT_DATA') {
        return action.payload
    }
    if(action.type === 'LOAD_DATA') {
        return state
    }
    return state
}