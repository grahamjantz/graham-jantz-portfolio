import React from 'react'
import NavButton from '../Button/NavButton'
import './SideNavbarList.css'

const SideNavbarList = ({ themeBody, themeColor,themeBoxShadow1, themeBoxShadow2, themeBoxShadow3, sideNavClass , slideIn}) => {

  // const [sideNavClass, setSideNavClass] = useState('inactive');

  // const slideIn = () => {
  //   sideNavClass === 'inactive' ? setSideNavClass('active') : setSideNavClass('inactive')
  // }

  const ranNum = () =>{ 
		return Math.floor(Math.random() * 10000);
	}
	
	const navButtonArr = [
		{
			text: 'home',
			offset: 0,
			id: ranNum()
		},
		{
			text: 'about',
			offset: -50,
			id: ranNum()
		},
		{
			text: 'portfolio',
			offset: 0,
			id: ranNum()
		},
		// {
		// 	text: 'contact',
		// 	offset: -100,
		// 	id: ranNum()
		// }
	];

	const navbarMap = navButtonArr.map((arrItem) => {
		return (
			<li key={arrItem.id} style={{height: '100%', display: 'flex', alignItems: 'center'}}>
					<NavButton 
						text={arrItem.text}
						to={arrItem.text}
						offset={arrItem.offset}
						themeColor={themeColor}
						themeBoxShadow1={themeBoxShadow1}
						themeBoxShadow2={themeBoxShadow2}
            handleClick={slideIn}
						// bluRect={bluRect}
					/>
			</li>
		)
	})

  return (
    <div>
        
    <div 
      className={`side-navbar-list ${sideNavClass}`}
      style={{
        backgroundColor: themeBody,
        boxShadow: `-3px -3px 7px ${themeBoxShadow3}, 3px 3px 5px ${themeBoxShadow3}`
        }}>
          <div className='side-nav-bar-list-buttons'>
            {navbarMap}
          </div>
        {/* <Button 
          text='home' 
          to="home"
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}
          handleClick={slideIn}/>
        <Button 
          text='about' 
          to="about"
          handleClick={slideIn} 
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}/>
        <Button 
          text='portfolio' 
          to="portfolio"
          handleClick={slideIn} 
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}/>
        <Button 
          text='contact' 
          to="contact"
          handleClick={slideIn} 
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}/> */}
    </div>
    </div>
  )
}

export default SideNavbarList
