import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://res.cloudinary.com/ddkj8wsjy/image/upload/v1684157735/Screenshot_253_ouiibl.png"}
              isBlog={false}
              title="MORTBUY E-commerce PlatForm"
              description="Full featured shopping cart User profile with orders Admin product management Admin user management Admin Order details page Mark orders as delivered option Checkout process (shipping, payment method, etc) Database seeder (products & users)"
              ghLink="https://github.com/AryanBarsaiyan/MORTOBUY"
              demoLink="https://mortobuy.onrender.com/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://res.cloudinary.com/ddkj8wsjy/image/upload/v1684157966/Screenshot_261_wpfkdw.png"}
              isBlog={false}
              title="Treasure-Hunt"
              description="Our puzzle is simple yet challenging, and it involves finding hidden clues and treasures by following a trail of clues. Each clue will lead you to the next one, and the final clue will lead you to the treasure. The clues can be in the form of simple text, videos, 3D animations, games, links, or anything else that you have to find or solve. We have designed the clues to test specific soft skills, and by solving each one, you will demonstrate your proficiency in that particular skill."
              ghLink="https://github.com/AryanBarsaiyan/TreasureHunt"
              demoLink="https://treasurehunt-npui.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://res.cloudinary.com/ddkj8wsjy/image/upload/v1684158302/Screenshot_262_bduhvb.png"}
              isBlog={false}
              title="Portfolio Website"
              description="This website is developed by using HTML, CSS, JavaScript, and Bootstrap"
              ghLink="https://github.com/AryanBarsaiyan/Resume-Project"
              demoLink="https://aryanbarsaiyan.github.io/"
            />
          </Col>
          {/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://res.cloudinary.com/dsxyzdqvo/image/upload/v1678454607/RNews-Home_ollbga.png"}
              isBlog={false}
              title="RNews- Daily Live News"
              description="This is a News website designed using html,css and ReactJs.The frontend part of this project is developed by ReactJs. Implemented News API which Provides the news content to the website.
              Implemented infinite scrolling in the app.
              Implemented React Router for routing.
              To read the full news content it redirects to the original news provider's site."
              ghLink="https://github.com/Abhisheksabhi33/RNews-Daily-Live-News-2.0"
              demoLink="https://res.cloudinary.com/dsxyzdqvo/video/upload/v1678466378/Untitled_video_-_Made_with_Clipchamp_1_q9e6lh.mp4"              
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
