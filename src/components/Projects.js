
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from './Navbar'
import ProjectCard from "./ProjectCards";
import budgetTracker from "./images/budget-tracker.png";
import bookSearch from "./images/Book-search.png";
import kitchenForager from "./images/kitchenForager.png";
import adventureTime from "./images/adventure-time.png";
import techBlog from "./images/Tech-Blog.png";
import workoutTracker from "./images/workout-tracker.png";
import ParticlesBg from 'particles-bg'


function Projects() {
  return (
    <>
    <Navbar/>
    <ParticlesBg color="#008b8b" num={200} type="cobweb" bg={true} />
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
           <strong style={{background: '#008b8b'}}>My Recent Works </strong>
        </h1>
        <p style={{ fontFamily: 'Monospace', fontSize: 20, color: '#607d8b', fontWeight: 'bold' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adventureTime}
              isBlog={false}
              title="Adventure-Time"
              description="The time has come to go out and explore all of the beautiful open spaces this country has to offer. When using Adventure Time you can earn badges by visiting outdoor spaces and comment on friends adventure."
              link="https://adventure-time-with-friends.herokuapp.com/"
                       />
            
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budgetTracker}
              isBlog={false}
              title="budget-tracker"
              description="This is an application to keep track of your finances online or offline. You are able to add a deposit or a withdraw and then a graph will be generated. This app is intended to help you keep track you spending online and offline."
              link="https://budgettracken.herokuapp.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kitchenForager}
              isBlog={false}
              title="kitchenForager"
              description="Ever wonder what you can make with the food you have at home without going to the store? Well, have we got an app for you!! With the Kitchen Forager app you can input available ingredients from your home to see what recipes are out there. If you find recipes you like you can save them for future use. We want to help you save money and cook from home!"
              link="https://kitchenforager.herokuapp.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={workoutTracker}
              isBlog={false}
              title="workout-tracker"
              description="This is an application to keep track of your workouts either cardio or resistance. You are able to input your workout name, duration, weight, reps, sets, distance depending on what type of workout you are inputing. Once your workout has been input you can see the last workout you inputed and on the dashboard page you are able to see a graph displaying the duration, date and total weight you lifted or total time you worked out."
              link="https://workout-tracken.herokuapp.com/?id=61357a31c62a1a00163b7ae6"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techBlog}
              isBlog={false}
              title="Tech-Blog"
              description="This an application used to log about tech. You are able to create, edit and delete your post. You can comment on others post."
              link="https://landon-tech-blog.herokuapp.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookSearch}
              isBlog={false}
              title="Book-search"
              description="This application helps users search for books and then save that book for later. When you are on the run or don’t have enough time to stop by the library this app will be helpful to you. Start searching books and grow you read list today."
              link="https://booksearchmern.herokuapp.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
    </>
  );
}

export default Projects;