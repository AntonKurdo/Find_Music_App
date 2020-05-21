import Navbar from '../components/Navbar';
import { connect } from 'react-redux';

export default connect(
state => ({
    playlist: state.playlistReducer
}),
dispatch => ({  
})
)(Navbar)