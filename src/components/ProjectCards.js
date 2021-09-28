
import React from "react";
import Card from "react-bootstrap/Card";
import {  Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

function ProjectCards(props) {
  return (
    <Col>
    
    <Card className="project-card-view transparentHover" style={{ width: '25rem', background: '#008b8b' }} >
      <Card.Img  src={props.imgPath} alt="card-img" style={{ width: '25rem', background: '#008b8b' }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button style={{color: "#6200ea", fontSize: '15px'}} variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
        <Button>
        <AiFillGithub   style={{color: "#6200ea", fontSize: '30px'}} href={props.link} />
        </Button>
      </Card.Body>
    </Card>

    </Col>
  );
}
export default ProjectCards;