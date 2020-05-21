const initialState = [
    // {
    //     id: 0,
    //     title: "Lose Your Self",
    //     artist: 'Eminem', 
        
    // }
]

export default function (state = initialState, action) {
    if(action.type === 'ADD_TRACK_TO_PLAYLIST') {
        state = [...state, action.payload];
        localStorage.setItem('musicApp', JSON.stringify(state));
        return state;
    }
    if(action.type === 'REMOVE_TRACK_FROM_PLAYLIST') {
        return state.filter(el => el.id !== action.payload);         
    }

    if(localStorage.musicApp) {
       let data =  localStorage.getItem('musicApp')
       return JSON.parse(data)
    } else {
        return state;
    }
    
}