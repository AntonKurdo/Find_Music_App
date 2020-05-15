import React from 'react';

export default function({playlist}) {
    console.log(playlist)
    return (
    <div className='playlist_cont'>
        <h2>My Playlist ({playlist.length})</h2>

        <div class="list-group container">

        {
            playlist.map(item => {
                return (
                    <a href="#" className="list-group-item list-group-item-action">{item.artist} - {item.title}</a>
                )
            })
        }
      
        </div> 
        
    </div>   
    )
}