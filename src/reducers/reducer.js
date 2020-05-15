import { combineReducers } from 'redux'
import dataReducer from '../reducers/dataReducer' 
import requsetReducer from '../reducers/requsetReducer'
import playlistReducer from './playlistReducer'
export default combineReducers({    
    dataReducer, 
    requsetReducer, 
    playlistReducer    
})