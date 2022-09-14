import React from 'react'
import Button from '../Button/Button'
import './NavbarList.css'
import Switch from '../Switch/Switch'

const NavbarList = ({ toggleTheme, themeColor,themeBoxShadow1, themeBoxShadow2, switchClass, slide }) => {

	const ranNum = Math.floor(Math.random() * 10000);
	
	const navButtonArr = [
		{
			text: 'home',
			href: '#home',
			id: ranNum
		},
		{
			text: 'about',
			href: '#about',
			id: ranNum
		},
		{
			text: 'portfolio',
			href: '#portfolio',
			id: ranNum
		},
		{
			text: 'contact',
			href: '#contact',
			id: ranNum
		}
	];

	const navbarList = navButtonArr.map((arrItem) => {
		<li key={arrItem.id}>
			<Button 
				text=arrItem.text 
				href=arrItem.href
				themeColor={themeColor}
				themeBoxShadow1={themeBoxShadow1}
				themeBoxShadow2={themeBoxShadow2}
			/>
		</li>
	})
	
	return (
		<ul className='navbar-list'>
			{navbarList}
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
