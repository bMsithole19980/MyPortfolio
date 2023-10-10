import React, { useEffect } from "react";
import "./Project.css";

const projects = [
  {
    id: 1,
    title: "HotelApp",
    description:
      "My Hotel Booking and Management App is a user-friendly digital platform designed to streamline the hotel experience for travelers while improving hotel operations. It allows users to effortlessly browse, book, and personalize their stays, all while prioritizing safety through contactless check-in. The app also offers in-room services, local recommendations, and real-time updates, enhancing the overall guest experience. As a full-stack developer, I took a hands-on approach in crafting this solution, combining intuitive design with advanced technology to transform how guests interact with hotels, making their stays more convenient and memorable.",
    image: "project1.jpg",
    tags: ["React", "Node.js", "Figma", "Boostrap"],
    demoLink: "https://example.com/demo1",
    repoLink: "https://github.com/bMsithole19980/hotelApp.git",
  },
  {
    id: 2,
    title: "NewsApp",
    description:
      "My Hotel Booking and Management App is a user-friendly digital platform designed to streamline the hotel experience for travelers while improving hotel operations. It allows users to effortlessly browse, book, and personalize their stays, all while prioritizing safety through contactless check-in. The app also offers in-room services, local recommendations, and real-time updates, enhancing the overall guest experience. As a full-stack developer, I took a hands-on approach in crafting this solution, combining intuitive design with advanced technology to transform how guests interact with hotels, making their stays more convenient and memorable.",
    image: "project1.jpg",
    tags: ["React", "NewsApi", "Axios", "Boostrap"],
    demoLink: "https://example.com/demo1",
    repoLink: "https://github.com/bMsithole19980/NewsApp.git",
  },
  {
    id: 3,
    title: "WeatherApp",
    description:
      "My Hotel Booking and Management App is a user-friendly digital platform designed to streamline the hotel experience for travelers while improving hotel operations. It allows users to effortlessly browse, book, and personalize their stays, all while prioritizing safety through contactless check-in. The app also offers in-room services, local recommendations, and real-time updates, enhancing the overall guest experience. As a full-stack developer, I took a hands-on approach in crafting this solution, combining intuitive design with advanced technology to transform how guests interact with hotels, making their stays more convenient and memorable.",
    image: "project1.jpg",
    tags: ["React", "WeatherApi", "Axios", "Boostrap"],
    demoLink: "https://example.com/demo1",
    repoLink: "https://github.com/bMsithole19980/weather-app.git",
  },
  {
    id: 4,
    title: "ImageGallery App",
    description:
      "My Hotel Booking and Management App is a user-friendly digital platform designed to streamline the hotel experience for travelers while improving hotel operations. It allows users to effortlessly browse, book, and personalize their stays, all while prioritizing safety through contactless check-in. The app also offers in-room services, local recommendations, and real-time updates, enhancing the overall guest experience. As a full-stack developer, I took a hands-on approach in crafting this solution, combining intuitive design with advanced technology to transform how guests interact with hotels, making their stays more convenient and memorable.",
    image: "project1.jpg",
    tags: ["React Native", "Node.js", "Firebase", "Boostrap"],
    demoLink: "https://example.com/demo1",
    repoLink: "https://github.com/bMsithole19980/ImageGallery.git",
  },
  {
    id: 5,
    title: "BirthdayCard App",
    description:
      "My Hotel Booking and Management App is a user-friendly digital platform designed to streamline the hotel experience for travelers while improving hotel operations. It allows users to effortlessly browse, book, and personalize their stays, all while prioritizing safety through contactless check-in. The app also offers in-room services, local recommendations, and real-time updates, enhancing the overall guest experience. As a full-stack developer, I took a hands-on approach in crafting this solution, combining intuitive design with advanced technology to transform how guests interact with hotels, making their stays more convenient and memorable.",
    image: "project1.jpg",
    tags: ["React Native", "Node.js", "Firebase", "Boostrap"],
    demoLink: "https://example.com/demo1",
    repoLink: "https://github.com/bMsithole19980/BithdayCardApp.git",
  },
  {
    id: 6,
    title: "VoiceJournal App",
    description:
      "My Hotel Booking and Management App is a user-friendly digital platform designed to streamline the hotel experience for travelers while improving hotel operations. It allows users to effortlessly browse, book, and personalize their stays, all while prioritizing safety through contactless check-in. The app also offers in-room services, local recommendations, and real-time updates, enhancing the overall guest experience. As a full-stack developer, I took a hands-on approach in crafting this solution, combining intuitive design with advanced technology to transform how guests interact with hotels, making their stays more convenient and memorable.",
    image: "project1.jpg",
    tags: ["React Native", "Boostrap-", "Firebase"],
    demoLink: "https://example.com/demo1",
    repoLink: "https://github.com/bMsithole19980/VoiceJournalApp.git",
  },
  {
    id: 7,
    title: "Realiable Locks App",
    description:
      "My Hotel Booking and Management App is a user-friendly digital platform designed to streamline the hotel experience for travelers while improving hotel operations. It allows users to effortlessly browse, book, and personalize their stays, all while prioritizing safety through contactless check-in. The app also offers in-room services, local recommendations, and real-time updates, enhancing the overall guest experience. As a full-stack developer, I took a hands-on approach in crafting this solution, combining intuitive design with advanced technology to transform how guests interact with hotels, making their stays more convenient and memorable.",
    image: "project1.jpg",
    tags: ["React", "Node.js", "Firebase", "Boostrap"],
    demoLink: "https://example.com/demo1",
    repoLink: "https://github.com/bMsithole19980/user-profile.git",
  },
  {
    id: 8,
    title: "Country Search App",
    description:
      "My Hotel Booking and Management App is a user-friendly digital platform designed to streamline the hotel experience for travelers while improving hotel operations. It allows users to effortlessly browse, book, and personalize their stays, all while prioritizing safety through contactless check-in. The app also offers in-room services, local recommendations, and real-time updates, enhancing the overall guest experience. As a full-stack developer, I took a hands-on approach in crafting this solution, combining intuitive design with advanced technology to transform how guests interact with hotels, making their stays more convenient and memorable.",
    image: "project1.jpg",
    tags: ["React", "Node.js", "Firebase", "Boostrap"],
    demoLink: "https://example.com/demo1",
    repoLink: "https://github.com/bMsithole19980/weather-search-app.git",
  },
  {
    id: 9,
    title: "Expense Tracker",
    description:
      "My Hotel Booking and Management App is a user-friendly digital platform designed to streamline the hotel experience for travelers while improving hotel operations. It allows users to effortlessly browse, book, and personalize their stays, all while prioritizing safety through contactless check-in. The app also offers in-room services, local recommendations, and real-time updates, enhancing the overall guest experience. As a full-stack developer, I took a hands-on approach in crafting this solution, combining intuitive design with advanced technology to transform how guests interact with hotels, making their stays more convenient and memorable.",
    image: "project1.jpg",
    tags: ["React", "Node.js", "Firebase", "Boostrap"],
    demoLink: "https://example.com/demo1",
    repoLink: "https://github.com/bMsithole19980/react-expense-tracker.git",
  }

  // Add more project data...
];

export default function Projects() {
  useEffect(() => {
    const animatedText = document.getElementById("animatedText");
    const letters = animatedText.innerText.split("");
    animatedText.innerText = "";

    letters.forEach((letter, index) => {
      const span = document.createElement("span");
      span.innerText = letter;
      span.style.animationDelay = `${index * 2}s`;
      animatedText.appendChild(span);
    });
  }, []);

  return (
    <div className="Container" id="projects">
      <h1 className="Head" id="animatedText">
        {" "}
        Projects
      </h1>
      <div className="project-list">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <h2 className="title">{project.title}</h2>
            <p className="description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
