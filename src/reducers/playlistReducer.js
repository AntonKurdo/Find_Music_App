const initialState = [
    {
        title: "Lose Your Self",
        artist: 'Eminem', 
        
    }
]

export default function (state = initialState, action) {
    if(action.type === 'ADD_TO_PLAYLIST') {
        return [...state, action.payload]
    }
    return state
}