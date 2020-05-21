import React, { useEffect, useRef } from 'react';

let audio = new Audio();
let prevAud = '';

export default function({data, index, playlist, onLoadData, onChangeInp, onAddTrackToPlayList, onChangePage, onPutEmptyData}) {
    const inputEl = useRef('');  
         
      useEffect(()=> {
        onLoadData();
      }, [])
  
    function disableButton(id) {
      if(localStorage.getItem('musicApp')) {
        let arr = [];
        let arrLS = [];
        let flag = [];
        data.data.forEach(item => {
          arr.push(item.id)
        })    
        JSON.parse(localStorage.getItem('musicApp')).forEach(item => {
          arrLS.push(item.id)
        })
        arr.forEach(item => {
          arrLS.forEach(item1 => {
            if(item === item1) {         
              if(item === id) {
                  flag.push(id)    
              }
            }
          })    
        })
        if(flag.length !== 0) {
          return true;
        }
       }
      }
      
      function titleClick() {
        window.location.reload()
      }
    
      function handleClick(e) {
        onPutEmptyData();
         onChangePage(); 
        if(inputEl.current.value !== '') {
          onChangeInp(inputEl.current.value)
        }      
        e.preventDefault();     
        onLoadData();      
      }
    
      function removeInpText() {    
        inputEl.current.value = '';
      }
    
      function addTrackToPlayList(id, title, artist) {   
        onAddTrackToPlayList(id, title, artist);   
      }
    
      function playPreview(url) {  
           audio.src =  prevAud;
           audio.pause();
           audio.src = url
           audio.play()   
      }

      return (
        <React.Fragment>
              <div style={{minHeight:'766px'}}>     
            <h1 onClick={titleClick} style={{textAlign: 'center'}}> 🎵Find_Music_App🎵</h1>
              <form>
                <div className="form-group">           
                  <input ref = {inputEl} type="text" className="form-control" id="exampleInputEmail1" placeholder="Eminem" autoComplete='off'/>         
                </div>     
                <button onClick={handleClick} type="submit" className="btn btn-primary" >Search</button>
                <div onClick={removeInpText} className='btn_remove'>❌</div>
              </form>  
            {data.data.length === 0 
            ? (
                    <div style={{width: '4rem', height: '4rem', position: 'relative', left: '47%', top: '50px'}} className="spinner-border text-primary" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>                  
              ) 
              :<table className="table container" style={{marginTop: '20px'}}>
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope='col'>Img</th>
                      <th scope="col">Artist</th>
                      <th scope="col">Track</th>
                      <th scope="col">Duration</th>
                      <th scope="col">Preview(00:30)</th>                   
                    </tr>
                  </thead>
                  <tbody>
                  {
                    data.data.map((item, i) => {
                      return (
                        <tr key={item.id}>
                          <th  style={{verticalAlign: "middle"}} scope="row">{index === 0 ? i + 1 : i + 1 + index}</th>
                          <td ><img src={item.album.cover_small}/></td>
                          <td style={{verticalAlign: "middle"}}><a href={item.artist.link} target='_blank'>{item.artist.name}</a></td>
                          <td style={{verticalAlign: "middle"}}>{item.title}</td>
                          <td style={{verticalAlign: "middle"}}>{((Math.floor(item.duration / 60) + ':' + item.duration % 60).length === 3 ? Math.floor(item.duration / 60) + ':' + '0' + item.duration % 60 :  Math.floor(item.duration / 60) + ':' + item.duration % 60)}</td>
                          <td style={{verticalAlign: "middle", position: 'relative'}}> 
                            <button onClick={playPreview.bind(this, item.preview)}  className='btn btn-success'>🎵Play</button> 
                            <button 
                            onClick={addTrackToPlayList.bind(this, item.id, item.title, item.artist.name)} 
                            title = 'Add track to playlist'
                            className='btn_add'
                            disabled={disableButton(item.id) ? true : false}>
                                {disableButton(item.id) ? '✔' : '➕' }
                            </button>
                          </td>
                        
                       </tr>
                      )
                    })
                  }            
                    </tbody>
                </table>     
                }     
          </div>      
        </React.Fragment>
    )
}