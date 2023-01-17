import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jambalsuren Ariunbold </span>
            from <span className="purple"> Bayankhongor, Mongolia </span>
            <br />I am a junior pursuing PINECONE Academy.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          “Learn as if you will live forever, live like you will die tomorrow.”{" "}
          </p>
          <footer className="blockquote-footer">Mahatma Gandhi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
