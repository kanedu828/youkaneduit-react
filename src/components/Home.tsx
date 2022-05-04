import '../styles/home.css'
import '../styles/shared.css';

import { useMediaQuery } from 'react-responsive'


function Home() {
  const isMobile = useMediaQuery({ minWidth: 1000 })
  const containerStyle = isMobile ? 'container' : 'container-mobile';
  document.title = 'Home';
  return (
    <div className={containerStyle + ' screen-center'}>
      <div className='container-col fade-in'>
        <h1 className='large-header'>About Me</h1>
        <p className='about-container content'>
          Hello! I am a 5th year Computer Science major at
          Georgia Tech. My concetrations are in intelligence and media.
          I will be graduating in December 2022.
          You can take a look at my coursework and internships in the timeline section.
        </p>
      </div>
      <img className='about-image' src={require('../assets/images/about_drawing.png')}/>
    </div>
  );
}

export default Home;
