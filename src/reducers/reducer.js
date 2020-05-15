import { combineReducers } from 'redux'
import dataReducer from '../reducers/dataReducer' 
import requsetReducer from '../reducers/requsetReducer'

export default combineReducers({    
    dataReducer, 
    requsetReducer
})