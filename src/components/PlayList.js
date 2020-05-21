import React, { useEffect } from 'react';

export default function({playlist, onRemoveTrackFromPlaylist}) {

    useEffect(() => {
        localStorage.setItem('musicApp', JSON.stringify(playlist));
    }, [playlist]);

    function copyTrack(artist, title) {
       navigator.clipboard.writeText(artist + ' - ' + title);       
    }

    function removeTrack(id) {
        onRemoveTrackFromPlaylist(id);        
    }
    
    return (
    <div className='playlist_cont'>
        <h2>My Playlist ({playlist.length})</h2>
        <div className="list-group container">
            {
                playlist.map((item, index) => {
                    return (
                        <div key = {item.id} className="playlistItem_cont">
                            <a key={index} className="list-group-item list-group-item-action">
                                {item.artist} - {item.title}                             
                            </a>
                            <div className = 'playlist_btn_cont'>
                                <button onClick = {copyTrack.bind(this, item.artist, item.title)} className='btn btn-success playlist_btn_copy'>Copy track title</button>
                                <button onClick={removeTrack.bind(this, item.id)} className='btn btn-danger '>Remove</button>
                            </div>
                        </div>
                    )
                })
            }      
        </div>         
    </div>   
    )
}