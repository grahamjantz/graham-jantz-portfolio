import React from 'react'
import NavButton from '../Button/NavButton'
import './NavbarList.css'
import Switch from '../Switch/Switch'

const NavbarList = ({ toggleTheme, themeColor,themeBoxShadow1, themeBoxShadow2, switchClass, slide, bluRect }) => {

	const ranNum = () =>{ 
		return Math.floor(Math.random() * 10000);
	}
	
	const navButtonArr = [
		{
			text: 'home',
			offset: 50,
			id: ranNum()
		},
		{
			text: 'about',
			offset: -150,
			id: ranNum()
		},
		{
			text: 'portfolio',
			offset: -50,
			id: ranNum()
		},
		// {
		// 	text: 'contact',
		// 	offset: 0,
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
						bluRect={bluRect}
					/>
			</li>
		)
	})
	
	return (
		<ul className='navbar-list'>
			{navbarMap}
			<Switch 
				toggleTheme={toggleTheme} 
				switchClass={switchClass}
				themeBoxShadow1={themeBoxShadow1}
				themeBoxShadow2={themeBoxShadow2}
				slide={slide}
			/>
		</ul>
	)

  /*return (
    <div className='navbar-list'>
        <Button 
          text='home' 
          href="#"
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}/>
        <Button 
          text='portfolio' 
          href="#portfolio"
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}/>
        <Button 
          text='about' 
          href="#about"
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}/>
        <Button 
          text='contact' 
          href="#contact"
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}/> 
        <Switch 
          toggleTheme={toggleTheme} 
          switchClass={switchClass}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}
          slide={slide}
          />
    </div>
  ) */
}

export default NavbarList
