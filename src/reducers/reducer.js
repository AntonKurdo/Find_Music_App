import { combineReducers } from 'redux';
import dataReducer from '../reducers/dataReducer';
import requsetReducer from '../reducers/requsetReducer';
import playlistReducer from './playlistReducer';
import changePage from './changePage'
export default combineReducers({    
    dataReducer, 
    requsetReducer, 
    playlistReducer,
    changePage   
})