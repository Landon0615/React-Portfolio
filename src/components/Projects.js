
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import budgetTracker from "./images/budget-tracker.png";
import daySchedular from "./images/day-schedular.png";
import kitchenForager from "./images/kitchenForager.png";
import noteTaker from "./images/Note-Taker.png";
import techBlog from "./images/Tech-Blog.png";
import workoutTracker from "./images/workout-tracker.png";

function Projects() {
  return (
    <>
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
           <strong className="grey">My Recent Works </strong>
        </h1>
        <p style={{ fontFamily: 'Monospace', fontSize: 20, color: '#607d8b', fontWeight: 'bold' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noteTaker}
              isBlog={false}
              title="Note-Taker"
              description="This is an application to let the user create a note, save a note and delete a note."
              link="https://github.com/Landon0615/Note_Taker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budgetTracker}
              isBlog={false}
              title="budget-tracker"
              description="This is an application to keep track of your finances online or offline. You are able to add a deposit or a withdraw and then a graph will be generated. This app is intended to help you keep track you spending online and offline."
              link="https://github.com/Landon0615/BudgetTracker-Offline-Online"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kitchenForager}
              isBlog={false}
              title="kitchenForager"
              description="Ever wonder what you can make with the food you have at home without going to the store? Well, have we got an app for you!! With the Kitchen Forager app you can input available ingredients from your home to see what recipes are out there. If you find recipes you like you can save them for future use. We want to help you save money and cook from home!"
              link="https://github.com/JamesO1231/kitchenForager"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={workoutTracker}
              isBlog={false}
              title="workout-tracker"
              description="This is an application to keep track of your workouts either cardio or resistance. You are able to input your workout name, duration, weight, reps, sets, distance depending on what type of workout you are inputing. Once your workout has been input you can see the last workout you inputed and on the dashboard page you are able to see a graph displaying the duration, date and total weight you lifted or total time you worked out."
              link="https://github.com/Landon0615/Workout-Tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techBlog}
              isBlog={false}
              title="Tech-Blog"
              description="This an application used to log about tech. You are able to create, edit and delete your post. You can comment on others post."
              link="https://github.com/Landon0615/Tech-Blog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={daySchedular}
              isBlog={false}
              title="day-schedular"
              description="This is a daily planner app optimized to help the user plan their day in a more organized fashion. To use this app the user will see if the current timeblock is in the present, past or future. The time blocks are color coded to indicate the current state of time grey color being past, red color being present, green color being future. The user can click on the colored section for each time block and type in a planned even for that time then click the blue save button to the right of the time block. Even when the page is reloaded the saved event will still be present so the user can close and open the application when needed."
              link="https://github.com/Landon0615/Day-Scheduler"
            />
          </Col>
        </Row>
      </Container>
    </Container>
    </>
  );
}

export default Projects;