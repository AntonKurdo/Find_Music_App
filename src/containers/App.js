import App from '../App';
import { connect } from 'react-redux';
import { loadData } from '../actions/loadData'

export default connect(
state => ({
    data: state
}),
dispatch => ({
    onClick: () => {
        dispatch(loadData())
    },
    onChangeInp: (value) => {
        dispatch({type: 'CHANGE_INPUT', payload: value})
    },
    onAddTrackToPlayList: (title, artist) => {
        dispatch({type: 'ADD_TO_PLAYLIST', payload: {title, artist}})
    }
})
)(App)

