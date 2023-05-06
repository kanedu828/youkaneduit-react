import '../styles/home.css'
import '../styles/shared.css';

import  { NavLink } from "react-router-dom";


function Home() {
  document.title = 'Home';
  return (
    <div className='container'>
      <div className='container-col fade-in'>
        <h1 className='large-header'>About Me</h1>
        <p className={'about-container content'}>
          Hello! My name is Kane and I am a Georgia Tech graduate. I studied Computer Science, and 
          concetrations were in intelligence and media. You can take a look at my coursework and work 
          experiences in my timeline. I am currently located in Suwanee, Georgia.
        </p>
        <NavLink className='main-button' to='/timeline'> See My Timeline!  </NavLink>
      </div>
      <img className='about-image' src={require('../assets/images/about_drawing.png')}/>
    </div>
  );
}

export default Home;
