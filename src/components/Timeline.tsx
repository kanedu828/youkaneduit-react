import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import '../styles/timeline.css';
import '../styles/shared.css';
import 'react-vertical-timeline-component/style.min.css';


function Timeline() {
  document.title = 'Timeline';
  const contentStyle = {'backgroundColor': '#F8F5F0'};
  const contentArrowStyle = {'borderRight': '7px solid #F8F5F0'};
  return (
    <div className='container-col center'>
      <h1 className='large-header'>My Timeline</h1>
      <div className='timeline-container'>
        <div className='box-fill'>  </div>
        <VerticalTimeline
          lineColor='#0B3948'
        >
          <VerticalTimelineElement
            date='Fall 2022'
            icon={<img className='icon' src={require('../assets/images/gt_logo.jpg')}/>}
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
          >
            <h4> My Fall Semester Classes: </h4>
            Machine Learning
            <br/>
            Data Visualization
            <br/>
            Video Game Design
            <br/>
            Foundation of Health <br/>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date='Summer 2022'
            icon={<img className='icon' src={require('../assets/images/doordash_logo.png')}/>}
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
          >
            <h4> My Summer Internship: </h4>
            I interned at Doordash's Storefront team. I had a very positive experience, and working with my mentor and team has been pleasant.
            I did full stack enginnering working with Kotlin, React, grpc, GraphQL, and Typescript. My project involved allowing storefront merchants
            to easily change loyalty program infromation through an admin portal. The loyalty infromation is then queried from the frontend with graphql.
            An example of this loyalty information could be seen in the following link: https://order.online/store/pines-adak-544025/?hideModal=true&pickup=true
            <br/>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date='Spring 2022'
            icon={<img className='icon' src={require('../assets/images/gt_logo.jpg')}/>}
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
          >
            <h4> My Spring Semester Classes: </h4>
            Computer Vision
            <br/>
            Robotics
            <br/>
            Algorithms
            <br/>
            Junior Design (Second Semester) <br/>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date='Fall 2021'
            icon={<img className='icon' src={require('../assets/images/gt_logo.jpg')}/>}
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
          >
            <h4> My Fall Semester Classes: </h4>
            Probability & Statistics
            <br/>
            Intro to Industrial Design
            <br/>
            Computer Graphics
            <br/>
            Junior Design (First Semester) <br/>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date='Summer 2021'
            icon={<img className='icon' src={require('../assets/images/amazon_logo.jpg')}/>}
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
          >
            <h4> My Summer Internship: </h4>
            Interned at Amazon with the AWS Cordite team! Battled with a lot of the internal tooling
             and learning the AWS suite, but I ultimately learned a lot. <br/>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date='Spring 2021'
            icon={<img className='icon' src={require('../assets/images/gt_logo.jpg')}/>}
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
          >
            <h4> My Spring Semester Classes: </h4>
            Intro to Artificial Intelligence
            <br/>
            Objects and Design
            <br/>
            Physics II
            <br/>
            Blockchain & Cryptocurrencies <br/>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date='Fall 2020'
            icon={<img className='icon' src={require('../assets/images/gt_logo.jpg')}/>}
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
          >
            This is my first semester at Georgia Tech!
            <h4> My Fall Semester Classes: </h4>
            Data Structures
            <br/>
            Foundations of Math Proofs
            <br/>
            Combinatorics
            <br/>
            Linear Algebra II <br/>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date='Summer 2020'
            icon={<img className='icon' src={require('../assets/images/aflac_logo.png')}/>}
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
          >
            <h4> My Summer Internship: </h4>
            My first internship was at Aflac. I first learned about the development pipeline here.
            Learning about how environments are setup, best practicies, and AGILE development has
            been very important for me.

            <h4> My Summer Classes: </h4>
            Computing Ethics and Society <br/>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date='Spring 2020'
            icon={<img className='icon' src={require('../assets/images/uga_logo.jpg')}/>}
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
          >
            <h4> My Spring Semester Classes: </h4>
            Data Structures <br/>
            Computer Architecture <br/>
            Multivariable Calculus <br/>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date='Fall 2019'
            icon={<img className='icon' src={require('../assets/images/uga_logo.jpg')}/>}
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
          >
            <h4> My Fall Semester Classes: </h4>
            Systems Programming <br/>
            Differential Equations <br/>
            Linear Algebra <br/>
            Honors American Government <br/>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date='Summer 2019'
            icon={<img className='icon' src={require('../assets/images/ksu_logo.png')}/>}
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
          >
            Took a class as a transient student at Kennesaw State University!
            <h4> My Summer Semester Classes: </h4>
            English Composition II <br/>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date='Spring 2019'
            icon={<img className='icon' src={require('../assets/images/uga_logo.jpg')}/>}
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
          >
            <h4> My Spring Semester Classes: </h4>
            Honors Biology <br/>
            Software Development <br/>
            Intro the the Theory of Computing <br/>
            English Composition <br/>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date='Fall 2018'
            icon={<img className='icon' src={require('../assets/images/uga_logo.jpg')}/>}
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
          >
            <h4> College! </h4>
            Started my education at The University of Georgia... Go Dawgs!
            <h4> My Fall Semester Classes: </h4>
            Astronomy of the Solar System <br/>
            Intro to Programming <br/>
            Discrete Math <br/>
            Intro to Cinema <br/>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <div className='box-fill'>  </div>
      </div>
    </div>
  );
}

export default Timeline;
