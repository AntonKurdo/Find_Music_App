import App from '../App';
import { connect } from 'react-redux';
import { loadData } from '../actions/loadData'
import { changePage } from '../actions/changePage'
export default connect(
state => ({
    data: state.dataReducer,
    index: state.changePage.index    
}),
dispatch => ({
    onLoadData: () => {
        dispatch(loadData())
    },
    onChangeInp: (value) => {
        dispatch({type: 'CHANGE_INPUT', payload: value})
    },
    onAddTrackToPlayList: (id, title, artist) => {
        dispatch({type: 'ADD_TRACK_TO_PLAYLIST', payload: {id, title, artist}})
    },
    onChangePage: () => {
        dispatch(changePage(0, 1))
    }     
})
)(App)

