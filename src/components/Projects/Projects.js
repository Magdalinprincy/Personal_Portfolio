import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import currency from "../../Assets/Projects/currency.png";
import weather from "../../Assets/Projects/weather.png";
import memory from "../../Assets/Projects/memory.png";
import shoppe from "../../Assets/Projects/shoppe.png";
import todo from "../../Assets/Projects/todo.png";
import snake from "../../Assets/Projects/snake.png";
import dispenser from "../../Assets/Projects/dispenser.png";
import b2b from "../../Assets/Projects/b2b.png";
import monitor from "../../Assets/Projects/monitor.png";

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
              imgPath={b2b}
              isBlog={false}
              title="B2B Data Enrichment"
              description="Built a scalable Node.js + Express backend integrated with the Apollo API for automated contact search and enrichment. Implemented asynchronous job scheduling with MongoDB and Redis, and integrated with a Python (Flask) microservice for data enrichment and transformation. Handled large-scale paginated data, OpenAI-based job title generation, and contact data persistence efficiently."
              // ghLink="https://github.com/Magdalinprincy/next-tailwind-amazona"
              // demoLink="https://next-tailwind-amazona-git-master-magdalinprincy.vercel.app/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dispenser}
              isBlog={false}
              title="Monitoring Dashboard"
              description="Built a real-time system to track dispenser performance and maintenance in a paper manufacturing facility. Enabled early issue detection with visual dashboards and automated alerts, improving maintenance response time by 40%."
              // ghLink="https://github.com/Magdalinprincy/next-tailwind-amazona"
              // demoLink="https://next-tailwind-amazona-git-master-magdalinprincy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={monitor}
              isBlog={false}
              title="Compliance Monitoring System"
              description="Assisted a US pharmaceutical company in maintaining compliance and monitoring employee training through automated processes using SAS, ensuring data quality to avoid regulatory penalties."
              // ghLink="https://github.com/Magdalinprincy/next-tailwind-amazona"
              // demoLink="https://next-tailwind-amazona-git-master-magdalinprincy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoppe}
              isBlog={false}
              title="Shoppe"
              description="A modern E-commerce platform built with Next.js 13 and Next Auth 4, designed to deliver a seamless shopping experience. Features include secure authentication, real-time order tracking, and a dynamic user interface powered by Tailwind CSS. Integrated with MongoDB & Mongoose for efficient data management, PayPal for secure transactions, and Cloudinary for optimized content hosting. Deployed on GitHub & Vercel for high performance and scalability."
              ghLink="https://github.com/Magdalinprincy/next-tailwind-amazona"
              demoLink="https://next-tailwind-amazona-git-master-magdalinprincy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Snake Game"
              description="A classic Snake Game built with HTML, CSS, and JavaScript. Navigate the snake using arrow keys to eat food and grow without colliding with walls or yourself. Features include score tracking, pause functionality, and a clean user interface. This simple yet engaging web-based game is perfect for casual play and demonstrates fundamental web development concepts."
              ghLink="https://github.com/Magdalinprincy/Snake"
              demoLink="https://magdalinprincy.github.io/Snake/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memory}
              isBlog={false}
              title="Memory Game"
              description="A simple and engaging Memory Game where players match pairs of cards with hidden icons. Built with HTML, CSS, and JavaScript, this browser-based game features smooth flip animations, randomized card placement, and responsive design. Test your memory skills by finding all matching pairs!"
              ghLink="https://github.com/Magdalinprincy/Memory-Game"
              demoLink="https://magdalinprincy.github.io/Memory-Game/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currency}
              isBlog={false}
              title="Currency Converter"
              description="A lightweight, web-based Currency Converter that provides real-time exchange rates between international currencies. Built with HTML, CSS, and JavaScript, this application integrates with the Frankfurter API to deliver up-to-date conversion rates through a clean, intuitive interface. Perfect for travelers, business professionals, or anyone needing quick currency conversions."
              ghLink="https://github.com/Magdalinprincy/Currency-Converter"
              demoLink="https://magdalinprincy.github.io/Currency-Converter/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To Do"
              description="A lightweight, browser-based To-Do List application that helps you manage your daily tasks efficiently. Built with HTML, CSS, and JavaScript, this app allows you to add tasks, mark them as completed, and remove them with simple clicks. Your tasks are automatically saved in the browser's local storage, so they remain accessible even after you close or refresh the page."
              ghLink="https://github.com/Magdalinprincy/todo"
              demoLink="https://magdalinprincy.github.io/todo/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="A sleek, user-friendly Weather App built with React that provides real-time weather information for any city worldwide. Leveraging the OpenWeatherMap API, this responsive application displays key weather metrics including temperature, humidity, wind speed, and precise coordinates. Simply search for your desired location to instantly access current weather conditions with visual weather icons for enhanced readability."
              ghLink="https://github.com/Magdalinprincy/weather"
              // demoLink="https://magdalinprincy.github.io/weather/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
