import Playlist from '../components/PlayList';
import { connect } from 'react-redux';


export default connect(
state => ({
    playlist: state.playlistReducer
}),
dispatch => ({
  
})
)(Playlist)
