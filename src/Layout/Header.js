import React,{useState, useContext} from 'react'
import{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,NavItem,NavLink,NavbarText
} from 'reactstrap'

import {Link} from "react-router-dom"

import {UserContext} from '../Context/UserContext'

const Header=()=>{
    const Context=useContext(UserContext)

    const [isOpen,setIsOpen]=useState(false)

    const toggle=()=>setIsOpen(!isOpen)


    return(
        <Navbar color="info" light expand="md">
            <NavbarBrand><Link to="/" className="text-white"> GitFire App</Link></NavbarBrand>
            <NavbarText className="text-white">{
                Context.user?.email? Context.user.email:""
            }</NavbarText>
            <NavbarToggler onClick={toggle}></NavbarToggler>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {
                        Context.user ? (
                            <NavItem>
                            <NavLink onClick={()=>{Context.setUser(null)}} className="text-white">Logout</NavLink>
                        </NavItem>
                        ) : 
                        (
                            <>
                            <NavItem>
                            <NavLink tag={Link} to="/signup" className="text-white">
                            Sign Up
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink tag={Link} to="/signin" className="text-white">
                            Sign In
                            </NavLink>
                        </NavItem>
                        </>
                        )
                    }
                    
                    
                </Nav>
            </Collapse>
        </Navbar>
    )

}

export default  Header;