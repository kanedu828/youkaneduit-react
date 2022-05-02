import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import '../styles/about.css';
import '../styles/shared.css';
import 'react-vertical-timeline-component/style.min.css';
import gtLogo from '../assets/images/gt_logo.jpg';


function About() {
  return (
    <div className='container'>
      <img className='about-image' src={require('../assets/images/about_drawing.png')}/>
      <h1 className='medium-header'>About Me</h1>
      <div className='content'>
        Georgia Tech '22. Computer Science. Intelligence + Media
      </div>
      <div className='timeline-container'>
        <div className='box-fill'>  </div>
        <VerticalTimeline
          lineColor='#416165'
        >
          <VerticalTimelineElement
            date='Summer 2022'
            icon={<img className='icon' src={require('../assets/images/doordash_logo.png')}/>}
            contentStyle={{'backgroundColor': '#F8F5F0'}}
            contentArrowStyle={{'borderRight': '7px solid #F8F5F0'}}
          >
            <h4> My Summer Internship: </h4>
            I will be interning at Doordash in Seattle (it's actually remote 😔)!
            I'll be working with the Storefront team, where Doordash powers restaurant online ordering software.
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date='Spring 2022'
            icon={<img className='icon' src={require('../assets/images/gt_logo.jpg')}/>}
            contentStyle={{'backgroundColor': '#F8F5F0'}}
            contentArrowStyle={{'borderRight': '7px solid #F8F5F0'}}
          >
            <h4> My Spring Semester Classes: </h4>
            Computer Vision
            <br/>
            Robotics
            <br/>
            Algorithms
            <br/>
            Junior Design (Second Semester)
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date='Fall 2021'
            icon={<img className='icon' src={require('../assets/images/gt_logo.jpg')}/>}
            contentStyle={{'backgroundColor': '#F8F5F0'}}
            contentArrowStyle={{'borderRight': '7px solid #F8F5F0'}}
          >
            <h4> My Fall Semester Classes: </h4>
            Probability & Statistics
            <br/>
            Intro to Industrial Design
            <br/>
            Computer Graphics
            <br/>
            Junior Design (First Semester)
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date='Summer 2021'
            icon={<img className='icon' src={require('../assets/images/amazon_logo.jpg')}/>}
            contentStyle={{'backgroundColor': '#F8F5F0'}}
            contentArrowStyle={{'borderRight': '7px solid #F8F5F0'}}
          >
            <h4> My Summer Internship: </h4>
            Interned at Amazon with the AWS Coridite team! Battled with a lot of the internal tooling
             and learning the AWS suite, but I ultimately learned a lot.
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date='Spring 2021'
            icon={<img className='icon' src={require('../assets/images/gt_logo.jpg')}/>}
            contentStyle={{'backgroundColor': '#F8F5F0'}}
            contentArrowStyle={{'borderRight': '7px solid #F8F5F0'}}
          >
            <h4> My Spring Semester Classes: </h4>
            Intro to Artificial Intelligence
            <br/>
            Objects and Design
            <br/>
            Physics II
            <br/>
            Blockchain & Cryptocurrencies
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date='Fall 2020'
            icon={<img className='icon' src={require('../assets/images/gt_logo.jpg')}/>}
            contentStyle={{'backgroundColor': '#F8F5F0'}}
            contentArrowStyle={{'borderRight': '7px solid #F8F5F0'}}
          >
            This is my first semester at Georgia Tech!
            <h4> My Fall Semester Classes: </h4>
            Data Structures
            <br/>
            Foundations of Math Proofs
            <br/>
            Combinatorics
            <br/>
            Linear Algebra II
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date='Summer 2020'
            icon={<img className='icon' src={require('../assets/images/aflac_logo.png')}/>}
            contentStyle={{'backgroundColor': '#F8F5F0'}}
            contentArrowStyle={{'borderRight': '7px solid #F8F5F0'}}
          >
            <h4> My Summer Internship: </h4>
            My first internship was at Aflac. I first learned about the development pipeline here.
            Learning about how environments are setup, best practicies, and AGILE development has
            been very important for me.
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date='Fall 2018'
            icon={<img className='icon' src={require('../assets/images/uga_logo.jpg')}/>}
            contentStyle={{'backgroundColor': '#F8F5F0'}}
            contentArrowStyle={{'borderRight': '7px solid #F8F5F0'}}
          >
            <h4> College! </h4>
            Started my education at The University of Georgia... Go Dawgs!
          </VerticalTimelineElement>
        </VerticalTimeline>
        <div className='box-fill'>  </div>
      </div>
    </div>
  );
}

export default About;