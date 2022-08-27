import {useState} from 'react'
import './App.css'
import styled from '@emotion/styled'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage';
import PortfolioPage from './components/PortfolioPage/PortfolioPage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage/ContactPage';

function App() {
  const [page, setPage] = useState(<HomePage />);
  const [appBackground, setAppBackground] = useState('#e0e0e0')

  const StyledApp = styled.span`
    background-color: ${appBackground};
  `;

  const changeTheme = () => {
    if (appBackground === '#e0e0e0') {
      setAppBackground('#050505')
    } else if (appBackground === '#050505') {
      setAppBackground('#e0e0e0')
    }
  }

  const renderHomePage = () => {
    setPage(<HomePage 
                renderHomePage={renderHomePage}
                renderPortfolioPage={renderPortfolioPage}
                renderAboutPage={renderAboutPage}
                renderContactPage={renderContactPage}/>)
  }
  const renderPortfolioPage = () => {
    setPage(<PortfolioPage />)
  }
  const renderAboutPage = () => {
    setPage(<AboutPage />)
  }
  const renderContactPage = () => {
    setPage(<ContactPage />)
  }

  return (
    <StyledApp className='App'>
        <Header 
          renderHomePage={renderHomePage}
          renderPortfolioPage={renderPortfolioPage}
          renderAboutPage={renderAboutPage}
          renderContactPage={renderContactPage}/>
        <Main page={page}/>
        <Footer changeTheme={changeTheme}/>
    </StyledApp>
  );
}

export default App;
