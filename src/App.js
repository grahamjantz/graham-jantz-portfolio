import {useState} from 'react'
import './App.css'
import './components/Main/Main.css'
import styled from '@emotion/styled'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage';
import PortfolioPage from './components/PortfolioPage/PortfolioPage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage/ContactPage';
import { lightTheme, darkTheme } from './themes'

function App() {
  const [appBackground, setAppBackground] = useState(lightTheme.body)
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    console.log(theme)

    if (theme === lightTheme) {
      setTheme(darkTheme)
    } else if (theme === darkTheme){
      setTheme(lightTheme)
    }

    console.log(theme)
  }

  const StyledApp = styled.span`
  background-color: ${theme.body};
  color: ${theme.color};
  `;

  const changeTheme = () => {
    if (appBackground === lightTheme.body) {
      setAppBackground(darkTheme.body)
    } else if (appBackground === darkTheme.body) {
      setAppBackground(lightTheme.body)
    }
  }

  return (
    <StyledApp className='App'>
        <Header 
          toggleTheme={toggleTheme} 
          changeTheme={changeTheme}
          themeColor={theme.color}
          themeBody={theme.body}
          themeBoxShadow1={theme.boxShadow1}
          themeBoxShadow2={theme.boxShadow2}
          switchButtonPosition={theme.switchButtonPosition}
          />
        {/* <Main page={page}/> */}
        <div className='org-squ-container'>
          <div className='org-square'></div>
        </div>
        <div className='blu-rec-container'>
          <div className='blu-rectangle'></div>
        </div>
        <div className='blu-rec-container2'>
          <div className='blu-rectangle2'></div>
        </div>
        <HomePage className='comp' />
        <AboutPage className='comp' />
        <PortfolioPage 
          className='comp' 
          themeColor={theme.color}
          themeBoxShadow1={theme.boxShadow1}
          themeBoxShadow2={theme.boxShadow2}/>
        <ContactPage className='comp' />
        <Footer className='comp' />
    </StyledApp>
  );
}

export default App;
