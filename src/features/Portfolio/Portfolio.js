import React from 'react'
import './Portfolio.css'

import GitHubCalendar from 'react-github-calendar'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../AppSlice'

import { FaExternalLinkAlt } from 'react-icons/fa'

import grahamAndMaddyV2 from '../../images/grahamandmaddyV3.jpeg'
import waterfrontOfficialV2 from '../../images/waterfrontofficialV3.png'
import pokedexLaptop from '../../images/pokedex.png'
// import inspirationalHomepage from '../../images/homepage.png'
// import redditMinimal from '../../images/redditMinimal.png'
import monopolymoney from '../../images/monopolymoney.png'
import catan from '../../images/catan.png'
import film from '../../images/film-catalog.png'

const Portfolio = () => {

  
  const theme = useSelector(selectTheme)

  // const selectLastHalfYear = contributions => {
  //     const currentYear = new Date().getFullYear();
  //     const currentMonth = new Date().getMonth();
  //     const shownMonths = 6;
    
  //     return contributions.filter(day => {
  //       const date = new Date(day.date);
  //       const monthOfDay = date.getMonth();
    
  //       return (
  //         date.getFullYear() === currentYear &&
  //         monthOfDay > currentMonth - shownMonths &&
  //         monthOfDay <= currentMonth
  //       );
  //     });
  //   };

    const projects = [
      {
          title: "Film Catalog",
          description: 'This platform is a place for users to keep notes of photos they\'ve taken on film and record the camera settings used for each shot. I was looking for this type of solution and could not find one so I built one myself! Firebase is used for the authentication and database. Users can track multiple cameras with multiple rolls of film.',
          src: film,
          liveLink: "https://film.grahamjantz.com/",
      },
      {
          title: "Monopoly Money",
          description: 'This web app was built as a solution to a problem I had: unorganized Monopoly money! This app uses React and a firestore database to allow players to disregard the paper Monopoly money and keep track of bank accounts, property value, and net worth all within the app. Players can either host or join a room and control their money from their own device. Players will get real time updates from the database in order to collect or spend money and keep track of who is winning!',
          src: monopolymoney,
          liveLink: "https://monopoly-money-60c8d.web.app/",
          repoLink: "https://github.com/grahamjantz/monopoly-money-v2.1",
      },
      {
        title: 'Catan Calculator',
        description: 'Catan Calculator is designed to replace the need for the provided Catan resource cards. The calculator can be used with either the base game or the Cities & Knights expansion. To begin either host or join a room, you can set the victory points needed to win, then enter player info and use the calculator to collect and spend resources while playing Catan! Players will get real time updates on their inventory and who is currently in the lead with victory points.',
        src: catan,
        liveLink: 'https://catan.grahamjantz.com',
        repoLink: 'https://github.com/grahamjantz/catan'
      },
      {
          title: "Waterfront Band Website",
          description: 'This website was built using React for the band Waterfront. This website is intended to be a landing page for fans to get information about the band such as new music, press releases, and more.',
          src: waterfrontOfficialV2,
          liveLink: "https://waterfrontofficial.com",
          repoLink: "https://github.com/grahamjantz/waterfrontofficial-clone",
      },
      {
          title: "G&M Wedding",
          description: 'I originally built this site using simple HTML, CSS, and JavaScript, I have since fully rebuilt the site using React. This was due to long load times between pages. By utilizing React Router I was able to only re-render the information on each page without reloading the entire site, making it much faster and more efficient.',
          src: grahamAndMaddyV2,
          liveLink: "https://gm.grahamjantz.com",
          repoLink: "https://github.com/grahamandmaddy/grahamandmaddy.github.io",
      },
      {
          title: "PokeDex",
          description: 'This project was created as a way to practice working with the fetch API and the PokeAPI. I initially followed a tutorial which can be found at the GitHub repo. I then built upon this foundation adding the button functionality, all the styling and the photo carousel for the pokemon. I completely rebuilt the app without relying on the tutorial, in order to reinforce what I learnt.',
          src: pokedexLaptop,
          liveLink: "https://pokedex.grahamjantz.com",
          repoLink: "https://github.com/grahamjantz/pokedex",
      },
      // {
      //     title: "Inspirational Homepage",
      //     description: 'Created as a final project in a Codecademy course, this app is built with React and Redux. The global state managed by Redux contains four main slices, three of which use asynchronous thunks to fetch data from the following API\'s: OpenWeather API, Pexels API, and QuoteOfTheDay API. This project allowed me to gain an in depth knowledge of Redux, using slices, and dispatching actions.',
      //     src: inspirationalHomepage,
      //     liveLink: "https://inspirational-homepage.grahamjantz.com/",
      //     repoLink: "https://github.com/grahamjantz/inspirational-homepage",
      // },
      // {
      //     title: "Reddit Minimal",
      //     description: 'Reddit Minimal was built as the capstone project in the Front End Development unit of Codecademy\'s Full Stack Development Career Path. The site is built in React and uses Redux to manage the state of posts fetched using the Reddit JSON API. Users can select and view posts from certain subreddits, search for posts, view comments, and are shown a modal view of posts when clicking on the title of each post.',
      //     src: redditMinimal,
      //     liveLink: "https://reddit.grahamjantz.com/",
      //     repoLink: "https://github.com/grahamjantz/reddit-minimal",
      // },
    ]

    const projectStyle = {
      backgroundColor: theme.glass
    }

    const square1Style = {
      backgroundColor: theme.square1
    }
  
    const square2Style = {
      // backgroundColor: theme.square2,
      background: `linear-gradient(to bottom right, transparent 50%, ${theme.square2} 50%)`
    }

    const aStyle = {
      color: theme.color
    }

  return (
    <div className='portfolio' name='portfolio'>
      <div className='project-square1' style={square1Style}></div>
        <div className='project-square2-container'>
          <span style={square2Style}></span>
          <span style={square2Style}></span>
        </div>
        <h2>Portfolio</h2>
        <GitHubCalendar 
        username='grahamjantz'
        // This transform data function is selecting only the last six months of contributions from GitHub as there is no activity before that. As the year progesses this can be deleted so that an entire year is shown
        // transformData={selectLastHalfYear}
        hideColorLegend
        color={theme.square2}
        style={{
          padding: '2em',
          textAlign: 'center',
          maxWidth: '300px'
        }}
      />
      <div className='projects'>
      <div className='project' style={projectStyle} key={projects[0].title}>
                  <h2>{projects[0].title}</h2>
                  <img src={projects[0].src} alt='project' style={{width: 'auto', maxHeight: '300px'}}/>
                  <div className='project-buttons' style={{justifyContent: 'center'}}>
                      <button>
                        <a href={projects[0].liveLink} rel="noreferrer" target='_blank' style={aStyle}>Live Link<FaExternalLinkAlt /></a>
                      </button>
                  </div>
                  <p>{projects[0].description}</p>
              </div>
        {projects.map((project) => {
          if (project.title !== 'Film Catalog') {
            return (
                <div className='project' style={projectStyle} key={project.title}>
                    <h2>{project.title}</h2>
                    <img src={project.src} alt='project'/>
                    <div className='project-buttons'>
                        <button>
                          <a href={project.liveLink} rel="noreferrer" target='_blank' style={aStyle}>Live Link<FaExternalLinkAlt /></a>
                        </button>
                        <button>
                          <a href={project.repoLink} rel="noreferrer" target='_blank' style={aStyle}>Repo Link<FaExternalLinkAlt /></a>
                        </button>
                    </div>
                    <p>{project.description}</p>
                </div>
            )
          } else {
            return ''
          }
        })}
      </div>
    </div>
  )
}

export default Portfolio