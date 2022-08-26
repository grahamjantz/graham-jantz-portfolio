import {useState} from 'react'
import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage';
import PortfolioPage from './components/PortfolioPage/PortfolioPage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage/ContactPage';

function App() {
  const [page, setPage] = useState(<HomePage />);

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
    <div className="App">
      <Header 
        renderHomePage={renderHomePage}
        renderPortfolioPage={renderPortfolioPage}
        renderAboutPage={renderAboutPage}
        renderContactPage={renderContactPage}/>
      <Main page={page}/>
      <Footer />
    </div>
  );
}

export default App;
