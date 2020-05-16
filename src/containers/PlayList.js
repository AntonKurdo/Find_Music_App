import Playlist from '../components/PlayList';
import { connect } from 'react-redux';


export default connect(
state => ({
    playlist: state.playlistReducer
}),
dispatch => ({
    onRemoveTrackFromPlaylist: (id) => {
        dispatch({type: "REMOVE_TRACK_FROM_PLAYLIST", payload: id})
    }     
})
)(Playlist)
