import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Magdalin princy </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />
            I graduated with honors from Annamalai University with a bachelor's degree.
            <br />
            I have worked in the world of analytics and experienced the power of decision sciences by learning the art of problem-solving through incorporating <span className="purple"> math, business, </span> and <span className="purple"> technical skills.</span>
            <br />
            I recently completed a <span className="purple"> MERN Stack Development</span> course to further enhance my technical expertise and broaden my skill set in web development. <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A techie who loves to move"{" "}
          </p>
          <footer className="blockquote-footer">Princy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
