import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function CertificationCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button
          variant="primary"
          href={props.certificateLink}
          target="_blank"
        >
          <CgWebsite /> &nbsp;
          {"View Certificate"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CertificationCard;