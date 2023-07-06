import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "../styles/timeline.css";
import "../styles/shared.css";
import "react-vertical-timeline-component/style.min.css";
import { Container, Flex, Title } from "@mantine/core";

export const Timeline = () => {
  document.title = "Timeline";
  const contentStyle = { backgroundColor: "#F8F5F0" };
  const contentArrowStyle = { borderRight: "7px solid #F8F5F0" };
  return (
    <Container>
      <Flex direction="column" justify="center" align="center" gap="xl" py={50}>
        <Title size="5em">My Timeline</Title>
        <Flex direction="column">
          <div className="box-fill"> </div>
          <VerticalTimeline lineColor="#0B3948">
            <VerticalTimelineElement
              date="Jan 2023"
              icon={
                <img
                  className="icon"
                  src={require("../assets/images/doordash_logo.png")}
                />
              }
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
            >
              Started working as a full time software engineer at DoorDash! It
              was very exciting to get a return offer after my internship there.
              Excited to grow and learn more at DoorDash.
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Winter 2022"
              icon={
                <img
                  className="icon"
                  src={require("../assets/images/gt_logo.jpg")}
                />
              }
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
            >
              Graduated from Georgia Tech! Graduation always felt so far away!!
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Fall 2022"
              icon={
                <img
                  className="icon"
                  src={require("../assets/images/gt_logo.jpg")}
                />
              }
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
            >
              <Title order={5}> My Fall Semester Classes: </Title>
              Machine Learning
              <br />
              Data Visualization
              <br />
              Video Game Design
              <br />
              Foundation of Health <br />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Summer 2022"
              icon={
                <img
                  className="icon"
                  src={require("../assets/images/doordash_logo.png")}
                />
              }
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
            >
              <Title order={5}> My Summer Internship: </Title>
              I interned at Doordash's Storefront team. I had a very positive
              experience, and working with my mentor and team has been pleasant.
              I did full stack enginnering working with Kotlin, React, grpc,
              GraphQL, and Typescript. My project involved allowing storefront
              merchants to easily change loyalty program infromation through an
              admin portal. The loyalty infromation is then queried from the
              frontend with graphql. An example of this loyalty information
              could be seen in the following link:
              https://order.online/store/pines-adak-544025/?hideModal=true&pickup=true
              <br />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Spring 2022"
              icon={
                <img
                  className="icon"
                  src={require("../assets/images/gt_logo.jpg")}
                />
              }
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
            >
              <Title order={5}> My Spring Semester Classes: </Title>
              Computer Vision
              <br />
              Robotics
              <br />
              Algorithms
              <br />
              Junior Design (Second Semester) <br />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Fall 2021"
              icon={
                <img
                  className="icon"
                  src={require("../assets/images/gt_logo.jpg")}
                />
              }
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
            >
              <Title order={5}> My Fall Semester Classes: </Title>
              Probability & Statistics
              <br />
              Intro to Industrial Design
              <br />
              Computer Graphics
              <br />
              Junior Design (First Semester) <br />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Summer 2021"
              icon={
                <img
                  className="icon"
                  src={require("../assets/images/amazon_logo.jpg")}
                />
              }
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
            >
              <Title order={5}> My Summer Internship: </Title>
              Interned at Amazon with the AWS Cordite team! I worked with a lot
              of internal tooling and learning the AWS suite. My project
              involved processing logs from AWS Cloudwatch by using AWS lambda.{" "}
              <br />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Spring 2021"
              icon={
                <img
                  className="icon"
                  src={require("../assets/images/gt_logo.jpg")}
                />
              }
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
            >
              <Title order={5}> My Spring Semester Classes: </Title>
              Intro to Artificial Intelligence
              <br />
              Objects and Design
              <br />
              Physics II
              <br />
              Blockchain & Cryptocurrencies <br />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Fall 2020"
              icon={
                <img
                  className="icon"
                  src={require("../assets/images/gt_logo.jpg")}
                />
              }
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
            >
              This is my first semester at Georgia Tech!
              <Title order={5}> My Fall Semester Classes: </Title>
              Data Structures
              <br />
              Foundations of Math Proofs
              <br />
              Combinatorics
              <br />
              Linear Algebra II <br />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Summer 2020"
              icon={
                <img
                  className="icon"
                  src={require("../assets/images/aflac_logo.png")}
                />
              }
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
            >
              <Title order={5}> My Summer Internship: </Title>
              My first internship was at Aflac. I first learned about the
              development pipeline here. Learning about how environments are
              setup, best practicies, and AGILE development has been very
              important for me. My work involved a lot of automated testing and
              validation for insurance rates.
              <Title order={5}> My Summer Classes: </Title>
              Computing Ethics and Society <br />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Spring 2020"
              icon={
                <img
                  className="icon"
                  src={require("../assets/images/uga_logo.jpg")}
                />
              }
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
            >
              <Title order={5}> My Spring Semester Classes: </Title>
              Data Structures <br />
              Computer Architecture <br />
              Multivariable Calculus <br />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Fall 2019"
              icon={
                <img
                  className="icon"
                  src={require("../assets/images/uga_logo.jpg")}
                />
              }
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
            >
              <Title order={5}> My Fall Semester Classes: </Title>
              Systems Programming <br />
              Differential Equations <br />
              Linear Algebra <br />
              Honors American Government <br />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Summer 2019"
              icon={
                <img
                  className="icon"
                  src={require("../assets/images/ksu_logo.png")}
                />
              }
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
            >
              Took a class as a transient student at Kennesaw State University!
              <Title order={5}> My Summer Semester Classes: </Title>
              English Composition II <br />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Spring 2019"
              icon={
                <img
                  className="icon"
                  src={require("../assets/images/uga_logo.jpg")}
                />
              }
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
            >
              <Title order={5}>My Spring Semester Classes:</Title>
              Honors Biology <br />
              Software Development <br />
              Intro the the Theory of Computing <br />
              English Composition <br />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Fall 2018"
              icon={
                <img
                  className="icon"
                  src={require("../assets/images/uga_logo.jpg")}
                />
              }
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
            >
              College! <br />
              Started my education at The University of Georgia... Go Dawgs!
              <Title order={5}>My Fall Semester Classes:</Title>
              Astronomy of the Solar System <br />
              Intro to Programming <br />
              Discrete Math <br />
              Intro to Cinema <br />
            </VerticalTimelineElement>
          </VerticalTimeline>
          <div className="box-fill"> </div>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Timeline;
