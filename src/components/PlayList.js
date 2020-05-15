import React from 'react';

export default function({playlist}) {
    return (
    <div className='playlist_cont'>
        <h2>My Playlist ({playlist.length})</h2>
        <div className="list-group container">
        {
            playlist.map((item, index) => {
                return (
                    <a href="#" key={index} className="list-group-item list-group-item-action">{item.artist} - {item.title}</a>
                )
            })
        }      
        </div>         
    </div>   
    )
}