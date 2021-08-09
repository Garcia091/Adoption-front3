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
                <BreadcrumbLink ><Link to="/">Home</Link></BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink ><Link to="/pets">Pets</Link></BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink ><Link to="/new">Agregar</Link></BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink ><Link to="/login">Login</Link></BreadcrumbLink>
            </BreadcrumbItem>

           
        </Breadcrumb>
    )
}

export default Navbar
