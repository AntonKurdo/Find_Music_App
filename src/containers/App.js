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
    }
})
)(App)

