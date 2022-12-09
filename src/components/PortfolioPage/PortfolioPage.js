import React from 'react'
import './PortfolioPage.css'
import styled from '@emotion/styled'
import GitHubCalendar from 'react-github-calendar'

import Project from '../Project/Project'

import grahamAndMaddyV2 from '../../images/grahamandmaddyV3.png'
import waterfrontOfficialV2 from '../../images/waterfrontofficialV3.png'
import pokedexLaptop from '../../images/pokedex.png'
import inspirationalHomepage from '../../images/homepage.png'
import redditMinimal from '../../images/redditMinimal.png'
import monopolymoney from '../../images/monopolymoney.png'

const Portfolio = ({ className, themeColor, themeBoxShadow1, themeBoxShadow2, themeBluRec, themeOrgSqu }) => {
  const StyledProjects = styled.span`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 80%;
    height: fit-content;
    margin: 0 auto;
    align-items: center;
    gap: 10em;
    text-align: center;

    @media only screen and (min-width: 1200px) {
      gap: 5em;
    }

    @media only screen and (max-width: 800px) {
      gap: 0;
    }
  `;
  
  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;
  
    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <div className={`${className} portfolio`} id="portfolio">
      <h2 style={{ paddingTop: '5em' }}>Portfolio</h2>
      <h3 style={{ margin: '2em 0' }}>Recent Commits: </h3>
      <a href='https://github.com/grahamjantz' target='_blank' style={{color: themeColor}} rel="noreferrer">
      <GitHubCalendar 
        username='grahamjantz'
        // This transform data function is selecting only the last six months of contributions from GitHub as there is no activity before that. As the year progesses this can be deleted so that an entire year is shown
        transformData={selectLastHalfYear}
        hideColorLegend
        color={themeBluRec}
        style={{
          padding: '2em',
          textAlign: 'center',
        }}
      />
      </a>
      <StyledProjects>
        <Project 
          title='Monopoly Money Tracker Web App'
          description={`This web app was built as a solution to a problem I had: unorganized Monopoly money! This app uses React and Redux to allow players to disregard the paper Monopoly money and keep track of bank accounts, property value, and net worth all within the app.`}
          src={monopolymoney}
          target="_blank"
          liveLink="https://monopoly-money.netlify.app"
          repoLink="https://github.com/grahamjantz/monopoly-money"
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}
          themeBluRec={themeBluRec}
          themeOrgSqu={themeOrgSqu}
        />
        <Project 
          title='Waterfront Official Band Website'
          description={`This website was built using React for the band Waterfront. This website is intended to be a landing page for fans to get information about the band such as new music, press releases, and more.`}
          src={waterfrontOfficialV2}
          target="_blank"
          liveLink="https://waterfrontofficial.com"
          repoLink="https://github.com/grahamjantz/waterfrontofficial-clone"
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}
          themeBluRec={themeBluRec}
          themeOrgSqu={themeOrgSqu}
        />
        <Project 
          title='G&M Wedding Website'
          description="I originally built this site using simple HTML, CSS, and JavaScript, I have since fully rebuilt the site using React. This was due to long load times between pages. By utilizing React Router I was able to only rerender the information on each page without reloading the entire site, making it much faster and more efficient."
          src={grahamAndMaddyV2}
          liveLink="https://grahamandmaddy.com"
          repoLink="https://github.com/grahamandmaddy/grahamandmaddy.github.io"
          target="_blank"
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}
          themeBluRec={themeBluRec}
          themeOrgSqu={themeOrgSqu}
        />
        <Project 
          title='PokeDex'
          description={`This project was created as a way to practice working with the fetch API and the PokeAPI. I initially followed a tutorial which can be found at the GitHub repo. I then built upon this foundation adding the button functionality, all the styling and the photo carousel for the pokemon. I completely rebuilt the app without relying on the tutorial, in order to reinforce what I learnt.`}
          src={pokedexLaptop}
          liveLink="https://grahamjantz-pokedex.netlify.app/"
          repoLink="https://github.com/grahamjantz/pokedex"
          target="_blank"
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}
          themeBluRec={themeBluRec}
          themeOrgSqu={themeOrgSqu}
        />
        <Project 
          title='Inspirational Homepage'
          description={`Created as a final project in a Codecademy course this app is built with React and Redux. The global state managed by Redux contains four main slices, three of which use asynchronous thunks to fetch data from the following API's: OpenWeather API, Pexels API, and QuoteOfTheDay API. This project allowed me to gain an in depth knowledge of Redux, using slices, and dispatching actions.`}
          src={inspirationalHomepage}
          liveLink="https://gj-inspirational-homepage.netlify.app"
          repoLink="https://github.com/grahamjantz/inspirational-homepage"
          target="_blank"
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}
          themeBluRec={themeBluRec}
          themeOrgSqu={themeOrgSqu}
        />
        <Project 
          title='Reddit Minimal'
          description={`Reddit Minimal was built as the capstone project in the Front End Development unit of Codecademy's Full Stack Development Career Path. The site is built in React and uses Redux to manage the state of posts fetched using the Reddit JSON API. Users can select and view posts from certain subreddits, search for posts, view comments, and are shown a modal view of posts when clicking on the title of each post.`}
          src={redditMinimal}
          liveLink="https://gj-reddit-minimal.netlify.app/"
          repoLink="https://github.com/grahamjantz/reddit-minimal"
          target="_blank"
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}
          themeBluRec={themeBluRec}
          themeOrgSqu={themeOrgSqu}
        />
      </StyledProjects>
    </div>
  )
}

export default Portfolio