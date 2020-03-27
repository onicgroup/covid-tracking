import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import { Logo, Title } from './header.styles';

import logo from '../../public/favicon.ico';

const Header = () => {	
	return (
		<Navbar variant="dark" collapseOnSelect expand="lg">
			<Link href="/">
				<Navbar.Brand className="ml-1">
					<Logo src={logo} alt="logo"/>
				</Navbar.Brand>
			</Link>
			<Title>COVID-19 Tracking</Title>
			{/**<Navbar.Toggle aria-controls="responsive-navbar-nav"/>**/}
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto"/>
				<Nav>
				{ // TODO: dropdown to select country
					// <NavDropdown title="Country" id="nav-dropdown" className="text-right" style={{width: '150px'}}>
					// 	<NavDropdown.Item>All</NavDropdown.Item>
					// 	<NavDropdown.Divider />
					// 	<NavDropdown.Item>China</NavDropdown.Item>
					// 	<NavDropdown.Item>USA</NavDropdown.Item>
					// 	<NavDropdown.Item>Canada</NavDropdown.Item>
					// </NavDropdown>
				}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header; 