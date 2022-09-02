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
import SideNavbarList from './components/SideNavbarList/SideNavbarList'

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [switchClass, setSwitchClass] = useState('inactive');
  const [slide, setSlide] = useState('0px')

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

  const StyledApp = styled.span`
  background-color: ${theme.body};
  color: ${theme.color};
  `;

  const StyledOrgSqu = styled.div`
    background-color: ${theme.orgSquare};
  `;
  const StyledBluRec = styled.div`
    background-color: ${theme.bluRectangle};
    border-bottom: 1px solid ${theme.bluRectangle};
  `;

  return (
    <div>
      <SideNavbarList 
        toggleTheme={toggleTheme} 
        themeColor={theme.color}
        themeBody={theme.body}
        themeBoxShadow1={theme.boxShadow1}
        themeBoxShadow2={theme.boxShadow2}
      />
      <StyledApp className='App'>
          <Header 
            toggleTheme={toggleTheme} 
            themeColor={theme.color}
            themeBody={theme.body}
            themeBoxShadow1={theme.boxShadow1}
            themeBoxShadow2={theme.boxShadow2}
            switchClass={switchClass}
            slide={slide}
            switchButtonPosition={theme.switchButtonPosition}
            />
          <div className='org-squ-container'>
            <StyledOrgSqu className='org-square'/>
          </div>
          <div className='blu-rec-master-container'>
            <div className='blu-rec-container'>
              <StyledBluRec className='blu-rectangle'/>
            </div>
            <div className='blu-rec-container2'>
              <StyledBluRec className='blu-rectangle2'/>
            </div>
          </div>
          <HomePage className='comp' />
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
            themeColor={theme.color}
            themeBoxShadow1={theme.boxShadow3}
            themeBoxShadow2={theme.boxShadow4}
            themeBluRec={theme.bluRectangle}
            themeOrgSqu={theme.orgSquare}
          />
          <Footer 
            className='comp'
            themeBoxShadow1={theme.boxShadow1}
            themeBoxShadow2={theme.boxShadow2}
            themeColor={theme.color}
          />
      </StyledApp>
    </div>
  );
}

export default App;
