import React, {useRef, useEffect} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles.css'

let audio = new Audio();
let prevAud = '';

export default function App({data, onClick, onChangeInp}) {
  const inputEl = useRef('')

  useEffect(()=> {
    onClick();
  }, [])
  
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

  function playPreview(url) {  
       audio.src =  prevAud;
       audio.pause();
       audio.src = url
       audio.play()   
  }
  return(
    <React.Fragment>
      <div className='container'>
      <h1 onClick={titleClick} style={{textAlign: 'center'}}> 🎵Find_Music_App🎵</h1>
        <form>
          <div className="form-group">           
            <input ref = {inputEl} type="text" className="form-control" id="exampleInputEmail1" placeholder="Eminem" autoComplete='off'/>         
          </div>     
          <button onClick={handleClick} type="submit" className="btn btn-primary">Search</button>
          <div onClick={removeInpText} className='btn_remove'>❌</div>
        </form>  
        <table className="table" style={{marginTop: '20px'}}>
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
                <th scope="row">{index+1}</th>
                <td ><img src={item.artist.picture_small}/></td>
                <td style={{verticalAlign: "middle"}}><a href={item.artist.link} target='_blank'>{item.artist.name}</a></td>
                <td style={{verticalAlign: "middle"}}>{item.title}</td>
                <td style={{verticalAlign: "middle"}}>{((Math.floor(item.duration / 60) + ':' + item.duration % 60).length === 3 ? Math.floor(item.duration / 60) + ':' + '0' + item.duration % 60 :  Math.floor(item.duration / 60) + ':' + item.duration % 60)}</td>
                <td style={{verticalAlign: "middle"}}> <button onClick={playPreview.bind(this, item.preview)}  className='btn btn-success'>🎵Play</button></td>
                </tr>
                )
              })
            }            
              </tbody>
          </table>
      </div>      
    </React.Fragment>
  )
}



