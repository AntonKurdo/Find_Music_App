import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles.css';
import {
  Switch,
  Route 
} from "react-router-dom";
import NavBar from './containers/Navbar';
import WelcomeBody from './components/WelcomeBody';
import Tracks from './containers/Tracks';
import Playlist from './containers/PlayList';
import Paginator from './containers/Paginator';
import Footer from './components/Footer'



export default function App() {
     
  return(    
    <div className='App'>      
     <NavBar />    
     <Switch>
      <Route path="/" exact>          
         <WelcomeBody />
      </Route>

      <Route path="/tracks">
        <Tracks />
        <Paginator />
      </Route>
      <Route path='/playlist'>
         <Playlist/>
      </Route>
     </Switch>
 
     <Footer />
    </div>
  )
}



