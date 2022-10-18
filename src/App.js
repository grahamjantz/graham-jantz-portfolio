import {useState} from 'react'
import './App.css'
import styled from '@emotion/styled'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage';
import PortfolioPage from './components/PortfolioPage/PortfolioPage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage/ContactPage';
import Shapes from './components/Shapes/Shapes'
import { lightTheme, darkTheme } from './themes'

const root = document.getElementById('root');


function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [switchClass, setSwitchClass] = useState('inactive');
  const [slide, setSlide] = useState('0px');
  
  const toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme)
      setSwitchClass('active');
      setSlide('32px');
    } else if (theme === darkTheme){
      setTheme(lightTheme)
      setSwitchClass('inactive');
      setSlide('0px');
    }
  }
  root.style.backgroundColor = theme.body;

  // background-color: ${theme.body};
  const StyledApp = styled.span`
  color: ${theme.color};
  `;


  return (
    <>    
      <Shapes theme={theme}/>
      <StyledApp className='App'>
          <Header 
            toggleTheme={toggleTheme} 
            themeColor={theme.color}
            themeBody={theme.body}
            themeBoxShadow1={theme.boxShadow1}
            themeBoxShadow2={theme.boxShadow2}
            themeBoxShadow3={theme.boxShadow3}
            switchClass={switchClass}
            slide={slide}
            switchButtonPosition={theme.switchButtonPosition}
            bluRect={theme.bluRectangle}
            glass={theme.glass}
            glassBorder={theme.glassBorder}
            />
          <HomePage className='comp' theme={theme}/>
          <AboutPage 
            className='comp'
            themeBody={theme.body}
            themeBluRec={theme.bluRectangle}
            themeOrgSqu={theme.orgSquare}
          />
          <PortfolioPage 
            className='comp' 
            themeBody={theme.body}
            themeColor={theme.color}
            themeBoxShadow1={theme.boxShadow1}
            themeBoxShadow2={theme.boxShadow2}
            themeBluRec={theme.bluRectangle}
            themeOrgSqu={theme.orgSquare}
          />
          <ContactPage 
            className='comp' 
            themeBody={theme.body}
            themeColor={theme.color}
            themeBoxShadow1={theme.boxShadow3}
            themeBoxShadow2={theme.boxShadow4}
            themeBluRec={theme.bluRectangle}
            themeOrgSqu={theme.orgSquare}
            bluRect={theme.bluRectangle}
          />
          <Footer 
            className='comp'
            themeBoxShadow1={theme.boxShadow1}
            themeBoxShadow2={theme.boxShadow2}
            themeColor={theme.color}
            bluRect={theme.bluRectangle}
          />
      </StyledApp>
    </>
  );
}

export default App;
