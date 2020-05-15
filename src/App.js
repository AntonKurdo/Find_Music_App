import React, {useRef, useEffect} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles.css'
import {
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import NavBar from './containers/Navbar'
import Playlist from './containers/PlayList'

let audio = new Audio();
let prevAud = '';

export default function App({data, onClick, onChangeInp, onAddTrackToPlayList}) {
  const inputEl = useRef('')

  // useEffect(()=> {
  //   onClick();
  // }, [])
  
  function titleClick() {
    window.location.reload()
  }
  function handleClick(e) {
    if(inputEl.current.value !== '') {
      onChangeInp(inputEl.current.value)
    }      
    e.preventDefault();     
    onClick();
  }
  function removeInpText() {    
    inputEl.current.value = ''
  }
  function addTrackToPlayList(title, artist) {
    onAddTrackToPlayList(title, artist)
  }

  function playPreview(url) {  
       audio.src =  prevAud;
       audio.pause();
       audio.src = url
       audio.play()   
  }

  

  return(    
    <div className='App'>      
     <NavBar />    
   <Switch>
      <Route path="/" exact>          
              <div className='welcome_body'>
              <h1 onClick={titleClick} style={{textAlign: 'center'}}> 🎵Find_Music_App🎵</h1>
              <img src="https://i.pinimg.com/originals/ab/45/bb/ab45bb4451536652faca51ae4f42d5dd.gif" /> 
              <NavLink to="/tracks">
              <button className='btn btn-success btn_start'>Start</button>  
              </NavLink>     
          </div>   
        </Route>

      <Route path="/tracks">
          <div style={{minHeight:'820px'}}>     
            <h1 onClick={titleClick} style={{textAlign: 'center'}}> 🎵Find_Music_App🎵</h1>
              <form>
                <div className="form-group">           
                  <input ref = {inputEl} type="text" className="form-control" id="exampleInputEmail1" placeholder="Eminem" autoComplete='off'/>         
                </div>     
                <button onClick={handleClick} type="submit" className="btn btn-primary" disabled='true'>Search</button>
                <div onClick={removeInpText} className='btn_remove'>❌</div>
              </form>  
              <table className="table container" style={{marginTop: '20px'}}>
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
                    data.dataReducer.map((item, index) => {
                      return (
                        <tr key={item.id}>
                      <th  style={{verticalAlign: "middle"}} scope="row">{index+1}</th>
                      <td ><img src={item.artist.picture_small}/></td>
                      <td style={{verticalAlign: "middle"}}><a href={item.artist.link} target='_blank'>{item.artist.name}</a></td>
                      <td style={{verticalAlign: "middle"}}>{item.title}</td>
                      <td style={{verticalAlign: "middle"}}>{((Math.floor(item.duration / 60) + ':' + item.duration % 60).length === 3 ? Math.floor(item.duration / 60) + ':' + '0' + item.duration % 60 :  Math.floor(item.duration / 60) + ':' + item.duration % 60)}</td>
                      <td style={{verticalAlign: "middle", position: 'relative'}}> <button onClick={playPreview.bind(this, item.preview)}  className='btn btn-success'>🎵Play</button> <div onClick={addTrackToPlayList.bind(this, item.title, item.artist.name)} className='btn_add'>➕</div></td>
                     
                      </tr>
                      )
                    })
                  }            
                    </tbody>
                </table>          
          </div>
      </Route>
      <Route path='/playlist'>
         <Playlist/>
      </Route>
    </Switch>
    <footer>
      <div>
          <h5 style={{textAlign: 'center', marginBottom: '0'} }> 🎵FindMusic</h5>        
          <small>Listen tops with us</small>
      </div>
      <a href='https://github.com/AntonKurdo' target='_blank'>Anton Kurdo</a>
    </footer>
    </div>
  )
}



