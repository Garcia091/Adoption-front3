import React from 'react'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
  } from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Breadcrumb separator="" >
            <BreadcrumbItem >
               <Link to="/">Home</Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
               <Link to="/pets">Pets</Link>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
               <Link to="/new">Agregar</Link>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
               <Link to="/login">Login</Link>
            </BreadcrumbItem>

           
        </Breadcrumb>
    )
}

export default Navbar
