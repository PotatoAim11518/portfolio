import React from 'react';
import ProjectCard from './projectCard';
import styles from './projects.module.css';

import potatoExchange from '../../assets/potatoexchange.png';
import catsy from '../../assets/catsy.png';
import linkshell from '../../assets/linkshell.png';

const Projects = () => {

  return (
    <div className={styles.projectsWrapper}>
      <ProjectCard
        imageUrl={catsy}
        name={"Catsy"}
        description={"Catsy is a cat adoption app styled after a combination of Etsy and Petfinder."}
        technologies={"JavaScript, Python, React.js, Redux, Flask, SLQAlchemy, postgreSQL, HTML, CSS, Petfinder API, Heroku"}
        liveSite={"https://catsyapp.herokuapp.com/"}
        gitHub={"https://github.com/commanderh/catsy"}
      />
      <ProjectCard
        imageUrl={potatoExchange}
        name={"Potato Exchange"}
        description={"Potato Exchange is a platform for users to be able to host small, personal meet-and-greets with guests."}
        technologies={"JavaScript, Python, React.js, Redux, Flask, Socket.IO, SLQAlchemy, postgreSQL, HTML, CSS, Heroku"}
        liveSite={"https://potatoexchange.herokuapp.com/"}
        gitHub={"https://github.com/PotatoAim11518/potato_exchange"}
      />
      <ProjectCard
        imageUrl={linkshell}
        name={"Linkshell"}
        description={"Linkshell is a Meetup clone for players of the popular MMORPG Final Fantasy: XIV to form groups and host activities."}
        technologies={"JavaScript, Express.js, React.js, Redux, Sequelize, postgreSQL, HTML, CSS, react-calendar, Heroku"}
        liveSite={"https://linkshell.herokuapp.com/"}
        gitHub={"https://github.com/PotatoAim11518/linkshell-app"}
      />
    </div>
  )
}

export default Projects;
