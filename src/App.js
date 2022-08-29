import {useState} from 'react'
import './App.css'
import styled from '@emotion/styled'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage';
import PortfolioPage from './components/PortfolioPage/PortfolioPage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage/ContactPage';
import { lightTheme, darkTheme } from './themes'

function App() {
  // const renderHomePage = () => {
  //   setPage(<HomePage 
  //               renderHomePage={renderHomePage}
  //               renderPortfolioPage={renderPortfolioPage}
  //               renderAboutPage={renderAboutPage}
  //               renderContactPage={renderContactPage}/>)
  // }
  // const renderPortfolioPage = () => {
  //   setPage(<PortfolioPage />)
  // }
  // const renderAboutPage = () => {
  //   setPage(<AboutPage />)
  // }
  // const renderContactPage = () => {
  //   setPage(<ContactPage />)
  // }
  // const [page, setPage] = useState(<HomePage
  //                                     renderHomePage={renderHomePage}
  //                                     renderPortfolioPage={renderPortfolioPage}
  //                                     renderAboutPage={renderAboutPage}
  //                                     renderContactPage={renderContactPage} />);
  const [appBackground, setAppBackground] = useState(lightTheme.body)
  // const [appColor, setAppColor] = useState(lightTheme.color);
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
      // setAppColor(darkTheme.color)
    } else if (appBackground === darkTheme.body) {
      setAppBackground(lightTheme.body)
      // setAppColor(lightTheme.color)
    }
  }

  return (
    <StyledApp className='App'>
        <Header 
          // renderHomePage={renderHomePage}
          // renderPortfolioPage={renderPortfolioPage}
          // renderAboutPage={renderAboutPage}
          // renderContactPage={renderContactPage}
          toggleTheme={toggleTheme} 
          changeTheme={changeTheme}
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
        <PortfolioPage className='comp' />
        <ContactPage className='comp' />
        <Footer className='comp' />
    </StyledApp>
  );
}

export default App;
